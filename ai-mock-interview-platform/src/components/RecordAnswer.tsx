import { useAuth } from "@clerk/clerk-react";
import WebCam from "react-webcam";
import { useEffect, useState } from "react";
import useSpeechToText, { ResultType } from "react-hook-speech-to-text";
import { useParams } from "react-router";
import {
  CircleStop,
  Loader,
  Mic,
  RefreshCw,
  Save,
  Video,
  VideoOff,
  WebcamIcon,
} from "lucide-react";
import { TooltipButton } from "./TooltipButton";
import { toast } from "sonner";
import { chatSession } from "@/scripts";
import { SaveModel } from "./SaveModel";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "@/config/firebase-config";

interface AIResponse {
  rating: number;
  feedback: string;
}

interface RecordAnswerProps {
  question: { question: string; answer: string };
  isWebCam: boolean;
  setIsWebCam: (value: boolean) => void;
}

export const RecordAnswer = ({
  question,
  isWebCam,
  setIsWebCam,
}: RecordAnswerProps) => {
  const {
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  // States to have manage the answer wrt to questions
  const [userAnswer, setUserAnswer] = useState("");
  const [isAIGenerating, setIsAIGenerating] = useState(false);
  const [aiResult, setAiResult] = useState<AIResponse | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userId } = useAuth();
  const { interviewId } = useParams();

  // Recording the answer of the user function
  const recordUserAnswer = async () => {
    if (isRecording) {
      stopSpeechToText();

      if (userAnswer?.length < 30) {
        toast.error("Error", {
          description: "Your answer should be more than 30 characters",
        });
        return;
      }

      // Ai result is used to save
      const aiResult = await generateResult(
        question.question,
        question.answer,
        userAnswer
      );

      // Store the results
      console.log(aiResult);
      setAiResult(aiResult);
    } else {
      startSpeechToText();
    }
  };

  // CleanResponse
  const cleanAiResponse = (responseText: string) => {
    // Step 1 : trim any surrounding whitespace
    let cleanText = responseText.trim();

    // Step 2: Remove any occurrences of "json" or code block symbols (``` or `)
    cleanText = cleanText.replace(/(json|```|`)/g, "");

    // Step 3: Parse the clean JSON text into an array of objects
    try {
      return JSON.parse(cleanText);
    } catch (error) {
      throw new Error("Invalid JSON format: " + (error as Error)?.message);
    }
  };

  // Function to generate AI result
  const generateResult = async (
    qst: string,
    qstAns: string,
    userAns: string
  ): Promise<AIResponse> => {
    setIsAIGenerating(true);
    const prompt = `
      Question: "${qst}"
      User Answer: "${userAns}"
      Correct Answer: "${qstAns}"
      Please compare the user's answer to the correct answer, and provide a rating (from 1 to 10) based on answer quality, and offer feedback for improvement.
      Return the result in JSON format with the fields "rating" (number) and "feedback" (string).
    `;

    // Here we will get the ai response using the chat session within try-catch block
    try {
      //Here is chatsession
      const aiResult = await chatSession.sendMessage(prompt);
      const responseText = aiResult.response.text();
      console.log("AI Response:", responseText);
      // Clean the response to get the data
      const parsedResult: AIResponse = cleanAiResponse(responseText);
      return parsedResult;
    } catch (error) {
      console.log(error);
      toast("Error", {
        description: "An error occured while generating feedback.",
      });
      return { rating: 0, feedback: "Unable to generate feedback" };
    } finally {
      setIsAIGenerating(false);
    }
  };

  // Record New Answer function
  const recordNewAnswer = () => {
    setUserAnswer("");
    stopSpeechToText();
    startSpeechToText();
  };
  // This is used for saving the user answer into the database
  const saveUserAnswer = async () => {
    setLoading(true);
    // If not ai result generated then return
    if (!aiResult) {
      return;
    }

    // For current question
    const currentQuestion = question.question;
    try {
      // query the firebase to check if the user answer alreadhy exists or not
      const userAnswerQuery = query(
        collection(db, "userAnswers"),
        where("userId", "==", userId),
        where("question", "==", currentQuestion)
      );

      const querySnap = await getDocs(userAnswerQuery);
      // If the user already answer the question don't save it
      if (!querySnap.empty) {
        console.log("Query Sanp Size", querySnap.size);
        toast.info("Already Answered", {
          description: "You have already answered this question",
        });
        return;
      } else {
        // save the user answer into database

        await addDoc(collection(db, "userAnswers"), {
          mockIdRef: interviewId,
          question: question.question,
          correct_ans: question.answer,
          user_ans: userAnswer,
          feedback: aiResult.feedback,
          rating: aiResult.rating,
          userId,
          createdAt: serverTimestamp(),
          updateDoc: serverTimestamp(),
        });

        toast("Saved", { description: "Your answer has been saved.. " });
      }

      // Save the AI result to the database
      setUserAnswer("");
      // Stop the speech to text
      stopSpeechToText();
    } catch (error) {
      toast("Error", {
        description: "An error occured while generating the feedback.",
      });
      console.log(error);
    } finally {
      setLoading(false);
      setOpen(!open);
    }
  };

  // For collecting the data , when we click on mic option , it need to combine all transcription
  useEffect(() => {
    const combineTranscripts = results
      .filter((result): result is ResultType => typeof result !== "string")
      .map((result) => result.transcript)
      .join(" ");

    setUserAnswer(combineTranscripts);
  }, [results]);

  return (
    <div className="w-full flex flex-col items-center gap-8 mt-4">
      {/* Save Modal */}
      <SaveModel
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={saveUserAnswer}
        loading={loading}
      />

      {/* WebCam  */}
      <div className="w-full h-[400px] md:w-96 flex flex-col items-center justify-center border p-4 bg-gray-50 rounded-md">
        {isWebCam ? (
          <WebCam
            onUserMedia={() => setIsWebCam(true)}
            onUserMediaError={() => setIsWebCam(false)}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <WebcamIcon className="min-w-24 min-h-24 text-muted-foreground" />
        )}
      </div>

      {/* Action button Section */}
      <div className="flex itece justify-center gap-3">
        {/* video */}
        <TooltipButton
          content={isWebCam ? "Turn Off" : "Turn On"}
          icon={
            isWebCam ? (
              <VideoOff className="min-w-5 min-h-5" />
            ) : (
              <Video className="min-w-5 min-h-5" />
            )
          }
          onClick={() => setIsWebCam(!isWebCam)}
        />

        {/* Audio Button */}
        <TooltipButton
          content={isRecording ? "Stop Recording" : "Start Recording"}
          icon={
            isRecording ? (
              <CircleStop className="min-w-5 min-h-5" />
            ) : (
              <Mic className="min-w-5 min-h-5" />
            )
          }
          onClick={recordUserAnswer}
        />

        {/* Record Again button */}
        <TooltipButton
          content={isRecording ? "Stop Recording" : "Start Recording"}
          icon={<RefreshCw className="min-w-5 min-h-5" />}
          onClick={recordNewAnswer}
        />

        {/* Save Button Answer */}
        <TooltipButton
          content="Save Result"
          icon={
            isAIGenerating ? (
              <Loader className="min-w-5 min-h-5 animate-spin" />
            ) : (
              <Save className="min-w-5 min-h-5" />
            )
          }
          onClick={() => setOpen(!open)}
          disabled={!aiResult}
        />
      </div>

      {/* Answer record section */}
      <div className="w-full mt-4 p-4 border rounded-md bg-gray-50">
        <h2 className="text-lg font-semibold">Your Answer:</h2>

        <p className="text-sm mt-2 text-gray-700 whitespace-normal">
          {userAnswer || "Start recording to see your answer here"}
        </p>

        {interimResult && (
          <p className="test-sm text-gray-500 mt-2">
            <strong>Current Speech:</strong>
            {interimResult}
          </p>
        )}
      </div>
    </div>
  );
};

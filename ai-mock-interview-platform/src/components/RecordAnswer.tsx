import { useAuth } from "@clerk/clerk-react";
import WebCam from "react-webcam";
import { useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import { useParams } from "react-router";
import { WebcamIcon } from "lucide-react";

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
    error,
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
  const [userAnswer , setUserAnswer] = useState("");
  const [isAIGenerating , setIsAIGenerating] = useState(false);
  const [aiResult , setAiResult] = useState<AIResponse | null>(null);
  const [open , setOpen] = useState(false)
  const [loading , setLoading] = useState(false)

  const {userId} = useAuth();
  const {interviewId} = useParams();





  return <div className="w-full flex flex-col items-center gap-8 mt-4">
    {/* Save Modal */}


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

  </div>
};


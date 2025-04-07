import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import { useParams } from "react-router";

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





  return <div>RecordAnswer</div>;
};


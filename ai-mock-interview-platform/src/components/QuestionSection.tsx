import { useState } from "react";

interface QuestionSectionProps{
    questions: {question : string ; answer : string }[];
}
export const QuestionSection = ({ questions } : QuestionSectionProps) => {
    //This state is used for whether the questions voice is playing or not
    const [isPlaying , setIsPlaying] = useState(false);
    // This is for whether the webcam is enbled or not
    const [isWebCam , setIsWebCam] = useState(false);

    // For voice recording speech , we have in built SpeechSynthesisUtterance type in JS
    const[currentSpeech , setCurrentSpeech] = useState<SpeechSynthesisUtterance | null>(null);

  return (
    <div>QuestionSection</div>
  )
}

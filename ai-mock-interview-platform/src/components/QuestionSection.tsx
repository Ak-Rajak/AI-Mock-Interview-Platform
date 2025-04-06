import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TooltipButton } from "./TooltipButton";
import { Volume2, VolumeX } from "lucide-react";

interface QuestionSectionProps {
  questions: { question: string; answer: string }[];
}
export const QuestionSection = ({ questions }: QuestionSectionProps) => {
  //This state is used for whether the questions voice is playing or not
  const [isPlaying, setIsPlaying] = useState(false);
  // This is for whether the webcam is enbled or not
  const [isWebCam, setIsWebCam] = useState(false);

  // For voice recording speech , we have in built SpeechSynthesisUtterance type in JS
  const [currentSpeech, setCurrentSpeech] =
    useState<SpeechSynthesisUtterance | null>(null);

    // This function is used to play the question voice
    const handlePlayQuestion = (qst: string) => {
        // Stop the speech if already playing
        if(isPlaying && currentSpeech) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            setCurrentSpeech(null);
        } else {
            if("speechSynthesis" in window) {
                const speech = new SpeechSynthesisUtterance(qst);
                window.speechSynthesis.speak(speech);
                setIsPlaying(true);
                setCurrentSpeech(speech);

                // handle the speech end
                speech.onend = () => {
                    setIsPlaying(false);
                    setCurrentSpeech(null);
                };
            }
        }
    };

  return (
    <div className="w-full min-h-96 border rounded-md p-4">
      <Tabs
        defaultValue="questions[0]?.question"
        className="w-full space-y-12 "
        orientation="vertical"
      >
        <TabsList className="bg-transparent w-full flex flex-wrap items-center justify-start gap-4">
          {questions?.map((tab, i) => (
            <TabsTrigger
              className={cn(
                "data-[state=active]:bg-emerald-300 data-[state=active]:shadow-md text-xs px-2"
              )}
              key={tab.question}
              value={tab.question}
            >
              {`Question #${i + 1}`}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Questions displayed */}
        {questions?.map((tab, i) => (
          <TabsContent key={i} value={tab.question}>
            <p className="text-base text-left tracking-wide text-neutral-500">
              {tab.question}
            </p>
            <div className="w-full flex items-center justify-end">
              <TooltipButton
                content={isPlaying ? "Stop" : "Start"}
                icon={
                  isPlaying ? (
                    <VolumeX className="min-w-5 min-h-5 text-muted-foreground" />
                  ) : (
                    <Volume2 className="min-w-5 min-h-5 text-muted-foreground" />
                  )
                }
                onClick={() => handlePlayQuestion(tab.question)}
              />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

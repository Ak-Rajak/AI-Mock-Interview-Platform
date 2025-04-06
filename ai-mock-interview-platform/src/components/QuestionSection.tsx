import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

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

  return (
    <div className="w-full min-h-96 border rounded-md p-4">
      <Tabs
        defaultValue="questions[0]?.question"
        className="w-full space-y-12 "
        orientation="vertical"
      >
        <TabsList className="bg-transparent w-full flex flex-wrap items-center justify-start gap-4">
          {questions?.map((tab,i) => (
            <TabsTrigger className={cn("data-[start=active]:bg-emerald-300 data-[state=active]:shadow-md text-xs px-2")} key={tab.question} value={tab.question}>
                {`Question #${i + 1}`}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

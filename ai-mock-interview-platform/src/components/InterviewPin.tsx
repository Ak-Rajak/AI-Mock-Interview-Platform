import { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface InterviewPinProps {
  interview: Interview;
  // Action should not display on onMockPage
  onMockPage?: boolean;
}

export const InterviewPin = ({
  interview,
  onMockPage = false,
}: InterviewPinProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();

  return (
    <Card className="p-4 rounded-md shadow-none hover:shadow-md shadow-gray-100 cursor-pointer transition-all space-y-4">
      <CardTitle className="text-lg">{interview?.position}</CardTitle>
      <CardDescription>{interview?.description}</CardDescription>
      <div className="w-full flex items-center gap-2 flex-wrap">
        {interview.techStack.split(",").map((word , index) => (
          <Badge key={index}
          variant={"outline"}
          className="text-xs text-muted-foreground hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900">
            {word}
          </Badge>
        ))}
      </div>
      <CardFooter className={cn(
        "w-full flex items-center p-0",
        onMockPage ? "justify-end" : "justify-between"
      )}>
        <p className="text-[12px] text-muted-foreground truncate whitespace-nowrap ">
          {`${new Date(interview.createdAt.toDate()).toLocaleDateString(
            "en-US" , 
            {dateStyle: "long"}
          )} - ${new Date(interview.createdAt.toDate()).toLocaleTimeString("en-US" , {timeStyle:"short"})}`}
        </p>

        {/* Action button */}
        {!onMockPage && (
          <div className="flex items-center justify-center"></div>
        )}
      </CardFooter>
    </Card>
  );
};

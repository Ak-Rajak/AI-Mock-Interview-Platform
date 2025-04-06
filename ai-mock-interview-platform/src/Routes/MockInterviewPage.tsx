import { Interview } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import LoaderPage from "./Loaderpage";
import { CustomBreadCrum } from "@/components/CustomBreadCrum";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import { Lightbulb } from "lucide-react";

export const MockInterviewPage = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [interview, setInterview] = useState<Interview | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const fetchInterview = async () => {
      if (interviewId) {
        try {
          const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
          if (interviewDoc.exists()) {
            setInterview({
              id: interviewDoc.id,
              ...interviewDoc.data(),
            } as Interview);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchInterview();
  }, [interviewId, navigate]);

  if (isLoading) {
    return <LoaderPage className="w-full h-[70vh]" />;
  }

  if (!interviewId) {
    navigate("/generate", { replace: true });
  }

  if (!interview) {
    navigate("/generate", { replace: true });
  }

  return (
    <div className="flex flex-col w-full gap-8 py-5">
      <CustomBreadCrum
        breadCrumbPage="Start"
        breadCrumbItems={[
          { label: "Mock Interviews", link: "/generate" },
          {
            label: interview?.position || "",
            link: `/generate/interview/${interview?.id}`,
          }
        ]}
      />


      {/* Alert component for shadcn */}
      <div className="w-full">
      <Alert className="bg-sky-100 border border-sky-200 p-4 rounded-lg flex items-start gap-3 -mt-3">
        <Lightbulb className="h-5 w-5 text-sky-600" />
        <div>
          <AlertTitle>Important Infomation</AlertTitle>
          <AlertDescription className="text-sm text-sky-700 mt-1 leading-relaxed">
            Please enable your webcam and microphone to start the AI-generated
            mock interview. The interview consists of five questions. You’ll
            receive a personalized report based on your responses at the end.{" "}
            <br />
            <br />
            <span className="font-medium">Note:</span> Your video is{" "}
            <strong>never recorded</strong>. You can disable your webcam at any
            time.
          </AlertDescription>
        </div>
      </Alert>
      </div>
    </div>
  );
};

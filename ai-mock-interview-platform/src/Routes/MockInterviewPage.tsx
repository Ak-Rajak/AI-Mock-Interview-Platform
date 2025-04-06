import { Interview } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import LoaderPage from "./Loaderpage";


export const MockInterviewPage = () => {
    const { interviewId } = useParams<{ interviewId: string }>();
      const [interview, setInterview] = useState<Interview | null>(null);
      const [isLoading, setIsLoading] = useState(false);
      const navigate = useNavigate();

      useEffect(() => {} ,[
        interviewId,
        navigate,
      ]);

      if(isLoading) {
        return  <LoaderPage className="w-full h-[70vh]" />;
      }

      if(! interviewId){
        navigate("/generate", { replace: true });
      }

  return (
    <div>MockInterviewPage</div>
  )
}

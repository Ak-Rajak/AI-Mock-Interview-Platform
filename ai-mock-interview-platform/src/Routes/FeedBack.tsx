import { db } from "@/config/firebase-config";
import { Interview, UserAnswer } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { Description } from "@radix-ui/react-dialog";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import LoaderPage from "./Loaderpage";

export const FeedBack = () => {
  const { interviewId } = useParams<{ InterviewId: string }>();
  const [interview, setInterview] = useState<Interview | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState<UserAnswer[]>([]);
  const [activeFeed, setActiveFeed] = useState("");
  const { userId } = useAuth();
  const navigate = useNavigate();

  if (!interviewId) {
    navigate("/generate", { replace: true });
  }

  useEffect(() => {
    if (!interviewId) {
      // Function for fetching the interview data
      const fetchInterview = async () => {
        if (interviewId) {
          try {
            const interviewDoc = await getDoc(
              doc(db, "interviews", interviewId)
            );
            if (interviewDoc.exists()) {
              setInterview({
                id: interviewDoc.id,
                ...interviewDoc.data(),
              } as Interview);
            }
          } catch (error) {
            console.log(error);
          }
        }
      };

      // Fetch the feedbacks for the interview
      const fetchFeedbacks = async () => {
        setIsLoading(true);
        try {
          const querySnapRef = query(
            collection(db, "userAnswer"),
            where("mockIdRef", "==", interviewId),
            where("userId", "==", userId)
          );

          const querySnap = await getDocs(querySnapRef);

          const interviewData: UserAnswer[] = querySnap.docs.map((doc) => {
            return { id: doc.id, ...doc.data() } as UserAnswer;
          });

          setFeedbacks(interviewData);
        } catch (error) {
          console.log(error);
          toast("Error", {
            description: "Something went wrong. Please try again later..",
          });
        } finally {
          setIsLoading(false);
        }
      };

      fetchInterview();
      fetchFeedbacks();
    }
  }, [interviewId,navigate,userId]);

  // Calucate the ratings for the feedback out of 10 , using UseMemo hook
  const overAllRating = useMemo(() => {
    if (feedbacks.length === 0) return "0.0";

    const totalRatings = feedbacks.reduce(
      (acc, feedback) => acc + feedback.rating,
      0
    );

    return (totalRatings / feedbacks.length).toFixed(1);
  } , [feedbacks])

  if(isLoading){
    return <LoaderPage className="w-full h-[70vh]" />
  }


  return <div>FeedBack</div>;
};

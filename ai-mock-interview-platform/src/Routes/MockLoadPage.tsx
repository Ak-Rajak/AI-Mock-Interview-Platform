import { db } from "@/config/firebase-config";
import { Interview } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import LoaderPage from "./Loaderpage";


export const MockLoadPage = () => {
    // Necessary states 
    const {interviewId} = useParams<{interviewId : string}>();
    const [interview , setInterview] = useState<Interview | null>(null);
    const [isLoading , setIsLoading] = useState(false);
    const [isWebCamEnabled , setIsWebCamEnabled] = useState(false);

    // navigate hooks 
    const navigate = useNavigate();

    // fetch data from firebase for a particular inputs
    useEffect(() => {
        setIsLoading(true);
        const fetchInterview = async () =>{
            if (interviewId) {
                try {
                    const interviewDoc = await getDoc(doc(db, "interviews" , interviewId));
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
        }

        fetchInterview();
    } , [interviewId , navigate]);

    if(isLoading) {
        return <LoaderPage className="w-full h-[70vh]" />
    }
  return (
    <div className="flex flex-col w-full gap-8 py-5">
        <div className="flex items-center justify-between w-full gap-2">

        </div>
    </div>
  )
}

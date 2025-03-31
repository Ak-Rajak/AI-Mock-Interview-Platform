import { FormMockInterview } from "@/components/FormMockInterview"
import { db } from "@/config/firebase-config"
import { Interview } from "@/types"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export const CreateEditPage = () => {

    // To fetch the interviewId from the URL , its object type
    const {interviewId} = useParams<{interviewId : string}>()
    // to store the interviewId in the state , useState is used to store the interviewId in the state
    const [interview , setInterview] = useState<Interview | null>(null)

    // For any interviewId , we need to fetch the interview data from the database and set it in the state 
    // SO useEffect is used to fetch the interview data from the database and set it in the state
    useEffect(() => {
        const fetchInterview = async () => {
            // If interviewId exist , get data
            try {
                if (interviewId) {
                    const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
                    if (interviewDoc.exists()) {
                        setInterview({...interviewDoc.data()} as Interview)
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchInterview()
    } ,[interviewId])


  return (
    <div className="my-4 flex-col w-full">
        <FormMockInterview initialData={interview}/>
    </div>
  )
}

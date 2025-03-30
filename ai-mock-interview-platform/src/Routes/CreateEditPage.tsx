import { Interview } from "@/types"
import { useState } from "react"
import { useParams } from "react-router"

export const CreateEditPage = () => {

    // To fetch the interviewId from the URL , its object type
    const {interviewId} = useParams<{interviewId : string}>()
    // to store the interviewId in the state , useState is used to store the interviewId in the state
    const [interview , setInterview] = useState<Interview | null>(null)

  return (
    <div>CreateEditPage</div>
  )
}

import { Headings } from "@/components/Headings";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db } from "@/config/firebase-config";
import { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { Description } from "@radix-ui/react-dialog";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

export const Dashboard = () => {
  // State to store the interviewId
  const [interviews , setInterviews] = useState<Interview[]>([])
  const [loading , setloading] = useState(false)
  const{ userId} = useAuth();

  // Fetch the interviews from the database
  useEffect(() => {
    // Query function for database
    const interviewQuery = query(
      collection(db, "interviews"),
      where("userId", "==", userId)
    );

    const unSubscribe = onSnapshot(
      interviewQuery,
      (snapshot) => {
        const interviewList: Interview[] = snapshot.docs.map((doc) => {
          const id = doc.id;
          return {
            id,
            ...doc.data()
          };
        }) as Interview[];
        setInterviews(interviewList);
        setloading(false)
      }, (error) => {
        console.log(error , "Error fetching interviews data");
        toast.error("Error...", {
          description: "Something went wrong, try again later."
        });
        setloading(false)
      }
    )

    return () => unSubscribe();
  }, [userId]);


  return (
    <>
    <div className="flex w-full items-center justify-between">
      {/* Heading section */}
      <div className="flex w-full items-center justify-between">
        <Headings
          title="Dashboard"
          description="Create and start you AI Mock interview"
        />
        <Link to={"/generate/create"}>
            <Button size={"sm"}>
                <Plus/> Add New
            </Button>
        </Link>
      </div>
    </div>
    <Separator className="my-8"/>
    {/* content section */}
    </>
  );
};

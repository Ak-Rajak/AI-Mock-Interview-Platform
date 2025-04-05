import { Headings } from "@/components/Headings";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/config/firebase-config";
import { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

export const Dashboard = () => {
  // State to store the interviewId
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setloading] = useState(false);
  const { userId } = useAuth();

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
            ...doc.data(),
          };
        }) as Interview[];
        setInterviews(interviewList);
        setloading(false);
      },
      (error) => {
        console.log(error, "Error fetching interviews data");
        toast.error("Error...", {
          description: "Something went wrong, try again later.",
        });
        setloading(false);
      }
    );

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
              <Plus /> Add New
            </Button>
          </Link>
        </div>
      </div>
      <Separator className="my-8" />
      {/* content section */}

      <div className="md:grid md:grid-cols-3 gap-3 py-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-24 md:h-32 rounded-md" />
          ))
        ) : interviews.length > 0 ? (
          interviews.map((interview) => (
            // InterviewPin component to display interview details
            <InterviewPin key={interview.id} interview={interview} />
          ))
        ) : (
          // No data found section
          <div className="md:col-span-3 w-full flex flex-grow items-center justify-center h-96 flex-col">
            <img src="/assets/svg/not-found.svg" alt="" className="w-44 h-44 object-contain"/>

            <h2 className="text-lg font-semibold text-muted-foreground"> 
              No Data Found
            </h2>

            <p className="w-full md:w-96 text-center text-sm text-neutral-400 mt-4">
              There is no available data to show. Please some new mock interview.
            </p>

            <Link to={"/generate/create"} className="mt-4">
              <Button size={"sm"}>
                <Plus className="min-w-5 min-h-5 mr-1" /> Add New
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Interview } from "@/types";
import { CustomBreadCrum } from "./CustomBreadCrum";
import { BreadcrumbPage } from "./ui/breadcrumb";

interface FormMockInterviewProps {
  initialData: Interview | null;
}

// This is the schema for the form validsation
const formSchema = z.object({
  position: z
    .string()
    .min(1, "Position is required")
    .max(100, "Position must be 100 characters or less"),
  description: z.string().min(10, "Description is required"),
  experience: z.coerce
    .number()
    .min(0, "Experience cannot be empty or negative"),
  techStack: z.string().min(1, "Tech stack must be at least a character"),
});

type FormData = z.infer<typeof formSchema>;

export const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
    
    // This is the schema for the form validsation
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {}
    });

    
  return (
    <div className="w-full flex-col space-y-4">
      <CustomBreadCrum
        breadCrumbPage={BreadcrumbPage}
        breadCrumbItems={[{ label: "Mock Interview", link: "/generate" }]}
      />
    </div>
  );
};

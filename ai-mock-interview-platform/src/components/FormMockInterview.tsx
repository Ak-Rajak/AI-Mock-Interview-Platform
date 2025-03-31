import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Interview } from "@/types";
import { CustomBreadCrum } from "./CustomBreadCrum";
import { BreadcrumbPage } from "./ui/breadcrumb";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router";

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
    defaultValues: initialData || {},
  });

  // necessary states
  const { isValid, isSubmitted } = form.formState;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userId } = useAuth();

  // title passing
  const title = initialData?.position
    ? initialData?.position
    : "Create a new Mock Interview";

  // for breadcrum
  const breadCrumbPage = initialData?.position ? "Edit" : "Create";
  // For the actions and toastmessage
  const actions = initialData ? "Save Changes" : "Create";
  const toastMessage = initialData
    ? { title: "Updated..!", description: "Changes saved successfully..." }
    : { title: "Created..!", description: "New Mock Interview created..." };

    // For subitting of form


  useEffect(() => {
    if (initialData) {
      form.reset({
        position: initialData.position,
        description: initialData.description,
        experience: initialData.experience,
        techStack: initialData.techStack,
      });
    }
  }, [initialData, form]);

  return (
    <div className="w-full flex-col space-y-4">
      <CustomBreadCrum
        breadCrumbPage={BreadcrumbPage}
        breadCrumbItems={[{ label: "Mock Interview", link: "/generate" }]}
      />
    </div>
  );
};

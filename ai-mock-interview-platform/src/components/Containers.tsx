import { cn } from "@/lib/utils";

// Interface for type of props for conatiner components\
interface ContainerProps {
  children : React.ReactNode;
  className ?: string;
}

const Containers = ({children , className} : ContainerProps) => {
  return (
    <div className={cn(
        "container mx-auto px-4 md:px-8 py-4 w-full", className
    )}>
        {children}
    </div>
  )
}

export default Containers
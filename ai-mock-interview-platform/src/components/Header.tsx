import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import Containers from "./Containers";
import LogoContainer from "@/components/LogoContainer";
import NavigationRoutes from "@/components/NavigationRoutes";

const Header = () => {
  // Access the userId using useAuth() hook
  const { userId } = useAuth();

  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Containers>
        <div className="flex items-center gap-4 w-full">
          {/* logo section */}
          <LogoContainer />
          {/* navigation section  */}
          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes/>
          </nav>
          {/* profile section */}
        </div>
      </Containers>
    </header>
  );
};

export default Header;

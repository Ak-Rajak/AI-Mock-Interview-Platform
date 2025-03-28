import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import Containers from "./Containers";
import LogoContainer from "@/components/LogoContainer";
import NavigationRoutes from "@/components/NavigationRoutes";
import { NavLink } from "react-router";
import { ProfileContainer } from "./ProfileContainer";
import { ToggleContainer } from "./ToggleContainer";

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
            <NavigationRoutes />
            
            {/* If the user is authenticated then only render out the takeInterview nav */}
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>
          {/* profile */}
          <div className="ml-auto flex items-center gap-6">
            {/* <Profile section /> */}
            <ProfileContainer />
            {/* mobile toggle section */}
            <ToggleContainer/>
          </div>
        </div>
      </Containers>
    </header>
  );
};

export default Header;

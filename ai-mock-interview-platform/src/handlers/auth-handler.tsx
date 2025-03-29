import { useAuth, useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";


export const AuthHandler = () => {

  // parameters to used in the firebase authentication inside handler 
  const { isSignedIn } = useAuth();
  const {user} = useUser();

  const pathname = useLocation().pathname;
  const navigate = useNavigate(); 
  
  const [loading , setLoading]  = useState(false);

  return null
}

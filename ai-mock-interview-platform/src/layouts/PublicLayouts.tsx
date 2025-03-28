import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AuthHandler } from "@/handlers/auth-handler";
import { Outlet } from "react-router-dom";

export default function PublicLayouts() {
  return (
    <div className="w-full">
        {/* handle user data as its is authenticated or not so that if he is not the we put it into firebase  */}
        <AuthHandler/>
        <Header/> 
        {/* Outlet will render the route in like Homepage */}
        <Outlet/> 
        <Footer/>
    </div>
  )
}

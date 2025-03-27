import Containers from "@/components/Containers"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Outlet } from "react-router"

const MainLayouts = () => {
  return (
    <div className="flex flex-col h-screen">
        <Header/>
        {/* Wrapping the Conatiner Components in the outlet */}
        <Containers className="flex-grow">
            <main className="flex-grow">
                <Outlet/>
            </main> 
        </Containers>    
        <Footer/>
    </div>
  )
}

export default MainLayouts
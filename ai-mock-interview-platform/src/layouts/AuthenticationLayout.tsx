import { Outlet } from "react-router-dom";

export default function AuthenticationLayout() {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative">
        <Outlet/>
    </div>
  )
}

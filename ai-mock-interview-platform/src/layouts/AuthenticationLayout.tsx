import { Outlet } from "react-router-dom";

export default function AuthenticationLayout() {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative">
      <img src="/assets/img/bg.png" className="absolute w-full h-full object-cover opacity-20" alt="" />
        <Outlet/>
    </div>
  )
}

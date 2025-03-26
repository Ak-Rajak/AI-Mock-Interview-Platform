import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import  PublicLayouts  from "@/layouts/PublicLayouts"
import HomePage from "@/Routes/Home"
import AuthenticationLayout from "@/layouts/AuthenticationLayout"
import SignIn from "@/Routes/SignIn"
import SignUp from "@/Routes/SignUp"


const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayouts />}>
          <Route index element={<HomePage/>} />
        </Route>
        {/* Authentication layouts */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Route>
        {/* protected routes */}
      </Routes>
    </Router>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayouts from "@/layouts/PublicLayouts";
import HomePage from "@/Routes/Home";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import SignInPage from "@/Routes/SignIn";
import SignUpPage from "@/Routes/SignUp";
import ProtectedRoutes from "./layouts/ProtectedRoutesLayout";
import MainLayouts from "./layouts/MainLayouts";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayouts />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* Authentication layouts */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>
        {/* protected routes - those routes which are going to render only when the user is authenticated */}
        <Route
          element={
            <ProtectedRoutes>
              <MainLayouts />
            </ProtectedRoutes>
          }
        >
          {/* All the protected routes will be here inside the mainlayout */}

        </Route>
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayouts from "@/layouts/PublicLayouts";
import HomePage from "@/Routes/Home";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import SignInPage from "@/Routes/SignIn";
import SignUpPage from "@/Routes/SignUp";
import ProtectedRoutes from "./layouts/ProtectedRoutesLayout";
import MainLayouts from "./layouts/MainLayouts";
import { Generate } from "./components/Generate";
import { Dashboard } from "./Routes/Dashboard";
import { CreateEditPage } from "./Routes/CreateEditPage";
import { MockLoadPage } from "./Routes/MockLoadPage";
import { MockInterviewPage } from "./Routes/MockInterviewPage";

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
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />}/>
            <Route path=":interviewId" element={<CreateEditPage />}/>
            <Route path="interview/:interviewId" element={<MockLoadPage />}/>
            <Route path="interview/:interviewId/start" element={<MockInterviewPage />}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router,Routes ,Route } from "react-router-dom"

import PublicLayout from "@/layouts/public-layout"
import AuthenticationLayout from "@/layouts/auth-layout"

import Homepage from "@/routes/home"
import {SignInPage} from "./routes/sign-in";
import {SignUpPage} from "./routes/sign-up";
import ProtectRoutes from "./routes/protected-routes";
import MainLayout from "./layouts/main-layout";
import { Generate } from "./components/generate";
import Dashboard from "./routes/dashboard";
import CreateEditPage from "./routes/create-edit-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { Feedback } from "./routes/feedback";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
const App = () => {
  return (
    <Router>
      <Routes>
        {/*Public route */}
        <Route element={<PublicLayout/>}>
          <Route index element={<Homepage />}/>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout/>}>
          <Route path="/signin/*" element={<SignInPage/>}/>
          <Route path="/signup/*" element={<SignUpPage/>}/>
        </Route>

        {/*Private route */}
        <Route element={<ProtectRoutes>
                          <MainLayout/>
                        </ProtectRoutes>}>


          {/* Add All the protect routes */}
          <Route element={<Generate/>} path="/generate">
            <Route index element={<Dashboard/>} />
            <Route path=":interviewId" element={<CreateEditPage/>} />
            <Route path="interview/:interviewId" element={<MockLoadPage/>} />
            <Route path="interview/:interviewId/start" element={<MockInterviewPage/>} />
            <Route path="feedback/:interviewId/" element={<Feedback/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router,Routes ,Route } from "react-router-dom"

import PublicLayout from "@/layouts/public-layout"
import AuthenticationLayout from "@/layouts/auth-layout"

import Homepage from "@/routes/home"
import {SignInPage} from "./routes/sign-in";
import {SignUpPage} from "./routes/sign-up";
import ProtectRoutes from "./routes/protected-routes";
import MainLayout from "./layouts/main-layout";
const App = () => {
  return (
    <Router>
      <Routes>
        {/*Public route */}
        <Route element={<PublicLayout/>}>
          <Route index element={<Homepage />}/>
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
        </Route>
      </Routes>
    </Router>
  )
}

export default App

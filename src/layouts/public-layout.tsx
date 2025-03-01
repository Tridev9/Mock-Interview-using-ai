import Header from "@/components/header"
import Footer from "@/components/footer"
import { Outlet } from "react-router-dom"
const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default PublicLayout

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Outlet } from "react-router-dom"

export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/*Handler to store the user data */}
      <Header/>
      <Outlet/>
      {/* Footer component */}
      <Footer/>
    </div>
  )
}

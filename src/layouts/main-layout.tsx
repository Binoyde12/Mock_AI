import { Container } from "@/components/container"
import { Footer } from "@/components/footer"

import Header from "@/components/header"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/*Handler to store the user data */}
      <Header/>
      
      <Container className="flex-grow">
        <main className="flex-grow">
          {/* Render the content of the current route */}
          <Outlet/>
        </main>
      </Container>
      {/* Footer component */}
      <Footer/>
    </div>
  )
}

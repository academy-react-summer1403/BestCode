import { Outlet } from "react-router-dom"
import Header from "../common/Header/Header"
import Footer from "../common/Footer/Footer"

const Layout = () => {
  return (
     <div>
        <Header />
          <main>
            <Outlet />
          </main>
         <Footer />    
     </div>
  )
}

export default Layout
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"

const MainLayout = () => {
    return (
        <div>

            <header>
                <Navbar />
                this is Navbar


            </header>

            <main className="h-[calc(100vh-400px)]">
                <Outlet />
            </main>


            <Footer></Footer>

        </div>
    )
}

export default MainLayout

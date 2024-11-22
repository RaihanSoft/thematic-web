import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"

const MainLayout = () => {
    return (
        <div>

            <header>
                <Navbar />
                this is Navbar


            </header>

            <main>
                <Outlet />
            </main>

            <footer></footer>

        </div>
    )
}

export default MainLayout

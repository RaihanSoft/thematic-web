<<<<<<< HEAD
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import BannerSlide from '../Components/BannerSlide/BannerSlide';
=======
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
>>>>>>> 10a014d6f0424240b9a69dbb3c1c95a8e79db2bf

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar />

        <BannerSlide></BannerSlide>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

<<<<<<< HEAD
export default MainLayout;
=======
            <main>
                <Outlet />
            </main>

            <Footer></Footer>

        </div>
    )
}

export default MainLayout
>>>>>>> 10a014d6f0424240b9a69dbb3c1c95a8e79db2bf

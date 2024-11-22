import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import BannerSlide from '../Components/BannerSlide/BannerSlide';

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

export default MainLayout;

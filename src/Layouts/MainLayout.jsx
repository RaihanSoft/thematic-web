import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;

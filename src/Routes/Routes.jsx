import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Bundles from "../Pages/Bundles";
import Contact from "../Pages/Contact";
import HireUs from "../Pages/HireUs";
import ReactTemplete from '../Pages/AllTheme/ReactTemplete/ReactTemplete'
import TailwindTemplete from '../Pages/AllTheme/TailwindTemplete/TailwindTemplete'
<<<<<<< HEAD
import All_Astro from "../Pages/DynamicPage/All_Astro";
=======
import PrivacyPolicy from "../Pages/Extra/PrivacyPolicy";
>>>>>>> b92e776e6e9ce1d35c3130b7f91ad3d60aef757e


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [

            {
                path: '/',
                element: <Home />,
                loader:()=> fetch('./astro-themes.json')
            },
            {
                path: '/detail',
                element: <ReactTemplete />
            },            
            {
                path: '/react',
                element: <ReactTemplete />
            },
            {
                path: '/tailwind',
                element: <TailwindTemplete />
            },

            {
                path: '/bundles',
                element: <Bundles />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/hire-us',
                element: <HireUs />
            },           
             {
                path: '/all_astro',
                element: <All_Astro />,
                loader:()=> fetch('./astro-themes.json')
                
            },
            {
                path: '/privacy',
                element: <PrivacyPolicy></PrivacyPolicy>
            }
        ]
    },
]);
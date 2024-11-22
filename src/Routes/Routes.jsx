import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Bundles from "../Pages/Bundles";
import Contact from "../Pages/Contact";
import HireUs from "../Pages/HireUs";
import ReactTemplete from '../Pages/AllTheme/ReactTemplete/ReactTemplete'
import TailwindTemplete from '../Pages/AllTheme/TailwindTemplete/TailwindTemplete'
import PrivacyPolicy from "../Pages/Extra/PrivacyPolicy";


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
                path: '/privacy',
                element: <PrivacyPolicy></PrivacyPolicy>
            }
        ]
    },
]);
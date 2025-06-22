
import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Quran from "../Pages/Quran/Quran";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/About",
                element: <About></About>
            },
            {
                path: "/quran",
                element: <Quran></Quran>
            }



        ]
    },
]);

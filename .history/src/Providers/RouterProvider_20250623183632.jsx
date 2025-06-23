
import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Quran from "../Pages/Quran/Quran";
import Sura from "../Pages/Sura/Sura";
import SinglePageQuran from "../Pages/QuranByPage/SinglePageQuran";
import SingleJuz from "../Pages/QuranByJuz/SingleJuz";


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
            },
            {
                path: "/quran/:suraNumber",
                element: <Sura></Sura>
            },
            {
                path: "quranByPage/:pageNum",
                element: <SinglePageQuran></SinglePageQuran>
            },
            {
                path: "quranByJuz/:juzNum",
                element: <SingleJuz></SingleJuz>
            }
            
           



        ]
    },
]);

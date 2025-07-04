
import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
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
            }



        ]
    },
]);

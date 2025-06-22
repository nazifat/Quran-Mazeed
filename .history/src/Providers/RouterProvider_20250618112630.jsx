
import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Pages/Root/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>
    },
]);

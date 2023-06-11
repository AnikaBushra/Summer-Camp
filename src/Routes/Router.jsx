import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
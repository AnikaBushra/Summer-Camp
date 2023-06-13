import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signin from "../Pages/Signin/Signin";
import InstructorPages from "../Pages/InstructorPages/InstructorPages";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signin></Signin>
            },
            {
                path: '/instructors',
                element: <InstructorPages></InstructorPages>,
                loader: async () => await fetch('http://localhost:5000/instructors')
            }
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signin from "../Pages/Signin/Signin";
import InstructorPages from "../Pages/InstructorPages/InstructorPages";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/StudentPayment/Payment";
import SelectedClasses from "../components/SelectedClasses/SelectedClasses";
import EnrolledClass from "../Pages/EnrolledClass/EnrolledClass";
import History from "../Pages/History/History";

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
                loader: async () => await fetch('https://summer-camp-server-lac-ten.vercel.app/instructors')
            },
            {
                path: '/classes',
                element: <AllClasses></AllClasses>,
                loader: async () => await fetch('https://summer-camp-server-lac-ten.vercel.app/allClasses')
            },


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <SelectedClasses></SelectedClasses>
            },

            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/enrolledClass',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: '/dashboard/history',
                element: <History></History>
            }


        ]
    },
])
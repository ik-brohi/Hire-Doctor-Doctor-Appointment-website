import { createBrowserRouter } from "react-router-dom";
import Appointment from "../AppointmentPage/Appointment";
import Homepage from "../Home/Homepage";
import DashBoardLayout from "../MainPage/DashBoardLayout";
import MainPage from "../MainPage/MainPage";
import Review from "../Review/Review";
import Login from "../signIn/Login";
import Register from "../signIn/Register";
import PrivateRoute from "./Private/PrivateRoute";
import DashBoard from "../Dasboard/DashBoard";
import MakeAdmin from "../Admin/MakeAdmin";
import AdminRoute from "./Private/AdminRoute";
import AddDoctors from "../Admin/AddDoctors";
const route = createBrowserRouter([
    {
        path: '/',
        element: <MainPage></MainPage>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            },
            {
                path: '/home',
                element: <Homepage></Homepage>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/review',
                element: <PrivateRoute>
                    <Review></Review>
                </PrivateRoute>
            },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },

            {
                path: '/dashboard/admin',
                element:<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
            },
            {
                path: '/dashboard/doctors',
                element:<AdminRoute><AddDoctors></AddDoctors></AdminRoute>
            },
        ]
    }

])
export default route;
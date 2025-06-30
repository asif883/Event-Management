import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RegistrationPage from "../Pages/RegistrationPage";
import PrivateRoute from "./PrivateRoute";
import AddEvent from "../Pages/AddEvent";
import Events from "../Pages/Events";
import MyEvent from "../Pages/MyEvent";
import Update from "../Pages/Update";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/sign-up',
                element: <RegistrationPage/>
            },
            {
                path: '/add-event',
                element: <PrivateRoute><AddEvent/></PrivateRoute>
            },
            {
                path: '/events',
                element: <PrivateRoute><Events/></PrivateRoute>
            },
            {
                path: '/my-event',
                element: <PrivateRoute><MyEvent/></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update/></PrivateRoute>
            }
        ]
    }
])
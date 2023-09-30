import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Components/SignIn/SignIn";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[{
            path: '/',
            element:<Home></Home>
        },
    {
        path:'/sign-in',
        element: <SignIn></SignIn>
    }]
    }
])
export default Router;
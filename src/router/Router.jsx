import Login from "../views/Login.jsx";
import Home from "../views/Home.jsx";
import { Routes, Route } from 'react-router-dom';
import ProtectRoute from "./index.js";

export const LOGIN_ROUTE_NAME = 'Login'
export const CHANGE_PW_ROUTE_NAME = 'ChangePassword'

const routeData = [
    {
        path: "/login",
        title: {LOGIN_ROUTE_NAME},
        element: <Login />,
        meta: { hiddenBreadcrumb: true }
    },

    {
        path: "/",
        title: "Home",
        // element: <Navigate to="/configuration/south-driver" replace />,
        element: <Home />
    },
]

const Router = () => {
    const pageRoutes = routeData.map(({title, path, element}) => {
        return <Route key={title} 
                      path={`${path}`} 
                      element={
                        <ProtectRoute>
                            {element}
                        </ProtectRoute>
                        } />

    })

    return <Routes>{pageRoutes}</Routes>
}

export default Router;
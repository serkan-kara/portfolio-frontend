import { Route, BrowserRouter as Router } from "react-router-dom";

import { ROUTES } from "./constants";

import Landing from "../pages/landing";

const publicRoutes = [
    {
        path: ROUTES.LANDING,
        exact: true,
        component: Landing
    }
];

const Routes = () => {
    return (
        <Router>
            {
                publicRoutes.map((route, index) => (
                    <Route key={index} path={route.path}>
                        <route.component />
                    </Route>
                ))
            }
        </Router>
    )
}

export default Routes;


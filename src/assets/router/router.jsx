import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import Root from "../pages/Root";
import SignelPage from "../pages/SignelPage";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Root />,
        children: [
            {
                path: '/',
                element:<Home />
            },
            {
                path: '/articles/:id',
                element:<SignelPage />
            }
        ]
    }
]);

export default router;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutletComponent from './pages/OutletComponent';
import Cart from './pages/Cart';
import SingleProduct from "./pages/SingleProduct";
import First from "./pages/First";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <OutletComponent />,
        children: [
            {
                index: true,
                element: <First />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/product/:id",
                element: <SingleProduct />
            },
            {
                path: "/wishlist",
                element:<Wishlist />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
        
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router;
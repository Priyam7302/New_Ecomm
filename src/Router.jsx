import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutletComponent from "./pages/OutletComponent";
import Cart from "./pages/Cart"
import SingleProduct from "./pages/SingleProduct";
import First from "./pages/First";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import CartProvider from "./contexts/CartProvider";
import AuthProvider from "./contexts/AuthProvider";

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
                path: "cart",
                element: <Cart />,
            },
            {
                path: "wishlist",
                element: <Wishlist />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "shop",
                element: <First />,
            },
            {
                path: "product/:id",
                element: <SingleProduct />,
            },
            {
                path: "home",
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

function Router() {
    return (
        <AuthProvider>
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </AuthProvider>
    );
}

export default Router;

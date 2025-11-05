import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutletComponent from './pages/OutletComponent';
import Cart from './pages/Cart';
import SingleProduct from "./pages/SingleProduct";
import First from "./pages/First";
import Wishlist from "./pages/Wishlist";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import CartProvider from "./contexts/CartProvider";

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
                path: "product/:id",
                element: <SingleProduct />
            },
            {
                path: "wishlist",
                element: <Wishlist />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "shop",
                element: <First />
            },
            {
                path: "register",
                element: <Register />

            },
            {
                path: "Home",
                element: <Home />
            }
        ]

    }
]);

function Router() {
    return <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>;
}

export default Router;
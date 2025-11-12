import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartProvider";
import { useAuth } from "../contexts/AuthProvider";

function Header() {
    const { cart } = useCart();
    // const { cartItems} = useCart();
    const { isLoggedIn, logout } = useAuth();

    return (
        <header>
            <h1>
                <NavLink to="/">Ecommerce</NavLink>
            </h1>

            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Cart ({cart.length})
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/wishlist"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Wishlist
                        </NavLink>
                    </li>

                    <li>
                        {isLoggedIn ? (
                            <button onClick={logout} className="logout-btn">
                                Logout
                            </button>
                        ) : (
                            <NavLink
                                to="/login"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                Login
                            </NavLink>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

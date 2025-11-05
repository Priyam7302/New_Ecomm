import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartProvider";

function Header() {
    const { cart } = useCart();

    return (
        <header className="header">
            <h1 className="logo">
                <NavLink to="/">Ecommerce</NavLink>
            </h1>

            <nav>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/cart">Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/wishlist">Wishlist</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

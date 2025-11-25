// import { NavLink } from "react-router-dom";
// import { useCart } from "../contexts/CartProvider";
// import { useAuth } from "../contexts/AuthProvider";
// import { useCurrency } from "../contexts/CurrencyProvider";

// function Header() {
//     const { cart } = useCart();
//     const { isLoggedIn, logout } = useAuth();
//     const { currency, setCurrency } = useCurrency();

//     return (
//         <header>
//             <h1>
//                 <NavLink to="/">Ecommerce</NavLink>
//             </h1>

//             <nav>
//                 <ul>
//                     <li>
//                         <NavLink to="/cart">Cart ({cart.length})</NavLink>
//                     </li>

//                     <li>
//                         <NavLink to="/wishlist">Wishlist</NavLink>
//                     </li>

//                     <li>
//                         {isLoggedIn ? (
//                             <button onClick={logout}>Logout</button>
//                         ) : (
//                             <NavLink to="/login">Login</NavLink>
//                         )}
//                     </li>

//                     <li>
//                         <select
//                             value={currency}
//                             onChange={(e) => setCurrency(e.target.value)}
//                         >
//                             <option value="INR">INR</option>
//                             <option value="USD">USD</option>
//                             <option value="EUR">EUR</option>
//                         </select>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;
// src/components/Header.jsx

import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartProvider";
import { FaCartPlus } from "react-icons/fa";
import { useCurrency } from "../contexts/CurrencyProvider";
import { useAuth } from "../contexts/AuthProvider";

function Header() {
    const { cart } = useCart();
    const { currency, setCurrency } = useCurrency();
    const { state, logout } = useAuth();

    return (
        <header id="site-header" className="site-header">
            <h1 id="brand">
                <NavLink to="/">Ecommerce</NavLink>
            </h1>

            <ul id="nav-list" className="nav-list">
                {/* Cart Link */}
                <li className="cart-nav">
                    <NavLink to="/cart">
                        <FaCartPlus className="cart-icon" /> Cart
                    </NavLink>
                    <div className="cart-circle">{cart.length}</div>
                </li>

                {/* Wishlist */}
                <li>
                    <NavLink to="/wishlist">Wishlist</NavLink>
                </li>

                {/* Currency Selector */}
                <li>
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        <option value="INR">₹ INR</option>
                        <option value="USD">$ USD</option>
                        <option value="EUR">€ EUR</option>
                    </select>
                </li>

                {/* Login / Logout Button */}
                <li>
                    {state.isLoggedIn ? (
                        <button onClick={logout} className="logout-btn">
                            Logout
                        </button>
                    ) : (
                        <NavLink to="/login">Login</NavLink>
                    )}
                </li>
            </ul>
        </header>
    );
}

export default Header;
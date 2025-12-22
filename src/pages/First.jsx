// import { useEffect, useState } from "react";
// import instance from "../config/axiosConfig.js";
// import { Link } from "react-router-dom";
// // import '../Apps.css';
// import { useCurrency } from "../contexts/CurrencyProvider";
// import '../App.css';


// function First() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const { currency, convert } = useCurrency();

//     useEffect(() => {
//         getData();
//     }, []);

//     async function getData() {
//         try {
//             setLoading(true);
//             const response = await instance.get("/product/get");
//             console.log(response.data);
//             setProducts(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }

//     }

//     function trimContent(input, len) {
//         let arr = input.split(" ");
//         return arr.length > len ? arr.slice(0, len).join(" ") + "..." : input;
//     }

//     if (loading) return <div className="loader">Loading.....</div>

//     return (
//         <>
//             <div className="products-main">
//                 {products.map((obj) => (
//                     <div className="card" key={obj._id}>
//                         <Link to={`/product/${obj._id}`}>
//                             <img src={obj.image} alt={obj.name} />
//                         </Link>
//                         <p className="title"><Link to={`/product/${obj._id}`}>{trimContent(obj.name, 8)}</Link></p>
//                         {/* <p className="title"><Link to={`/product/${obj._id}`}>{obj.name}</Link></p> */}
//                         {/* <p className="price">{obj.price}</p> */}
//                         <p className="price">
//                             {currency} {convert(obj.price).toFixed(2)}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default First;

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const First = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === null) return;
    if (isLoggedIn) navigate("/home");
  }, [isLoggedIn, navigate]);

  if (isLoggedIn === null) {
    return <div className="loader">Loading...</div>;
  }

  // ✅ SHOP NOW HANDLER
  const handleShopNow = () => {
    if (isLoggedIn) {
      navigate("/home"); // products page
    } else {
      navigate("/login"); // login page
    }
  };

  return (
    <div className="landing-container">
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Shop Smarter. Live Better.</h1>
          <p>
            Discover premium products, exclusive deals, and seamless shopping —
            all in one place.
          </p>
          <div className="hero-actions">
            <Link to="/login" className="btn primary">
              Login
            </Link>
            <Link to="/register" className="btn secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY IMAGES */}
      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="https://www.extrahypermarket.com/assets/images/electronics-items-2.jpg" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b" />

            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" />
            <h3>Home & Living</h3>
          </div>

          <div className="category-card">
            <img src="https://media.theeverygirl.com/wp-content/uploads/2024/07/the-everygirl-feature-amazon-summer-accessories-2025.jpg" />
            <h3>Accessories</h3>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">🚚 Fast Delivery</div>
          <div className="feature-card">🔒 Secure Payments</div>
          <div className="feature-card">💖 Wishlist & Cart</div>
          <div className="feature-card">🌍 Multi-Currency Support</div>
        </div>
      </section>

      {/* PROMO SECTION */}
      <section className="promo">
        <div className="promo-text">
          <h2>Exclusive Deals for Members</h2>
          <p>Login now to unlock special prices and offers.</p>
          {/* <Link to="/login" className="btn primary">
            Shop Now
          </Link> */}
          {/* ✅ CONDITIONAL NAVIGATION */}
          <div
            className="btn primary"
            onClick={handleShopNow}
            style={{ cursor: "pointer" }}
          >
            Shop Now
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1607082349566-187342175e2f" />
      </section>
    </div>
  );
};

export default First;

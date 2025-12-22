// import React from 'react';

// const Home = () => {
//     return (
//         <div>
//             Home Page
//         </div>
//     );
// }

// export default Home;




import { useEffect, useState } from "react";
import instance from "../config/axiosConfig.js";
import { Link } from "react-router-dom";
// import '../Apps.css';
import { useCurrency } from "../contexts/CurrencyProvider";
import '../App.css';
// import { FaRegHeart } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import { useWishlist } from "../contexts/WishlistProvider";


function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { currency, convert } = useCurrency();
    const { addToWishlist, isInWishlist } = useWishlist();


    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            setLoading(true);
            const response = await instance.get("/product/get");
            console.log(response.data);
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }

    function trimContent(input, len) {
        let arr = input.split(" ");
        return arr.length > len ? arr.slice(0, len).join(" ") + "..." : input;
    }

    if (loading) return <div className="loader">Loading.....</div>

    return (
      <>
        <div className="products-main">
          {products.map((obj) => (
            // <div className="card" key={obj._id}>
            //     <Link to={`/product/${obj._id}`}>
            //         <img src={obj.image} alt={obj.name} />
            //     </Link>
            //     <p className="title"><Link to={`/product/${obj._id}`}>{trimContent(obj.name, 8)}</Link></p>
            //     <p className="price">
            //         {currency} {convert(obj.price).toFixed(2)}
            //     </p>
            // </div>
            <div className="card" key={obj._id}>
              <button
                className={`wishlist-btn ${
                  isInWishlist(obj._id) ? "active" : ""
                }`}
                onClick={() => addToWishlist(obj)}
              >
                {/* <FaRegHeart /> */}
                <IoHeart />
              </button>

              <Link to={`/product/${obj._id}`}>
                <img src={obj.image} alt={obj.name} />
              </Link>

              <p className="title">
                <Link to={`/product/${obj._id}`}>
                  {trimContent(obj.name, 8)}
                </Link>
              </p>

              <p className="price">
                {currency} {convert(obj.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </>
    );
}

export default Home;

import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useWishlist } from "../contexts/WishlistProvider";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page empty">
        <FaRegHeart size={80} color="#ff6b35" />
        <h2>Your Wishlist is Empty</h2>
        <p>Save your favorite products to see them here.</p>
        <Link to="/home" className="btn primary">
          Browse Products
        </Link>
      </div>
    );
  }
  function trimContent(input, len) {
    let arr = input.split(" ");
    return arr.length > len ? arr.slice(0, len).join(" ") + "..." : input;
  }

  return (
    <div className="wishlist-page">
      <h2 className="wishlist-title">
        <FaRegHeart /> My Wishlist
      </h2>

      <div className="products-main">
        {wishlist.map((product) => (
          <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt={product.name} />
            </Link>

            <p className="title">
              <Link to={`/product/${product._id}`}>
                {trimContent(product.name, 8)}
              </Link>
            </p>

            <button
              className="wishlist-remove-btn"
              onClick={() => removeFromWishlist(product._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

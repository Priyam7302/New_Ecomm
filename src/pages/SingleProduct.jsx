import instance from "../config/axiosConfig";
import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartProvider";
import "../pages/SingleProduct.css";

function SingleProduct() {
    // const id = useParams().id;
    
    const { id } = useParams();
    const { cart, setCart } = useCart();

    const [singleProduct, setSingleProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getSingleData(id);
    }, [id]);

    useEffect(() => {
        localStorage.setItem("storedCart", JSON.stringify(cart));
    }, [cart]);

    async function getSingleData(id) {
        try {
            setLoading(true);
            const response = await instance.get("/product/product/" + id);
            if (response.data.length === 0) {
                setLoading(false);
                setError("Check the ID parameter");
            } else {
                setSingleProduct(response.data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setError("Check the ID parameter");
            setLoading(false);
        }
    }

    function handleAddToCart(idToAdd) {
        setCart([...cart, { id: idToAdd, quantity: 1 }]);
    }

    if (loading) return <div className="loader">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <main className="single-product-page">
            <section className="single-product">
                <div className="product-left">
                    <img
                        src={singleProduct.image}
                        alt={singleProduct.name}
                        className="product-image"
                    />
                </div>

                <div className="product-right">
                    <h2 className="product-title">{singleProduct.name}</h2>
                    <p className="product-category">{singleProduct.category}</p>
                    <h4 className="product-price">₹{singleProduct.price}</h4>
                    <p className="product-desc">{singleProduct.description}</p>
                    <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(singleProduct._id)}
                    >
                        Add To Cart
                    </button>
                </div>
            </section>
        </main>
    );
}

export default SingleProduct;

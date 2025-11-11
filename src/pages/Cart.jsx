import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartProvider";
import instance from "../config/axiosConfig";

const Cart = () => {
    const { cart } = useCart();
    console.log(cart);
    
    const [cartItems, setItems] = useState([]);

    useEffect(() => {
        getCartProducts(cart);
    }, [cart]);

    async function getCartProducts(cart) {
        const promises = cart.map((obj) => {
            return instance.get("/product/product/" + obj.id)
        });
        let temp = await Promise.all(promises);
        // console.log(temp);
        setItems(temp.map((obj) => obj.data));
    }
    console.log(cartItems);
    
    return (
        <>
            <div className="left">
                {cartItems.map((obj) => {
                    return (
                        <div className="cartItems">
                            <div className="img">
                                <img src={obj.image} alt={obj.name} />
                            </div>
                            <div className="content">
                                <h3>{obj.name}</h3>
                                <p>{obj.price}</p>
                            </div>
                        </div>

                    )
                })}
            </div>
            <div className="right"></div>
        </>
    );
}

export default Cart;

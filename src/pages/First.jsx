import { useEffect, useState } from "react";
import axios from "axios";
// import "../pages/First.css";
import '../App.css';

function First() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            setLoading(true);
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data);
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }
    
    function trimContent(input, len) {
        let arr = input.split(" ");
        return arr.length > len ? arr.slice(0, len).join(" ") + "...": input;
    }

    if (loading) return <div className="loader">Loading.....</div>

    return (
        <>
        <div className="products-main">
            {products.map((obj) => (
                <div className="card" key={obj.id}>
                    <a href={`/product/${obj.id}`}>
                        <img src={obj.image} alt={obj.title} />
                    </a>
                    <p className="title"><a href={`/product/${obj.id}`}>{trimContent(obj.title, 8)}</a></p>
                    <p className="price">${obj.price}</p>
                </div>
            ))}
            </div>
        </>
    );
}

export default First;

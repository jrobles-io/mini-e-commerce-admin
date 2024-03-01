import { useState, useEffect } from "react";
import productsData from '../products.json';

const List = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData);
    }, []);

    const handleDelete = (id) => {
        const updateProducts = products.filter(product => product.id !== id);
        setProducts(updateProducts);
    };

    return (
        <div className="product">
            <h1>Products List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Discount: {product.discountPercentage}%</p>
                        <p>Rating: {product.rating}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Brand: {product.brand}</p>
                        <p>Category: {product.category}</p>
                        <img src={product.thumbnail} alt={product.title} />
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default List;
import { useEffect, useState, useContext } from "react";
import {ProductContext} from "../contexts/products.context.jsx";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    const { products, setProducts } = useContext(ProductContext);

    const {productId} = useParams();

    const handleSubmit = (e) => {
        console.log("")
        e.preventDefault();
        setProducts((prev) => 
            prev.map((element) => 
                element.id === product.id ? product : element
            
            )
        );
        navigate("/");
    };

    useEffect(() => {
        
        let  thisProduct = products.find((prod) => String(prod.id) === productId);

       
        setProduct(thisProduct);

    }, [productId]);

    return (
        <>
            {product && (
                <form className="card" onSubmit={handleSubmit}>
                    <label>
                        Title
                        <input
                            type="text"
                            value={product.title}
                            name="title"
                            alt="title"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>
                    <label>
                        Description
                        <input
                            type="text"
                            value={product.description}
                            name="description"
                            alt="description"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>
                    <label>
                        Price
                        <input
                            type="text" //or number? 
                            value={product.price}
                            name="price"
                            alt="price"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>
                    <label>
                        Discount
                        <input
                            type="text" //or number? 
                            value={product.discountPercentage}
                            name="discount"
                            alt="discount"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>

                    <button type="submit">Edit Product</button>

                </form>
                )
            }

        </>
    )


}; 

export default EditProduct; 


  {/* <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <img src={product.thumbnail} alt={product.title} /> 
      <img src={product.thumbnail} alt={product.title} /> */}
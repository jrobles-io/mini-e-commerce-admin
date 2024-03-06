// from list components
// el nombre img delete btn, details btn 
import { Link, useParams } from 'react-router-dom'
import { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/products.context";


function ProductCard ( { product, handleDelete } ) {

    // const { productId } = useParams();
    // const { products } = useContext(ProductContext);
    
    // // useEffect(() => {
    //     const product = products.find((product) => product.id == productId);
    //     console.log(product)
    //     console.log(productId)
    //     console.log(products)
    // // }, [])

    return (
        <div className="product-card">
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} />

            <button onClick={() => handleDelete(product.id)}>Delete</button>

            <Link to = {`/product/${product.id}`}>
                <button>Details</button>           
            </Link>

        </div>
    )

    
}

export default ProductCard;
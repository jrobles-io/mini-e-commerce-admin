// from list components
// el nombre img delete btn, details btn 
import { Link, useParams } from 'react-router-dom'
import { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/products.context";


function ProductCard ( { product, handleDelete } ) {

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.thumbnail} alt={product.title} />
            </div>

            <h3 className="product-title">{product.title}</h3>

            <div className='product-btns'>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                <Link to = {`/product/${product.id}`}>
                    <button>Details</button>           
                </Link>
            </div>
        </div>
    )

    
}

export default ProductCard;
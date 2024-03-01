// from list components
// el nombre img delete btn, details btn 
import { Link } from 'react-router-dom'

function ProductCard ( { product, handleDelete } ) {
   

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
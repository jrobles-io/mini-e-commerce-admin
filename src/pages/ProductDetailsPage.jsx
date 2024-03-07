import { useParams, Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../contexts/products.context";

function ProductDetailsPage() {
  const { productId } = useParams();
  console.log("productID -->", productId);

  const { products } = useContext(ProductContext);

  const product = products.find((product) => product.id == productId);
  console.log("product ---->", product);

  if (!product) {
    return <Navigate to="/error" />;
  }


  return (
    <div>
      <h1>Product Details</h1>
      <div className="details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <img src={product.thumbnail} alt={product.title} />

        {/* For the Edit Product */}
        <button>
          <Link to={`/editProduct/${product.id}`}>Edit Product</Link>
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;

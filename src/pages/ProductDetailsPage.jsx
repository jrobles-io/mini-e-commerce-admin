
import { useParams, Link, Navigate } from "react-router-dom";


function ProductDetailsPage({ products }) {
  const { productId } = useParams();
  console.log("productID -->", productId);

  const product = products.find((product) => product.id == productId );
  console.log("product ---->", product);

  if(!product) {
    return <Navigate to="/error" />;
  }
  
  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <img src={product.thumbnail} alt={product.title} />



      
      {/* <Link to="/products">Back</Link> */}
    </div>
  );
}

export default ProductDetailsPage;
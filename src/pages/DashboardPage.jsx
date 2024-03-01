import { useState } from "react";
import productsJSON from "../products.json";
import ProductCard from "../components/ProductCard";
// import AddProduct from "../components/AddProduct";


function DashboardPage() {
    const [products, setProducts] = useState(productsJSON);

    const addNewProduct = (newProduct) => {
        let newProducts = [newProduct, ...products]
        setProducts(newProducts)
      }

     const handleDelete = (id) => {
        const updateProducts = products.filter(product => product.id !== id);
        setProducts(updateProducts);
    };


  return (
      <div className="product-list">
        <h2> Product List </h2>
        {/* <AddProduct addNewProduct={addNewProduct} /> */}
        {products.map(product => {
        return <ProductCard key={product.id} product={product} handleDelete={handleDelete}/>

    })}
    </div>
  )
}

export default DashboardPage

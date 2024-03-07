import { useState } from "react";
import productsJSON from "../products.json";
import ProductCard from "../components/ProductCard";
// import AddProduct from "../components/AddProduct";


function DashboardPage( {products, setProducts} ) {

     const handleDelete = (id) => {
        const updateProducts = products.filter(product => product.id !== id);
        setProducts(updateProducts);
    };


  return (
      <div className="product-list">
        <h1> Product List </h1>
        <div className='product-list-conatiner'>
          {products.map(product => {
            return <ProductCard key={product.id} product={product} handleDelete={handleDelete}/>
            })
          }
        </div>
      </div>
  )
}

export default DashboardPage

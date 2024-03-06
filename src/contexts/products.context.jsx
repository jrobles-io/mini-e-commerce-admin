import { createContext, useState, useEffect } from "react";
import productsData from '../products.json'

const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [fetching, setFetching] = useState(true);
  const [products, setProducts] = useState(productsData);

//   useEffect(() => {
//     setProducts(productsData)
    
//   }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, fetching, setFetching }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductsProvider };

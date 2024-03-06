
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
// import List from './components/List'
import AboutPage from './pages/AboutPage'
import { Routes, Route } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage'
import productsJSON from './products.json';
import ErrorPage from './pages/ErrorPage'; 
import DashboardPage from './pages/DashboardPage'
import AddProductPage from './pages/AddProductPage';
import {useState} from 'react'
import EditProduct from './pages/EditProduct'



const App = () => {

  const [products, setProducts] = useState(productsJSON);
  const [productId, setProductId] = useState(101);



  const addNewProduct = (newProduct) => {
      let newProducts = [newProduct, ...products]
      setProducts(newProducts)
    }

  return (

      <div className="App">
        <Navbar />
        <Sidebar />
        <div className="content">
        {/* <div className={`content ${sidebarOpen ? '' : 'sidebarClosed'}`}> */} 
          <main className="main-content">
            {/* <List /> */}
            {/* <DashboardPage /> */}
            <Routes>
        
              <Route path='editProduct/:productId' element={<EditProduct />}/>
              <Route path="/" element={<DashboardPage products={products} setProducts={setProducts}/>}/>
              <Route path="/product/:productId" element={<ProductDetailsPage products={products}/>} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/AddProduct' element={<AddProductPage addNewProduct={addNewProduct} productId={productId} setProductId={setProductId}/>}/>
              {/* Error page Route*/}
              <Route path="*" element={ <ErrorPage /> } />
            </Routes>
          </main>
        {/* </div> */}
        </div>
        <Footer /> 
      </div>


  )
}

export default App
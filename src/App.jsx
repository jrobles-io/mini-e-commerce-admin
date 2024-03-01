
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import List from './components/List'
import AboutPage from './pages/AboutPage'
import { Routes, Route } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage'
import products from './products.json';
import ErrorPage from './pages/ErrorPage'; 

const App = () => {
  return (
    <body>

      <div className="App">
        <Navbar />

        <Sidebar /> 
        <div className="list">
          <List />
        </div>
        <Footer /> 

          <Routes>
            <Route path="/product/:productId" element={<ProductDetailsPage products={products}/>} />
            <Route path='/about' element={<AboutPage />} />
            {/* Error page Route*/}
            <Route path="*" element={ <ErrorPage /> } />


          </Routes>


      </div>


          

    </body>

  )
}

export default App
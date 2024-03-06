import { useEffect, useState, useContext } from "react";
import {ProductContext} from "../contexts/products.context.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { imageUpload } from "../services/cloudinary.js";

const EditProduct = () => {
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    const [disabled, setDisabled] = useState(false)

    const { products, setProducts } = useContext(ProductContext);

    const {productId} = useParams();

    const handleSubmit = (e) => {
        console.log("")
        e.preventDefault();
        setProducts((prev) => 
            prev.map((element) => 
                element.id === product.id ? product : element
            
            )
        );
        navigate("/");
    };

    

    const handlePhotoChange = (e) => {
  
      setDisabled(true)
      imageUpload(e)
        .then((response) => {
          console.log("Image uploaded ===>", response.data)
          setDisabled(false)
          setProduct((prev) => ({...prev, ['thumbnail']: response.data.url}))
        })
        .catch((err) => {
          setDisabled(false)
          console.log(err)
        })
    }

    useEffect(() => {
        
        let  thisProduct = products.find((prod) => String(prod.id) === productId);

       
        setProduct(thisProduct);

    }, [productId]);

    return (
        <>
            {product && (
                <form className="card" onSubmit={handleSubmit}>
                    <label>
                        Title
                        <input
                            type="text"
                            value={product.title}
                            name="title"
                            alt="title"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>
                    <label>
                        Description
                        <input
                            type="text"
                            value={product.description}
                            name="description"
                            alt="description"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>
                    <label>
                        Price
                        <input
                            type="text" //or number? 
                            value={product.price}
                            name="price"
                            alt="price"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>
                    <label>
                        Discount
                        <input
                            type="text" //or number? 
                            value={product.discountPercentage}
                            name="discount"
                            alt="discount"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>
                    <label>
                        Rating
                        <input
                            type="text" //or number? 
                            value={product.rating}
                            name="rating"
                            alt="rating"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>
                    <label>
                        Stock
                        <input
                            type="text" //or number? 
                            value={product.stock}
                            name="stock"
                            alt="stock"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>
                    <label>
                        Brand
                        <input
                            type="text"
                            value={product.brand}
                            name="brand"
                            alt="brand"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>
                    <label>
                        Category
                        <input
                            type="text" 
                            value={product.category}
                            name="category"
                            alt="category"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>
                    <label>
                        Stock
                        <input
                            type="text" //or number? 
                            value={product.stock}
                            name="stock"
                            alt="stock"
                            onChange={(e) => 
                                setProduct((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.value,
                                }))
                            } 
                        />
                    </label>
                    <label>
                        Image
                        <input
                            type="file" 
                            // value={product.thumbnail}
                            name="thumbnail"
                            alt="product"
                            onChange={handlePhotoChange} 
                        />
                    </label>

                    <button disabled={disabled} type="submit">Edit Product</button>

                </form>
                )
            }

        </>
    )


}; 

export default EditProduct; 



// MAYBE TO IMPLEMENT DROPDOWN MENU FOR CATEGORY

{/* <select name="category" onChange={handleChange} value={product.category} >
    <option value="">-- None --</option>
    <option value="smartphones">Smartphones</option>
    <option value="laptops">Laptops</option>
    <option value="fragances">Fragances</option>
    <option value="skincare">Skin Care</option>
    <option value="groceries">Groceries</option>
    <option value="home-decoration">Home Decoration</option>
    <option value="furniture">Furniture</option>
    <option value="tops">Tops</option>
    <option value="womens-dresses">Womens Dresses</option>
    <option value="womens-shoes">Womens Shoes</option>
    <option value="mens-shirts">Mens Shirts</option>
    <option value="mens-shoes">Mens Shoes</option>
    <option value="mens-watches">Mens Watches</option>
    <option value="womens-watches">Womens Watches</option>
    <option value="womens-bags">Womens Bags</option>
    <option value="womens-jewellry">Womens Jewelry</option>
    <option value="sunglasses">Sunglasses</option>
    <option value="automotive">Automotive</option>
    <option value="motorcycle">Motorcycle</option>
    <option value="lighting">Lighting</option>
</select> */}


  {/* <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <img src={product.thumbnail} alt={product.title} /> */}
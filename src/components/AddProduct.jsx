import { useState } from "react";

const AddProduct = ({addNewProduct, productId, setProductId}) => {
  
  // const [productId, setProductId] = useState(101)

  const [newProduct, setNewProduct] = useState({
    id: productId,
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    image: "",
  });

  function handleChange(event) {
    const {name, value, type, checked} = event.target   //not sure what these {name, value, type, checked} are for
    setNewProduct((prevNewProduct) => {
        return {
            ...prevNewProduct,
            [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value
        }
    })
}

const handleFormSubmit = (e) => {
  e.preventDefault()
  addNewProduct(newProduct);
  setProductId(productId + 1)
  console.log("productId", productId)
    setNewProduct({
        id: productId + 1,
        title: "",
        description: "",
        price: "",
        discountPercentage: "",
        rating: "",
        stock: "",
        brand: "",
        category: "",
        image: "",

    })
};


  return (
    <form onSubmit={handleFormSubmit}>
      <span>Add a Product</span>
      <div>
        <label>
          Title
          <input name="title" type="text" placeholder="Title" onChange={handleChange} value={newProduct.title} />
        </label>

        <label>
          Description
          <input name="description" type="text" placeholder="Product Description" onChange={handleChange} value={newProduct.description} />
        </label>

        <label>
          Price
          <input name="price" type="text" placeholder="Price" onChange={handleChange} value={newProduct.price} />
        </label>

        <label>
          Discount Percentage
          <input name="discountPercentage" type="text" placeholder="Discount Percentage" onChange={handleChange} value={newProduct.discountPercentage} />
        </label>
        
        <label>
          Rating
          <input name="rating" type="rating" placeholder="Rating" onChange={handleChange} value={newProduct.rating} />
        </label>
        
        <label>
          Stock
          <input name="stock" type="stock" placeholder="Stock" onChange={handleChange} value={newProduct.stock} />
        </label>
        
        <label>
          Brand
          <input name="brand" type="brand" placeholder="Brand" onChange={handleChange} value={newProduct.brand} />
        </label>
        
        <label>
          Image
          <input name="image" type="url" placeholder="Image" onChange={handleChange} value={newProduct.image} />
        </label>
      </div>

      <div>
        <label>
          Category
          <select name="category" onChange={handleChange} value={newProduct.category} >
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
          </select>
        </label>

        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};

export default AddProduct;



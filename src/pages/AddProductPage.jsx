import AddProduct from "../components/AddProduct";



const AddProductPage = ({addNewProduct, productId, setProductId}) => {

  return (
    <div>
        <h1>Add Products</h1>
        <AddProduct addNewProduct={addNewProduct} productId={productId} setProductId={setProductId}/>
    </div>


  )
}

export default AddProductPage

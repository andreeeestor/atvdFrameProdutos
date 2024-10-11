import { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import axios from "axios";
import ProductChart from "./components/ProductChart";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3001/api/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productSave = () => {
    fetchProducts();
    setSelectedProduct(null); 
  };

  const productDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/products/${id}`);
    fetchProducts(); 
  };

  return (
    <div>
      <ProductForm
        onSave={productSave}
        product={selectedProduct}
      />
      <ProductList
        onEdit={setSelectedProduct}
        onDelete={productDelete}
        products={products}
      />
      <ProductChart /> 
    </div>
  );
}

export default App;
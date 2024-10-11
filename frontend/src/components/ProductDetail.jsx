const ProductDetail = ({ product }) => {
    return product && (
      <div>
        <p>{product.description}</p>
        <p>Preço: R${product.price}</p>
        <p>Quantidade: {product.quantity}</p>
      </div>
    ) 
  };
  
  export default ProductDetail;
  
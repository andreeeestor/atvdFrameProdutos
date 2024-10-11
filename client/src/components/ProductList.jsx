const ProductList = ({ onEdit, onDelete, products }) => {
  const handleDelete = async (id) => {
    if (window.confirm("Você tem certeza que deseja deletar este produto?")) {
      await onDelete(id);
    }
  };

  return (
    <main className="pb-8">
      <hr className="pb-8" />
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {products.map((product) => (
          <div
            className="p-4 shadow-2xl rounded-xl w-96 text-center border border-black"
            key={product.id}
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <h6 className="text-gray-400 font-semibold italic">{product.description}</h6>
            <h6 className="text-gray-300 font-medium">R$ {product.price}</h6>
            <h6 className="text-gray-300 font-medium">{product.quantity}</h6>
            <hr className="my-2" />
            <div className="gap-x-3 flex items-center justify-center">
              <button
                className="border border-black px-3 py-1 rounded-lg shadow-md bg-green-200 transition-all hover:opacity-80 font-medium"
                onClick={() => onEdit(product)}
              >
                Editar
              </button>
              <button
                className="border border-black px-3 py-1 rounded-lg shadow-md bg-red-200 transition-all hover:opacity-80 font-medium"
                onClick={() => handleDelete(product.id)}
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductList;

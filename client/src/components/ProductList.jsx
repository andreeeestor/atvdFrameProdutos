import { useState } from "react";

const ProductList = ({ onEdit, onDelete, products }) => {
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleDelete = async (id) => {
    if (window.confirm("Você tem certeza que deseja deletar este produto?")) {
      await onDelete(id);
    }
  };

  const filteredProducts = categoryFilter
    ? products.filter((product) => product.category === categoryFilter)
    : products;

  return (
    <main className="pb-8">
      <hr className="pb-8" />

      <div className="mb-4 text-center">
        <label htmlFor="categoryFilter" className="mr-2 font-medium">Filtrar por Categoria:</label>
        <select
          id="categoryFilter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border border-black px-2 py-1 rounded-lg"
        >
          <option value="">Todas</option>
          <option value="Eletrônicos">Eletrônicos</option>
          <option value="Roupas">Roupas</option>
          <option value="Livros">Livros</option>
        </select>
      </div>

      <div className="flex items-center justify-center gap-6 flex-wrap">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              className="p-4 shadow-2xl rounded-xl w-96 text-center border border-black"
              key={product.id}
            >
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <h6 className="text-gray-400 font-semibold italic">{product.description}</h6>
              <h6 className="text-gray-300 font-medium">R$ {product.price}</h6>
              <h6 className="text-gray-300 font-medium">{product.quantity}</h6>
              <h6 className="text-gray-300 font-medium">{product.category}</h6> {/* Exibir categoria */}
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
          ))
        ) : (
          <p className="text-gray-500 text-center">Nenhum produto encontrado para esta categoria.</p>
        )}
      </div>
    </main>
  );
};

export default ProductList;

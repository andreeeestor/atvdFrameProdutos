import { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = ({ onSave, product }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setQuantity(product.quantity);
      setCategory(product.category);
    }
  }, [product]);

  const cleanFields = () => {
    setName("");
    setDescription("");
    setPrice("");
    setQuantity("");
  };

  const submit = async (e) => {
    e.preventDefault();
    const newProduct = { name, description, price, quantity, category };
    if (product) {
      await axios.put(
        `http://localhost:3001/api/products/${product.id}`,
        newProduct
      );
    } else {
      await axios.post("http://localhost:3001/api/products", newProduct);
    }
    onSave();
    cleanFields();
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {product ? "Atualizar Produto" : "Criar Produto"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={submit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Nome
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Descrição
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Preço
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Quantidade
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Roupas">Roupas</option>
              <option value="Livros">Livros</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {product ? "Atualizar" : "Criar"}
            </button>
          </div>
          <h3
            onClick={cleanFields}
            className={`${
              product ? "opacity-0 cursor-default" : "opacity-100"
            } font-semibold text-gray-400 cursor-pointer underline`}
          >
            Limpar Campos
          </h3>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;

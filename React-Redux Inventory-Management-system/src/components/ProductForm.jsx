import React, { useState } from "react";
import { addProduct } from "../features/product/productSlice";
import { useDispatch } from "react-redux";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    qty: 10,
    category: "",
  });

  const dispatch = useDispatch();

  const handleChange = (identifier, e) => {
    setProduct((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProduct({
        id: new Date().getTime(),
        ...product,
      }),

      setProduct({ name: "", price: "", qty: "", category: "" })
    );

    alert("product added");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={product.name}
          onChange={(e) => handleChange("name", e)}
        />
        <br />
        <input
          type="number"
          placeholder="price"
          value={product.price}
          onChange={(e) => handleChange("price", e)}
        />
        <br />
        <input
          type="number"
          placeholder="Quantity"
          value={product.qty}
          onChange={(e) => handleChange("qty", e)}
        />
        <br />
        <input
          type="text"
          placeholder="category"
          value={product.category}
          onChange={(e) => handleChange("category", e)}
        />
        <br />

        <button type="submit">add product</button>
      </form>
    </>
  );
};

export default ProductForm;

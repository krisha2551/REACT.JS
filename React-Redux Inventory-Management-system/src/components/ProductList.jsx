import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../features/product/productSlice";

const ProductList = () => {
  const product = useSelector((state) => state.product.products);

  console.log("product", product);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>price</th>
            <th>qty</th>
            <th>category</th>
            <th colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody>
          {product.length <= 0 ? (
            <tr>
              <td>no data found</td>
            </tr>
          ) : (
            product.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.qty}</td>
                <td>{prod.category}</td>
                <td>
                  <button onClick={() => handleDelete(prod.id)}>delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;

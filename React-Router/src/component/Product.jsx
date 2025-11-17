import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <h1>this is product- {id}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Product;

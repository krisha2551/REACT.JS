import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { FaBoxes, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProductData } from "../features/product/productSlice";

const ProductForm = () =>{
  const [product, setProduct] = useState({ name: "", price: "", qty: 10, category: "" });
  const updateState = useSelector(state => state.product.updateState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (updateState) setProduct(updateState);
  }, [updateState]);

  const handleSubmit = e => {
    e.preventDefault();
    updateState
      ? dispatch(updateProductData(product))
      : dispatch(addProduct({ id: Date.now(), ...product }));
    setProduct({ name: "", price: "", qty: "", category: "" });
  };

  return (
    <Card className="p-4 shadow mb-4">
      <h4 className="text-center fw-bold text-Dark mb-3">
        <FaBoxes className="me-2" /> Inventory Management System
      </h4>

      <Form onSubmit={handleSubmit}>
        <Form.Control className="mb-3" placeholder="Name" value={product.name} onChange={e=>setProduct({...product,name:e.target.value})}/>
        <Form.Control className="mb-3" type="number" placeholder="Price" value={product.price} onChange={e=>setProduct({...product,price:e.target.value})}/>
        <Form.Control className="mb-3" type="number" placeholder="Qty" value={product.qty} onChange={e=>setProduct({...product,qty:e.target.value})}/>
        <Form.Control className="mb-3" placeholder="Category" value={product.category} onChange={e=>setProduct({...product,category:e.target.value})}/>

        <div className="d-flex justify-content-center">
          <Button type="submit" variant={updateState ? "warning" : "success"} style={{ width: "260px" }} className="fw-bold">
            <FaPlus className="me-2" />
            {updateState ? "Update Product" : "Add Product"}
          </Button>
        </div>
      </Form>
    </Card>
  );
}
export default ProductForm;

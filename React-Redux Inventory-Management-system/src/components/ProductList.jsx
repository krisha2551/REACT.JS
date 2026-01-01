import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  setUpdateState,
} from "../features/product/productSlice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FaBoxOpen } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";

const ProductList = () => {
  const [productQuery, setProductQuery] = useState({
    search: "",
    filter: "",
  });

  const product = useSelector((state) => state.product.products);

  console.log("product", product);

  const dispatch = useDispatch();

  const handleChange = (identifier, e) => {
    setProductQuery((prod) => {
      return {
        ...prod,
        [identifier]: e.target.value,
      };
    });
  };

  const filterList = product.filter((prod) =>
    prod.name.toLowerCase().includes(productQuery.search.toLowerCase())
  );

  const sortedList = [...filterList].sort((a, b) => {
    if (productQuery.filter === "ascending") {
      return a.id - b.id;
    }
    if (productQuery.filter === "descending") {
      return b.id - a.id;
    }

    if (productQuery.filter === "priceAsc") {
      return Number(a.price) - Number(b.price);
    }

    if (productQuery.filter === "priceDesc") {
      return Number(b.price) - Number(a.price);
    }
    if (productQuery.filter === "QtyAsc") {
      return Number(a.qty) - Number(b.qty);
    }

    if (productQuery.filter === "QtyDesc") {
      return Number(b.qty) - Number(a.qty);
    }
  });

  return (
    <Container>
      <Row>
        <Col>
          <Card className="p-4 shadow m-2">
            {product.length <= 0 ? (
              <>
                <div className="text-center">
                  <FaBoxOpen fontSize={50} />
                  <h3>No Data Found</h3>
                  <p>Please Add some data to start</p>
                </div>
              </>
            ) : (
              <>
                <h3>
                  <AiOutlineProduct fontSize={30} /> Product Data
                </h3>

                <Form>
                  <div className="d-flex gap-2 m-2">
                    <Form.Control
                      type="text"
                      placeholder="enter product name to search"
                      value={productQuery.search}
                      onChange={(e) => handleChange("search", e)}
                    ></Form.Control>
                    <Form.Select
                      value={productQuery.filter}
                      onChange={(e) => handleChange("filter", e)}
                    >
                      <option value="ascending">Ascending</option>
                      <option value="descending">Descending</option>
                      <option value="priceAsc">Price Ascending</option>
                      <option value="priceDesc">Price Descending</option>
                      <option value="QtyAsc">Qty Ascending</option>
                      <option value="QtyDesc">Qty Descending</option>
                    </Form.Select>
                  </div>
                </Form>

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Category</th>
                      <th>Total Price</th>
                      <th colSpan={2} className="text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedList.map((prod, index) => (
                      <tr key={prod.id}>
                        <td> {index + 1} </td>
                        <td>{prod.name}</td>
                        <td>{prod.price}</td>
                        <td>{prod.qty}</td>
                        <td>{prod.category}</td>
                        <td>{prod.price * prod.qty}</td>
                        <td>
                          {
                            <Button
                              variant="outline-warning"
                              onClick={() => dispatch(setUpdateState(prod))}
                            >
                              <MdEdit fontSize={18} />
                            </Button>
                          }
                        </td>
                        <td>
                          <Button
                            variant="outline-danger"
                            onClick={() => dispatch(deleteProduct(prod.id))}
                          >
                            <MdDelete fontSize={18} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
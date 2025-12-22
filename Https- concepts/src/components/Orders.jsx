import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Orders = ({ show, hide }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const res = await axios("http://localhost:5000/orders");

        const data = res.data;

        if (data.length <= 0) {
          throw new Error("no order data found");
        } else {
          setOrders(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchOrderData();
  }, []);

  return (
    <Modal
      show={show}
      onHide={hide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Orders
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {orders.length <= 0 ? (
          <p>No order data found</p>
        ) : (
          <Table bordered striped hover responsive >
            <thead>
              <tr>
                <th>Order id</th>
                <th>Product</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Create At</th>
                <th colSpan={2} >Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((ord) => (
                <tr key={ord.id}>
                  <td>{ord.id}</td>
                  <td>
                    <ul>
                      {ord.products.map((prod) => (
                        <li>
                          {prod.name} X {prod.quantity}
                          <br />
                          <small>{prod.price}</small>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>{ord.totalAmount}</td>
                  <td>{ord.status}</td>
                  <td>{new Date(ord.CreateAt).toLocaleString()}</td>
                  <td>{<Button className="btn btn-success" >complete</Button>}</td>
                  <td>{<Button className="btn btn-danger" >Delete</Button>}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Orders;
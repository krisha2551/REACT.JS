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

  // const handleOrderStatus = async (id, status) => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/orders/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ status }),
  //     });

  //     if (!res.ok) {
  //       throw new Error("failed to update order status");
  //     }

  //     alert("order status updated successfully");

  //     setOrders((prevOrder) =>
  //       prevOrder.map((prod) =>
  //         prod.id === id ? { ...prod, status: status } : prod
  //       )
  //     );
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const handleOrderStatus = async (id, status) => {
    try {
      const res = await axios.patch(`http://localhost:5000/orders/${id}`, {
        status,
      });

      alert("order status updated successfully");

      setOrders((prevOrder) =>
        prevOrder.map((prod) =>
          prod.id === id ? { ...prod, status: status } : prod
        )
      );
      
    } catch (error) {
      console.log(error.message);
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/orders/${id}`, {
  //       method: "DELETE",
  //     });

  //     if (!res.ok) {
  //       throw new Error("failed to delete order");
  //     }

  //     alert("order deleted successfully");

  //     setOrders((prevOrder) => prevOrder.filter((ord) => ord.id !== id));
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/orders/${id}`);

      alert("order deleted successfully");

      setOrders((prevOrder) => prevOrder.filter((ord) => ord.id !== id));
      hide()
    } catch (error) {
      console.log(error.message);
    }
  };

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
          <Table bordered striped hover responsive>
            <thead>
              <tr>
                <th>Order id</th>
                <th>Product</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Create At</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((ord) => (
                <tr key={ord.id}>
                  <td>{ord.id}</td>
                  <td>
                    <ul>
                      {ord.products.map((prod) => (
                        <li key={prod.id}>
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
                  <td>
                    {
                      <Button
                        className="btn btn-success"
                        onClick={() => handleOrderStatus(ord.id, "Completed")}
                        disabled={ord.status === "Completed"}
                      >
                        complete
                      </Button>
                    }
                  </td>
                  <td>
                    {
                      <Button
                        className="btn btn-danger"
                        onClick={() => handleDelete(ord.id)}
                      >
                        Delete
                      </Button>
                    }
                  </td>
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

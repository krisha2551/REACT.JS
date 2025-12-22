import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Orders = ({ show, hide }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/orders").then((res) =>
      setOrders(res.data)
    );
  }, []);

  const updateStatus = async (id) => {
    await axios.patch(`http://localhost:5000/orders/${id}`, {
      status: "completed",
    });
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, status: "completed" } : o
      )
    );
  };

  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:5000/orders/${id}`);
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <Modal show={show} onHide={hide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Orders</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Products</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>
                  {o.products.map((p) => (
                    <div key={p.id}>
                      {p.name} × {p.quantity}
                    </div>
                  ))}
                </td>
                <td>₹{o.totalAmount}</td>
                <td>{o.status}</td>
                <td>
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => updateStatus(o.id)}
                  >
                    Complete
                  </Button>{" "}
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteOrder(o.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Orders;

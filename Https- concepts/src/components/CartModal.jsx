import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import axios from "axios";

function CartModal({ onShow, onClose, products, setCart, clearCart, setMessage }) {
  const totalAmount = products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      products,
      totalAmount,
      status: "pending",
      CreateAt: new Date().toISOString(),
    };

    await axios.post("http://localhost:5000/orders", orderData);
    setMessage("Order placed successfully");
    clearCart();
    onClose();
  };

  return (
    <Modal show={onShow} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {products.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <Table bordered responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <Image src={item.image} style={{ width: 70 }} />
                  </td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <Button size="sm" onClick={() => updateQty(item.id, "dec")}>
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button size="sm" onClick={() => updateQty(item.id, "inc")}>
                      +
                    </Button>
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Modal.Body>

      {products.length > 0 && (
        <Modal.Footer className="justify-content-between">
          <h5>Total: ₹{totalAmount}</h5>
          <Button onClick={handlePlaceOrder}>Place Order</Button>
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default CartModal;

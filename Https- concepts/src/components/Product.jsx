import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Loading from "./Loading";
import Navbar from "./Navbar";
import CartModal from "./CartModal";
import AlertMessage from "./AlertMessage";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios("http://localhost:5000/products");
      setProduct(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart"));
    if (saved) setCart(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCart = (prod) => {
    const exist = cart.find((item) => item.id === prod.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === prod.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...prod, quantity: 1 }]);
    }
    setMessage("Item added to cart");
  };

  const filteredProducts = product.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loading />;

  return (
    <>
      <Navbar cartItems={cart.length} onShow={() => setShowCart(true)} />

      <Container>
        <AlertMessage message={message} onClose={() => setMessage("")} />

        <input
          className="form-control my-3"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <Row>
          {filteredProducts.map((prod) => (
            <Col md={3} sm={6} key={prod.id} className="g-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  src={prod.image}
                  style={{ height: 200, objectFit: "contain" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{prod.name}</Card.Title>
                  <Card.Text className="text-truncate">
                    {prod.description}
                  </Card.Text>
                  <h5>₹{prod.price}</h5>
                  <Button className="mt-auto" onClick={() => handleCart(prod)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {showCart && (
        <CartModal
          onShow={showCart}
          onClose={() => setShowCart(false)}
          products={cart}
          setCart={setCart}
          clearCart={() => setCart([])}
          setMessage={setMessage}
        />
      )}
    </>
  );
};

export default Product;

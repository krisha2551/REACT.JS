import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaBoxes, FaRupeeSign, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";


const InventoryStats = () => {
  const products = useSelector(state => state.product.products);

  const totalProducts = products.length;
  const totalValuation = products.reduce((sum, p) => sum + (p.qty * p.price), 0);
  const highStock = products.filter(p => p.qty >= 50).length;
  const lowStock = products.filter(p => p.qty <= 10).length;

  return (
    <Row className="mb-4 text-center">
      <Col md={3}>
        <Card className="p-3 shadow border-0">
          <FaBoxes size={26} className="text-primary mb-2" />
          <h6>Total Products</h6>
          <h4>{totalProducts}</h4>
        </Card>
      </Col>

      <Col md={3}>
        <Card className="p-3 shadow border-0">
          <FaRupeeSign size={26} className="text-success mb-2" />
          <h6>Total Valuation</h6>
          <h4>₹ {totalValuation}</h4>
        </Card>
      </Col>

      <Col md={3}>
        <Card className="p-3 shadow border-0">
          <FaArrowUp size={26} className="text-info mb-2" />
          <h6>High Stock</h6>
          <h4>{highStock}</h4>
        </Card>
      </Col>

      <Col md={3}>
        <Card className="p-3 shadow border-0">
          <FaArrowDown size={26} className="text-danger mb-2" />
          <h6>Low Stock</h6>
          <h4>{lowStock}</h4>
        </Card>
      </Col>
    </Row>
  );
}

export default InventoryStats;
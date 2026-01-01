import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { AiOutlineProduct } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { useSelector } from "react-redux";

const InventoryStats = () => {
  const products = useSelector((state) => state.product.products);

  const totalProduct = products ? products.length : 0;

  const totalValuation = products
    ? products.reduce((acc, curr) => {
        return (acc += curr.price * curr.qty);
      }, 0)
    : 0;

  const highStocks = products
    ? products.filter((prod) => prod.qty > 10).length
    : 0;

  const lowStocks = products
    ? products.filter((prod) => prod.qty <= 10).length
    : 0;

  return (
    <Container>
      <Row className="mt-4   mb-3">
        <Col md={3}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>
                <AiOutlineProduct /> All Product
              </Card.Title>
              <Card.Text>
                <h3>{totalProduct}</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>
                <FaRupeeSign /> Total Valuation
              </Card.Title>
              <Card.Text>
                <h3>{totalValuation}</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>
                <FaArrowTrendUp /> High Stocks
              </Card.Title>
              <Card.Text>
                <h3>{highStocks}</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>
                <FaArrowTrendDown /> Low Stocks
              </Card.Title>
              <Card.Text>
                <h3>{lowStocks}</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InventoryStats;
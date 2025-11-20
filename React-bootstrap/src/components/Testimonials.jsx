import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Mehta",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "My trip to Bali was a dream come true! The arrangements were flawless, and the local guides were super friendly. Highly recommend!",
    },
    {
      id: 2,
      name: "Sofia Rodrigues",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Amazing experience! Everything was perfectly organized. I felt safe and enjoyed every moment.",
    },
    {
      id: 3,
      name: "Michael Carter",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      text: "I booked my honeymoon trip through them, and it was simply magical.",
    },
    {
      id: 4,
      name: "Priya Sharma",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Wonderful service! They customized my Europe tour exactly how I wanted.",
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mt-3">Testimonials</h1>
      <hr className="w-25 m-auto mb-5" />
      <Row>
        {testimonials.map((t) => (
          <Col md={3} key={t.id} className="text-center">
            <Image src={t.image} roundedCircle className="mb-2" />
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>{t.name}</Card.Title>
                <Card.Text>{t.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;

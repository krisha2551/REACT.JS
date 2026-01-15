import React from "react";
import { trips } from "../../data/TripsData";
import { useNavigate, useParams } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";

const TripDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const trip = trips.find((t) => t.id === Number(id));

  console.log("trip", trip);

  if (!trip) {
    return (
      <Container>
        <Row>
          <Col>
            <h4 className="text-center">Trip Details not found</h4>
            <Button onClick={() => navigate(-1)}>Go back to trips</Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Row>
          <Col lg={8}>
            <img
              src={trip.image}
              className="mt-2 rounded-5 shadow-lg"
              style={{ objectFit: "cover", width: "80vw", height: "50vh" }}
              alt={trip.name}
            />
            <h3>{trip.name}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TripDetail;

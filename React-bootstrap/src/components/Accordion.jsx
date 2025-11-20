import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

function AccordionComponent() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What travel packages do you offer?</Accordion.Header>
          <Accordion.Body>
            We offer family tours, honeymoon trips, adventure tours, corporate travel,
            and customized packages. Tailor-made itineraries available.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Can I customize my travel itinerary?</Accordion.Header>
          <Accordion.Body>
            Yes — choose destinations, hotels, activities and number of days. We will help craft it.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you provide visa and travel insurance services?</Accordion.Header>
          <Accordion.Body>
            Yes — we provide visa assistance, travel insurance, flight and hotel bookings.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>What is your cancellation policy?</Accordion.Header>
          <Accordion.Body>
            Cancellations made 15+ days before travel get full refund; 7-14 days partial; less than 7 days subject to vendor deductions.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default AccordionComponent;

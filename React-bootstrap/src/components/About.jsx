import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"; 

const About = () => {
  return (
    <Container id="about" className="my-5 py-5">
      <h1 className="text-center mb-4 text-decoration-underline">About Us</h1>

      <Row className="align-items-center">
        <Col sm={6}>
          <Image
            src="https://images.pexels.com/photos/52526/sign-places-travel-information-52526.jpeg"
            alt="about us"
            className="w-100 shadow rounded-4"
            style={{ height: "450px", objectFit: "cover" }}
          />
        </Col>

        <Col sm={6}>
          <p className="fs-5 mt-3 lh-lg">
            At <b>Travel</b>, we bring you the most immersive travel experiences
            across the world. Whether it's serene natural landscapes, thrilling
            adventures, or breathtaking urban destinations — we take you there
            with comfort and luxury.
          </p>

       
        </Col>
      </Row>
    </Container>
  );
};

export default About;

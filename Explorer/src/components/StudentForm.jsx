import { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

export default function StudentForm({ onAdd }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    age: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.name || !student.email || !student.course || !student.age) return;
    onAdd(student);
    setStudent({ name: "", email: "", course: "", age: "" });
  };

  return (
    <Card className="p-3 mb-4 shadow-sm">
      <Form onSubmit={handleSubmit}>
        <Row className="g-2">
          <Col md={3}>
            <Form.Control
              name="name"
              placeholder="Name"
              value={student.name}
              onChange={handleChange}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              name="email"
              placeholder="Email"
              value={student.email}
              onChange={handleChange}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              name="course"
              placeholder="Course"
              value={student.course}
              onChange={handleChange}
            />
          </Col>
          <Col md={2}>
            <Form.Control
              name="age"
              placeholder="Age"
              value={student.age}
              onChange={handleChange}
            />
          </Col>
          <Col md={1}>
            <Button type="submit" className="w-100">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

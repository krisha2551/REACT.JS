import { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";

const StudentForm = () => {
  const [grid, setGrid] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!grid || !name || !course) return;

    alert("Submit Successful");

    setGrid("");
    setName("");
    setCourse("");
  };

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card className="p-3 shadow-sm" style={{ width: "320px" }}>
        <h5 className="text-center mb-3">Student Form</h5>

        <Form onSubmit={handleAdd}>
          <Form.Group className="mb-2">
            <Form.Label>GR ID</Form.Label>
            <Form.Control
              size="sm"
              placeholder="Enter GR ID"
              value={grid}
              onChange={(e) => setGrid(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              size="sm"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Course</Form.Label>
            <Form.Control
              size="sm"
              placeholder="Enter Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="info" className="w-100">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default StudentForm;
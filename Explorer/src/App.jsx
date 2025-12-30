import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import { Container } from "react-bootstrap";

export default function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Student Registration System</h2>
      <StudentForm onAdd={addStudent} />
      <StudentTable students={students} />
    </Container>
  );
}

import { Table } from "react-bootstrap";

export default function StudentTable({ students }) {
  return (
    <Table bordered hover>
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center text-muted">
              No Data Found
            </td>
          </tr>
        ) : (
          students.map((s, index) => (
            <tr key={s.id}>
              <td>{index + 1}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>{s.age}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

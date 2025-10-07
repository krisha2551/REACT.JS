import { useState } from "react";
import "./ObjectState.css";

const ObjectUseState = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    city: "",
  });

  const [person, setPerson] = useState([]);

  const handleInputData = (field, e) => {
    setInput((inputData) => ({
      ...inputData,
      [field]: e.target.value,
    }));
  };

  const handleAdd = () => {
    setPerson((person) => [...person, input]);
    setInput({ name: "", age: "", email: "", city: "" });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        value={input.name}
        placeholder="Enter your name"
        onChange={(e) => handleInputData("name", e)}
      />
      <br />
      <input
        type="number"
        value={input.age}
        placeholder="Enter your age"
        onChange={(e) => handleInputData("age", e)}
      />
      <br />
      <input
        type="email"
        value={input.email}
        placeholder="Enter your email"
        onChange={(e) => handleInputData("email", e)}
      />
      <br />
      <input
        type="text"
        value={input.city}
        placeholder="Enter your city"
        onChange={(e) => handleInputData("city", e)}
      />
      <br />

      <button onClick={handleAdd}>Add</button>

      {/* Live Preview */}
      <h2>Name: {input.name}</h2>
      <h2>Age: {input.age}</h2>
      <h2>Email: {input.email}</h2>
      <h2>City: {input.city}</h2>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {person.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ObjectUseState;

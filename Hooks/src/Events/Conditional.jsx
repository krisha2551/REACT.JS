import { useState } from "react";

const Conditional = () => {
  // State for showing message
  const [show, setShow] = useState(false);

  // State for login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State for role
  const [role, setRole] = useState("guest");

  // Toggle message
  const handleToggle = () => {
    setShow(!show);
  };

  // Login & Logout
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Change role
  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  
  let roleMessage;
  if (role === "admin") {
    roleMessage = "Welcome, Admin — Full access granted.";
  } else if (role === "user") {
    roleMessage = "Welcome, User — Limited access granted.";
  } else {
    roleMessage = "Welcome, Guest — Please login to continue.";
  }

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>Conditional Event</h1>

      
      <h2>1️⃣ Logical AND (&&) Example</h2>
      <button onClick={handleToggle}>
        {show ? "Hide Message" : "Show Message"}
      </button>
      {show && <p style={{ color: "green" }}>Hello, welcome to React!</p>}

      <hr />

      <h2>2️⃣ Ternary Operator Example</h2>
      {isLoggedIn ? (
        <>
          <h3>✅ Logged In</h3>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h3>❌ Not Logged In</h3>
          <button onClick={handleLogin}>Login</button>
        </>
      )}

      <hr />

   
      <h2>3️⃣ Multiple Conditions Example</h2>
      <div>
        <button onClick={() => handleRoleChange("admin")}>Set Admin</button>
        <button onClick={() => handleRoleChange("user")}>Set User</button>
        <button onClick={() => handleRoleChange("guest")}>Set Guest</button>
      </div>
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>{roleMessage}</p>
    </div>
  );
};

export default Conditional;



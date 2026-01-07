import { useState } from "react";
import { Card, Form, Button, Container, Alert } from "react-bootstrap";
import { auth } from "../Firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup Successful");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
      <Container className="mt-5">
    <div className="d-flex justify-content-center">
      <Card className="p-4 shadow-sm" style={{ width: "360px" }}>
        <h4 className="text-center mb-3">
          {isLogin ? "Login" : "Create Account"}
        </h4>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required
              onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required
              onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button type="submit" variant="success" className="w-100">
            {isLogin ? "Login" : "Signup"}
          </Button>
        </Form>

        <div className="text-center mt-3">
          {isLogin ? (
            <>
              New user?{" "}
              <Button variant="link" onClick={() => setIsLogin(false)}>
                Create Account
              </Button>
            </>
          ) : (
            <>
              Already have account?{" "}
              <Button variant="link" onClick={() => setIsLogin(true)}>
                Login
              </Button>
            </>
          )}
        </div>
      </Card>
      </div>
    </Container>
  );
}

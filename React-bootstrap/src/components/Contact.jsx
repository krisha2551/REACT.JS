import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required("Name required"),
  number: yup.string().required("Number required"),
  email: yup.string().email("Invalid email").required("Email required"),
  terms: yup.bool().oneOf([true], "Accept terms to continue"),
});

function Contact() {
  return (
    <div id="contact">
      <h3>Contact Us</h3>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          // replace with your handler
          alert("Form submitted: " + JSON.stringify(values, null, 2));
        }}
        initialValues={{
          fullName: "",
          number: "",
          email: "",
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={values.fullName}
                  onChange={handleChange}
                  isInvalid={!!errors.fullName && touched.fullName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fullName}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group controlId="formNumber">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="number"
                  placeholder="+91"
                  value={values.number}
                  onChange={handleChange}
                  isInvalid={!!errors.number && touched.number}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.number}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email && touched.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formTerms">
              <Form.Check
                type="checkbox"
                name="terms"
                label="I agree to terms"
                onChange={handleChange}
                isInvalid={!!errors.terms && touched.terms}
              />
              <Form.Control.Feedback type="invalid">
                {errors.terms}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;

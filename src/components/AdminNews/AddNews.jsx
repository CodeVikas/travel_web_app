import React, { useState } from "react";
import { useFormik } from "formik";
import { Button, Form, Alert } from "react-bootstrap";
import Nav from "../Nav/nav";
import "./news.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewsAddForm = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.title) {
        errors.title = "Required";
      }
      if (!values.description) {
        errors.description = "Required";
      }
      
      return errors;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        const response = await axios.post("http://localhost:5000/insert", values);
        console.log("Response:", response);
        setShowAlert(true); // Show alert after successful submission
        setTimeout(() => {
          setShowAlert(false); // Hide alert after 3 seconds
          navigate("/adminnews");
        }, 2500);
      } catch (error) {
        console.error("Error:", error);
        // Handle error: show error message to the user or log it
      }
    },
  });

  return (
    <React.Fragment>
      <Nav />
      
      <div className="mt-5">
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <div height={10} />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                  <h1>Add News</h1>
                   {/* Render alert if showAlert is true */}
                   {showAlert && <Alert variant="success" className="mt-3">News added successfully!</Alert>}
                  <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.title && formik.errors.title}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.title}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.description && formik.errors.description
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.description}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary mt-4" type="submit">
                    Add News
                  </Button>{" "}
                  <Button variant="secondary mt-4" onClick={() => navigate("/adminnews")}>
                    Cancel
                  </Button>
                 
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default NewsAddForm;

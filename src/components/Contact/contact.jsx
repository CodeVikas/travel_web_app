import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"; // Import Axios for making HTTP requests
import "./contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      number: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      number: Yup.string()
        .matches(/^[0-9]+$/, "Mobile number must contain only digits")
        .min(10, "Mobile number must be at least 10 digits")
        .max(10, "Mobile number can't be longer than 10 digits")
        .required("Mobile number is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log(values);
        // Make a POST request to your backend API endpoint
        const response = await axios.post(
          "http://localhost:5000/contacti/insert",
          values
        );

        // Log the response from the backend
        console.log("Response:", response.data);

        // Set submitted state to true
        setSubmitted(true);

        // Reset the form after successful submission
        setTimeout(() => {
          setSubmitted(false);
          resetForm();
        }, 2000);
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error: show error message to the user or log it
      }
    },
  });

  return (
    <React.Fragment>
      <Navbar />
      <div>
        <p className="h2 text-center my-5">Contact / Send Enquiry</p>
      </div>
      <div className="container justify-content-center my-5">
        <form onSubmit={formik.handleSubmit}>
          {submitted ? (
            <div className="alert alert-success row mb-3 justify-content-center" role="alert">
              Successfully sent the enquiry!
            </div>
          ) : null}
          <div className="row mb-3 justify-content-center">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-5 justify-content-center">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
            <label htmlFor="number" className="col-sm-2 col-form-label">
              Mobile No.
            </label>
            <div className="col-sm-5 justify-content-center">
              <input
                type="text"
                className="form-control"
                id="number"
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.number && formik.errors.number ? (
                <div className="text-danger">{formik.errors.number}</div>
              ) : null}
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
            <label htmlFor="message" className="col-sm-2 col-form-label">
              Message
            </label>
            <div className="form-floating col-sm-5 justify-content-center">
              <textarea
                className="form-control h-100"
                placeholder="Leave a comment here"
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-danger">{formik.errors.message}</div>
              ) : null}
            </div>
          </div>
          <div className="row mb-3 mt-5 justify-content-center">
            <button type="submit" className="btn btn-info col-sm-6">
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;

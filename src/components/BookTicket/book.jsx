import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"; // Import Axios for making HTTP requests
import "./book.css";

function Book() {
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            type: "0", // Initialize ticketType with "--Select Type--" value
            Quantity: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            mobile: Yup.string()
                .matches(/^[0-9]+$/, "Mobile number must contain only digits")
                .min(10, "Mobile number must be at least 10 digits")
                .max(10, "Mobile number can't be longer than 10 digits")
                .required("Mobile number is required"),
            type: Yup.string().test('is-ticket-type-selected', 'Please select ticket type', value => value !== "0"), // Custom validation for ticket type
            Quantity: Yup.number()
                .typeError("Quantity must be a number")
                .integer("Quantity must be an integer")
                .min(1, "Quantity must be at least 1")
                .required("Quantity is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                console.log("Form submitted:", values);
                // Make a POST request to your backend API endpoint
                const response = await axios.post("http://localhost:5000/insertbooking", values);

                // Log the response from the backend
                console.log("Response:", response.data);

                // Set submitted state to true
                setSubmitted(true);

                // Reset the form after successful submission
                setTimeout(() => {
                    setSubmitted(false);
                    resetForm();
                }, 3000);
            } catch (error) {
                console.error("Error submitting form:", error);
                // Handle error: show error message to the user or log it
            }
        },
    });

    // Function to handle direct submission with all errors displayed
    const handleDirectSubmit = () => {
        formik.handleSubmit();
        // Scroll to top to display errors
        window.scrollTo(0, 0);
    };

    return (
        <React.Fragment>
            {/* Navbar component */}
            <Navbar />
            <div className="container mt-5  ">
                {/* Form title */}
                <h2 className="text-center mb-4 ">Ticket Booking Form</h2>
                <div className="d-flex justify-content-center">
                {submitted ? (
                    <div className="alert alert-success col-sm-7" role="alert">
                        Congratulations You Booked ticket!
                    </div>
                ) : null}
                </div>
                <form onSubmit={formik.handleSubmit}>
                    {/* Name field */}
                    <div className="form-group row mb-3 justify-content-center">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-5 justify-content-center">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                            {/* Display error message for name field if touched and has error */}
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-danger">{formik.errors.name}</div>
                            ) : null}
                        </div>
                    </div>
                    {/* Email field */}
                    <div className="form-group row mb-3 justify-content-center">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-5 justify-content-center">
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                            {/* Display error message for email field if touched and has error */}
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">{formik.errors.email}</div>
                            ) : null}
                        </div>
                    </div>
                    {/* Mobile number field */}
                    <div className="form-group row mb-3 justify-content-center">
                        <label htmlFor="mobile" className="col-sm-2 col-form-label">Mobile Number</label>
                        <div className="col-sm-5 justify-content-center">
                            <input
                                type="text"
                                className="form-control"
                                id="mobile"
                                name="mobile"
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                            {/* Display error message for mobile field if touched and has error */}
                            {formik.touched.mobile && formik.errors.mobile ? (
                                <div className="text-danger">{formik.errors.mobile}</div>
                            ) : null}
                        </div>
                    </div>
                    {/* Ticket type field */}
                    <div className="form-group row mb-3 justify-content-center">
                        <label htmlFor="type" className="col-sm-2 col-form-label">Ticket Type</label>
                        <div className="col-sm-5 justify-content-center">
                            <select
                                className="form-control"
                                id="type"
                                name="type"
                                value={formik.values.type}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="0">--Select Type--</option>
                                <option value="economy">Economy Class</option>
                                <option value="premium">Premium Economy Class</option>
                                <option value="first">First Class</option>
                                <option value="standard">Standard</option>
                                <option value="vip">VIP</option>
                            </select>
                            {/* Display error message for ticketType field if touched and has error */}
                            {formik.touched.type && formik.errors.type ? (
                                <div className="text-danger">{formik.errors.type}</div>
                            ) : null}
                        </div>
                    </div>
                    {/* Quantity field */}
                    <div className="form-group row mb-3 justify-content-center" >
                        <label htmlFor="Quantity" className="col-sm-2 col-form-label">Quantity</label>
                        <div className="col-sm-5 justify-content-center">
                            <input
                                type="number"
                                className="form-control"
                                id="Quantity"
                                name="Quantity"
                                value={formik.values.Quantity}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                            {/* Display error message for Quantity field if touched and has error */}
                            {formik.touched.Quantity && formik.errors.Quantity ? (
                                <div className="text-danger">{formik.errors.Quantity}</div>
                            ) : null}
                        </div>
                    </div>
                    {/* Submit button */}
                    <div className=" d-flex justify-content-center mt-4 mb-5">
                        {submitted ? (
                            <button
                                type="button"
                                className="btn btn-success col-sm-7"
                                disabled
                            >
                                Booked
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-primary col-sm-7"
                                onClick={handleDirectSubmit}
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
            {/* Footer component */}
            <Footer />
        </React.Fragment>
    );
}

export default Book;

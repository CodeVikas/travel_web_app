import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../navbar/navbar.jsx";
import Package from "../Packages/packageStrac.jsx";
import Footer from "../Footer/footer.jsx";
import Offer from "../Offer/offer.jsx";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const [submitted, setSubmitted] = useState(false);
  const navigate =useNavigate();
  const formik = useFormik({
    initialValues: {
      destination: "",
      date: "",
    },
    validationSchema: Yup.object({
      destination: Yup.string().required("Destination is required"),
      date: Yup.date().required("Date is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      // Add your form submission logic here
      setSubmitted(true);
    },
  });

  return (
    <React.Fragment>
      <Navbar />
      <div className="home-container container-fluid">
        <div className="" id="back">
          <div className="row align-items-center mt-5">
            <div className="col text-center mt-5">
              <h5 className="mb-4">
                <u>Over Packages:</u>
              </h5>
              <h1>Search your holiday:</h1>
            </div>
          </div>
          <div className="row align-items-center vh-100 ">
            <form
              className="row g-3 justify-content-center mt-5 pt-4 pb-4"
              id="home"
              onSubmit={formik.handleSubmit}
            >
              <div className="col-md-4">
                <label htmlFor="destination" className="form-label">
                  Search Your Destination
                </label>
                <select
                  className="form-select"
                  id="destination"
                  name="destination"
                  value={formik.values.destination}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">--Select destination--</option>
                  <option value="destination1">Chichen Itza</option>
                  <option value="destination2">Taj Mahal</option>
                  <option value="destination3">Machu Picchu</option>
                  <option value="destination4">Colosseum</option>
                </select>
                {formik.touched.destination && formik.errors.destination ? (
                  <div className="text-danger">{formik.errors.destination}</div>
                ) : null}
              </div>

              <div className="col-md-4">
                <label htmlFor="date" className="form-label">
                  Select Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.date && formik.errors.date ? (
                  <div className="text-danger">{formik.errors.date}</div>
                ) : null}
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                {submitted ? (
                  <div className="text-center  justify-content-center align-items-center">
                    <p className="text-success">Packages available for selected destination and date</p>
                    <button
                      type="button"
                      className="btn btn-primary btn-block justify-content-center "
                      id="book"
                      onClick={() => {
                        navigate('/book')
                      }}
                    >
                      Go To Book Now
                    </button>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary btn-block justify-content-center"
                    style={{ bottom: "160px" }}
                  >
                    Tap to Search here
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <Package />
      <Offer />
      <Footer />
    </React.Fragment>
  );
}

export default Home;

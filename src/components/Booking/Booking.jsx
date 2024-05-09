import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav/nav";
import Footer from '../Footer/footer'
import './Booking.css'

const BookingGrid = () => {
  const [booking, setbooking] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/booking")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setbooking(response.data);
          //console.log(response.data);
        } else {
          console.error("booking data is not an array:", response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <Nav/>
    <div className="m-5 text-center px-4 py-2 h1">Bookings</div>
    <div className="container px-4 my-4">
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr className="text-center" id="bodybooking" >
                <th scope="col" id="bodybooking">Name</th>
                <th scope="col" id="bodybooking">Email</th>
                <th scope="col" id="bodybooking">Mobile No.</th>
                <th scope="col" id="bodybooking">Ticket Type</th>
                <th scope="col" id="bodybooking">Quantity</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {booking.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td id="line">{item.email}</td>
                  <td id="line">{item.mobile}</td>
                  <td id="line">{item.type}</td>
                  <td id="line">{item.Quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BookingGrid;

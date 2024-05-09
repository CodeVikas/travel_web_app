import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav/nav";
import Footer from '../Footer/footer'
import './query.css'

const ContactGrid = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/contactv")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setContact(response.data);
          console.log(setContact);
        } else {
          console.error("Contact data is not an array:", response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <Nav/>
    <div className="m-5 text-center px-4 py-2 h1">Query</div>
    <div className="container px-4 my-4">
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr className="text-center" id="bodycontact" >
                <th scope="col" id="bodycontact">Title</th>
                <th scope="col" id="bodycontact">Description</th>
                <th scope="col" id="bodycontact">Message</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {contact.map((item) => (
                <tr key={item.id}>
                  <td>{item.email}</td>
                  <td id="line">{item.number}</td>
                  <td id="line">{item.message}</td>
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

export default ContactGrid;

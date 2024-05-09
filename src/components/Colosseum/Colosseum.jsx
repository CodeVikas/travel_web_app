import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import Image from "./colosseum.jpeg";
import "./Colosseum.css";

function about() {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <div>
          <img src={Image} className="d-block w-100" alt="" />
        </div>

        <div className="mt-5 px-5">
          <p className="h1 text-center mb-4">Traditions of Colosseum</p>
          <p className="h4" id="headline">
            Language
          </p>
          <p className="lh-sm ms-2">
            "Italian is the primary language spoken in Rome and around the Colosseum. English is widely understood in tourist areas, but learning some basic Italian phrases can enhance your experience and interaction with locals."
          </p>
        </div>
        <div className="px-5">
          <p className="h4" id="headline">
            Culture
          </p>
          <p className="lh-sm ms-2">
            "The Colosseum reflects ancient Roman culture, known for its engineering marvels, gladiatorial contests, and spectacles. Today, it stands as a symbol of Rome's rich history and attracts millions of visitors annually, showcasing the enduring legacy of the Roman Empire."
          </p>
        </div>
        <div className="px-5">
          <p className="h4" id="headline">
            Currency & Payments
          </p>
          <p className="lh-sm ms-2">
            "Italy's official currency is the Euro (EUR). Credit and debit cards are widely accepted in Rome, including around the Colosseum. ATMs are available for currency withdrawal, and currency exchange services are offered at banks and exchange offices."
          </p>
        </div>
        <div className="px-5 mb-5">
          <p className="h4" id="headline">
            Dress Code
          </p>
          <p className="lh-sm ms-2">
            "There is no specific dress code for visiting the Colosseum, but it's recommended to dress comfortably for walking and exploring. Casual attire is acceptable, but respectful clothing is appreciated when visiting religious sites or monuments."
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default about;

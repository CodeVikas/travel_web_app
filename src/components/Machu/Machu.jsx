import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import Image from "./machu.jpeg";
import "./machu.css";

function about() {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <div>
          <img src={Image} className="d-block w-100 " alt="" />
        </div>

        <div className="mt-5 px-5">
          <p className="h1 text-center mb-4">Traditions of Machu Picchu</p>
          <p className="h4 " id="headline">
            Language
          </p>
          <p className="lh-sm ms-2">
            "The language of Peru is predominantly Spanish, introduced during
            the colonial period by Spanish conquistadors. Additionally,
            indigenous languages such as Quechua and Aymara are widely spoken,
            particularly in rural areas. This linguistic diversity reflects
            Peru's rich cultural heritage, shaped by centuries of indigenous
            civilizations and colonial influence."
          </p>
        </div>
        <div className="px-5">
          <p className="h4" id="headline">
            Culture
          </p>
          <p className="lh-sm ms-2">
            "Peruvian culture is a vibrant tapestry woven from indigenous
            traditions, Spanish colonial influences, and modern innovations. It
            celebrates diverse heritage through music, dance, art, and cuisine.
            Rich in history and spirituality, Peru's culture is characterized by
            Inca ruins, colorful festivals, Andean folk music, and flavorful
            culinary delights like ceviche and cuy."
          </p>
        </div>
        <div className="px-5">
          <p className="h4" id="headline">
            Currency & Payments
          </p>
          <p className="lh-sm ms-2">
            "Peru's official currency is the Peruvian Sol (PEN). Credit and
            debit cards are widely accepted in urban areas, but cash is
            preferred in rural regions. ATMs are available in cities for
            currency withdrawal. Foreign currency exchange is available at banks
            and exchange offices. Some establishments may accept US dollars."
          </p>
        </div>
        <div className="px-5 mb-5">
          <p className="h4" id="headline">
            Dress code
          </p>
          <p className="lh-sm ms-2">
            "Dress code in Peru often blends traditional and modern elements. Traditional attire includes colorful textiles, such as the pollera skirt and poncho for women, and the poncho and chullo hat for men. In urban areas, Western-style clothing is common, with casual attire suitable for everyday wear."
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default about;

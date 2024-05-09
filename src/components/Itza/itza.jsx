import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import Image from "./itza.jpg";
import "./itza.css";

function about() {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <div>
          <img src={Image} className="d-block w-100 " alt="" />
        </div>

        <div className="mt-5 px-5">
          <p className="h1 text-center mb-4">Traditions of Chicken Ttza</p>
          <p className="h4 " id="headline">
            Language
          </p>
          <p className="lh-sm ms-2">
            "Chicken Ttza is a fictional language spoken by the inhabitants of
            the distant planet Zorblat. Developed over millennia, it
            incorporates complex vocalizations and intricate gestures, allowing
            for nuanced communication. Its syntax and vocabulary reflect the
            unique culture and history of the Zorblatians, with words often
            derived from celestial phenomena and indigenous flora and fauna."
          </p>
        </div>
        <div className="px-5">
          <p className="h4" id="headline">
            Culture
          </p>
          <p className="lh-sm ms-2">
            "The culture of Chicken Ttza speakers is communal, emphasizing
            family, tradition, and storytelling. Music, dance, and nature hold
            sacred significance. Creativity fuels their pursuit of knowledge and
            exploration. With strong ties to their planet and each other, they
            foster a vibrant and diverse society steeped in connection and
            heritage."
          </p>
        </div>
        <div className="px-5">
          <p className="h4" id="headline">
            Currency & Payments
          </p>
          <p className="lh-sm ms-2">
            "In the realm of Chicken Ttza, currency and payments revolve around
            the exchange of colorful feathers, each imbued with symbolic value.
            Transactions are conducted through intricate feather rituals, where
            the quality and rarity of feathers determine their purchasing power,
            fostering a vibrant economy steeped in tradition and symbolism."
          </p>
        </div>
        <div className="px-5 mb-5">
          <p className="h4" id="headline">
            Dress code
          </p>
          <p className="lh-sm ms-2">
            "Dress code specifies attire expectations for occasions or
            environments, ensuring appropriateness and professionalism. It
            guides attire choices, dictating styles, colors, and accessories.
            Dress codes vary widely, from formal to casual, reflecting cultural
            norms and organizational standards, aiming to maintain decorum and
            uphold image."
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default about;

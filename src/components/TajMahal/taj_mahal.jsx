import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import Image from "./taj_mahal.jpeg";
import "./taj_mahal.css";

function about() {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <div>
          <img src={Image} className="d-block w-100 " alt="" />
        </div>

        <div className="mt-5 px-5">
          <p className="h1 text-center mb-4">Traditions of Taj Mahal</p>
          <p className="h4 " id="headline">
            Language
          </p>
          <p className="lh-sm ms-2">
            "The language near the Taj Mahal is primarily Hindi, with Urdu and
            English also widely spoken. Hindi serves as the lingua franca,
            reflecting India's diverse linguistic landscape. Tourist hubs often
            have multilingual signage and guides, facilitating communication
            with visitors from around the world amid the monument's timeless
            splendor and cultural significance."
          </p>
        </div>
        <div className="px-5">
          <p className="h4" id="headline">
            Culture
          </p>
          <p className="lh-sm ms-2">
            "Taj Mahal, culture thrives with a rich tapestry of traditions, art,
            and cuisine. Influenced by Mughal heritage, it encompasses vibrant
            festivals, intricate handicrafts, and sumptuous cuisine. Visitors
            encounter a blend of spirituality and history, resonating through
            the labyrinthine streets, bustling markets, and enchanting melodies
            of the region."
          </p>
        </div>
        <div className="px-5">
          <p className="h4" id="headline">
            Currency & Payments
          </p>
          <p className="lh-sm ms-2">
            "In India, payments are primarily conducted using the Indian Rupee
            (INR), the national currency. Cash, cards, digital wallets, and
            online banking are popular payment methods. The Reserve Bank of
            India regulates currency issuance and oversees payment systems,
            ensuring efficiency, security, and financial stability in
            transactions nationwide."
          </p>
        </div>
        <div className="px-5 mb-5">
          <p className="h4" id="headline">
            Dress code
          </p>
          <p className="lh-sm ms-2">
            "Dress code near the Taj Mahal in India reflects cultural reverence
            and modesty. Visitors are encouraged to wear respectful attire,
            covering shoulders and knees, to honor the site's significance.
            Avoiding revealing or provocative clothing demonstrates respect for
            the sacredness of the monument and cultural traditions."
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default about;

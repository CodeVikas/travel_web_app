import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";
import Image from './img/image.jpeg'
import "./about.css";

function about() {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <div >
            <img src={Image} className="d-block w-100 "  alt="" />
        </div>
        <div className="mt-5 px-5">
          <p className="h2" id="headline">
            Our History
          </p>
          <p className="lh-sm ms-2">
            Established as a pioneer in the travel industry, Travel WebApp has
            been redefining exploration for a decade. With a commitment to
            innovation and personalized service, we specialize in crafting
            bespoke adventures tailored to every traveler's desires. From
            awe-inspiring landscapes to immersive cultural encounters, our
            platform offers a seamless journey from inspiration to booking. Our
            dedicated team of experts ensures every detail is meticulously
            planned, guaranteeing unforgettable experiences with every trip.
            With Travel WebApp, embark on a transformative journey that
            transcends ordinary travel and embraces the extraordinary.
          </p>
        </div>
        <div className="px-5">
          <p className="h2" id="headline">
            Vision
          </p>
          <p className="lh-sm ms-2">
            "Our vision at Wanderer's Haven is to redefine travel, seamlessly
            connecting explorers with the world's wonders. We aspire to create
            personalized journeys that inspire curiosity, foster cultural
            understanding, and ignite a lifelong passion for exploration. With
            us, every adventure becomes a transformative experience, leaving
            indelible memories and lasting connections."
          </p>
        </div>
        <div className="px-5 mb-5">
          <p className="h2" id="headline">
            Mission
          </p>
          <p className="lh-sm ms-2">
            "Our mission at Wanderer's Haven is to empower travelers to discover
            the world's beauty and diversity. We are committed to providing
            seamless, personalized travel experiences that inspire exploration,
            foster cultural understanding, and create lasting memories. Through
            innovation and excellence in service, we aim to enrich lives and
            ignite a passion for travel."
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default about;

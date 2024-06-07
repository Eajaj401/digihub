// components/Banner.js
import React, { useState } from "react";
import { Title, TitleLogo } from "./common/Title";
import PopupForm from "./PopupForm";

const Banner = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="We are looking forward to start a new project" /> <br />
            <TitleLogo title="Lets take your business to the next level!" />
          </div>
          <div>
            <button className="button-primary" onClick={togglePopup}>Request a call-back</button>
          </div>
        </div>
      </section>
      <PopupForm show={showPopup} onClose={togglePopup} />
    </>
  );
};

export default Banner;


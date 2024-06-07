import React, { useState } from "react";
import { Title, TitleSm } from "@/components/common/Title";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    timeframe: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/cont", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        budget: "",
        timeframe: "",
        projectDetails: "",
      });
    } else {
      alert("Error submitting the form.");
    }
  };

  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>+91 9547128644</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>INDIA</h3>
                  <span>Kalyani, Nadia, West Bengal, 741235</span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>eajaj401@gmail.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>techheart49@gmail.com</h3>
                  <span>Work with us </span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                <li className="icon">
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>your budget</span>
                    <input type="text" name="budget" value={formData.budget} onChange={handleChange} />
                  </div>
                  <div className="inputs">
                    <span>timeframe</span>
                    <input type="text" name="timeframe" value={formData.timeframe} onChange={handleChange} />
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button className="button-primary" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

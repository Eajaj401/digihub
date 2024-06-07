import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import PopupForm from "../../components/PopupForm"; // Import the PopupForm component

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for showing/hiding the popup

  const router = useRouter();
  
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const togglePopup = () => {
    setShowPopup(!showPopup); // Function to toggle popup visibility
  };

  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              <TitleLogo title='Hub' caption='DIGI' className='logomin' />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              About Agency
            </Link>
            <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              Team
            </Link>
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </Link>
            <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>
              Showcase
            </Link>
            <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>
              Blog
            </Link>
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
            <button className='button-primary' onClick={togglePopup}>book a consultation</button>
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
      <PopupForm show={showPopup} onClose={togglePopup} /> {/* Add the PopupForm component */}
    </>
  );
};

export default Header;

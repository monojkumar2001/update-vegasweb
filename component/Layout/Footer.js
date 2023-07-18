import React, { useState, useEffect } from "react";
import Footeritems from "./Footeritems";
const Footer = () => {
  const openTawk = (e) => {
    e.preventDefault();
    javascript: void Tawk_API.toggle();
  };
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section>
       <Footeritems />
        <div
          className={`${
            sticky ? "is-sticky" : ""
          } footer_about_btn text-center align-items-center`}
        >
          <div className="container">
            <div className="footer_about_btn_items d-flex text-center align-items-center justify-content-center gap-5">
              <h1>Let’s Get Started Today</h1>
              <a className="find-expert-btn" onClick={openTawk}>
              Talk with Us{" "}
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7071 8.7071C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928931C16.9526 0.538406 16.3195 0.538406 15.9289 0.928931C15.5384 1.31946 15.5384 1.95262 15.9289 2.34314L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.7071ZM8.74228e-08 9L23 9L23 7L-8.74228e-08 7L8.74228e-08 9Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

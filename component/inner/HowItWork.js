import React, { useEffect, useState } from "react";

function HowItWork() {
  const [isHovering, setIsHovering] = useState(1);
  return (
    <section className="business-grow cpt-6">
      <div className="container">
        <div className="business-warrper">
          <div className="business-left"    data-aos="fade-up"
            data-aos-duration="2000">
            <div
              className={
                isHovering === 1 ? "business-items active" : "business-items"
              }
              onMouseOver={() => setIsHovering(1)}
            >
              <div className="business-item numbering">
                <span>01</span>
              </div>
              <div className="business-item">
                <h3>Fill in your brief</h3>
                <p>
                  Launching  a new brand or start up? Do you want to increase
                  ROAS? Do you need to ramp up new client acquisition? Use a
                  simple form to tell us exactly what you need, and then leave
                  the hard work to us.
                </p>
              </div>
            </div>
            <div
              className={
                isHovering === 2 ? "business-items active" : "business-items"
              }
              onMouseOver={() => setIsHovering(2)}
            >
              <div className="business-item numbering ">
                <span>02</span>
              </div>
              <div className="business-item">
                <h3>Get matched</h3>
                <p>
                  In order to find the ideal match to smoothly integrate with
                  your business demands, our AI will draw on our 600+ global
                  network of experts each of whom has undergone a comprehensive
                  vetting process.
                </p>
              </div>
            </div>
            <div
              className={
                isHovering === 3 ? "business-items active" : "business-items"
              }
              onMouseOver={() => setIsHovering(3)}
            >
              <div className="business-item numbering before-none">
                <span>03</span>
              </div>
              <div className="business-item">
                <h3>Manage your team</h3>
                <p>
                  We cordially encourage your team to collaborate on client
                  projects, advertising campaigns, or product designs with our
                  team of experts.
                </p>
              </div>
            </div>
          </div>
          <div className="business-right"    data-aos="fade-up"
            data-aos-duration="2500">
            <div className="business-img">
              <video
                className="video-controls"
                controls
                src="https://res.cloudinary.com/dne6hxmao/video/upload/v1684843258/Vegas%20Web/Main%20Video/Vegas_Web_Promo_b25sos.mp4"
              ></video>
            </div>
            {/* <div className="business-btn">
              <button>How it works</button>
              <img src="./images/right-arrow.svg" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;

import React from "react";
import TraditionalCard from "./TraditionalCard";

const Traditional = () => {
  return (
    <>
      <div
        className="section cpt-6"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="container">
          <div className="traditional-content-wrapper">
            <div className="traditional-header cpb-7">
              <h1 className="section_title1">
                Leave the conventional marketing and development processes
                behind
              </h1>
              <p>
                Having founded multiple startups, we intimately understand the
                difficulties entrepreneurs encounter when it comes to hiring
                development and marketing teams.
              </p>
            </div>
            <div className="traditinal-item-cards row">
              <TraditionalCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Traditional;

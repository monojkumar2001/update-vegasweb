import React from "react";
import Image from "next/image";
const Whyus = ({items}) => {
  return (
    <section className="disc cpt-7">
      <div className="container">
        <div className="disc_container row d-flex align-items-center">
          <div className="col-lg-6 col-md-12"
            data-aos="fade-up"
            data-aos-duration="2000"
            >
            <div className="disc_title text-start">
              <h1 className="section_title1">Why Us</h1>
            </div>
            <div className="disc_para">
              <ul>
                {items.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
          <div
            className="disc_right col-lg-6 col-md-12 text-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="why-img">
              <Image
                width={622}
                height={525}
                src="https://res.cloudinary.com/dne6hxmao/image/upload/v1684399559/Vegas%20Web/Girl-01_foq66g.gif"
                alt="vages Web"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;

import React from "react";
import Link from "next/link";
const Ready = () => {
  return (
    <div className="ready" data-aos="fade-up" data-aos-duration="2000">
      <div className="container">
        <div className="ready-wrapper">
          <div className="ready-content">
            <h1 className="section_title1">Ready to try Vegas Web</h1>
            <p>
              Create your project today and get your designs tomorrow. It' that
              simple. Try Penji today 30-days risk-free.
            </p>
            <div className="ready-btn">
              <Link href={"/Contact"} className="ready-btn-item">
                Get Started
              </Link>
              {/* <button className="ready-btn-item">See Pricing</button> */}
            </div>
          </div>
          <div className="ready-img">
            <img src="/Images/about/ready-img.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;

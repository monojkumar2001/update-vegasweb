import React from "react";
import Image from 'next/image';

const Section_Service = () => {
  return (
    <div
      className="section_service"
    >
      <div className="container">
        <div className=" section_service_box  ">
          <div className="section_service_slider ">
            <div className="section_service_title ">
              <a href=""># Reliable Platform</a>
              <Image width={54} height={54} src="../Images/section_service/1.svg" alt="" />
            </div>
            <p>Most reliable agency with a dedicated team</p>
          </div>
          <div className="section_service_slider">
            <div className="section_service_title ">
              <a href=""># Project‘s Confidentiality</a>
              <Image width={54} height={54} src="../Images/section_service/2.svg" alt="" />
            </div>
            <p>All of Your Information Is Secure with us!</p>
          </div>
          <div className="section_service_slider">
            <div className="section_service_title ">
              <a href=""># Communicative</a>
              <Image width={54} height={54} src="../Images/section_service/3.svg" alt="" />
            </div>
            <p>Clients say the team feels like their employees</p>
          </div>
          <div className="section_service_slider">
            <div className="section_service_title ">
              <a href=""># 24/7 Support</a>
              <Image width={54} height={54} src="../Images/section_service/4.svg" alt="" />
            </div>
            <p>we are always available at your service 24*7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_Service;

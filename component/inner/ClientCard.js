import React from "react";
import Image from 'next/image';

const ClientCard = ({ img, title, dis, star }) => {
  return (
    <>
       <div className="client_box" >
            <div className="client_left">
              <div className="cilent_slider">
                <Image width={647} height={405} src={img} alt="vages Web" />
              </div>
            </div>
            <div className="client_right">
              <div className="client_right_title">
                <h5 className="section_title5">{title}</h5>
                <p>{dis}</p>
                <div className="client-star-con">
                  <span>
                    <Image width={17} height={15} src={star} alt="" />
                  </span>
                  <span>
                  
                    <Image width={17} height={15} src={star} alt="" />
                  </span>
                  <span>

                    <Image width={17} height={15} src={star} alt="" />
                  </span>
                  <span>

                    <Image width={17} height={15} src={star} alt="" />
                  </span>
                  <span>
                    <Image width={17} height={15} src={star} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default ClientCard;

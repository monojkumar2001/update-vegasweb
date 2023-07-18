import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper";
import { useSwiper } from "swiper/react";
import "swiper/swiper-bundle.min.css";
// import 'swiper/css/autoplay';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ClientCard from "./ClientCard";
// import { SwiperNavButtons } from "../../component/SwiperNavButton";

const Client = () => {
  const swiper = useSwiper();

  return (
    <>
      <div className="client cpt-6">
        <div className="container">
          <div
            className="client_title"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="section_title1">What Our Client Say s</h1>
            <h3 className="section_title3">
              This is what clients have been saying after using the great
              service we do for clients.
            </h3>
          </div>
          <div>
            <Swiper
              modules={[Navigation, Autoplay, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              //  autoplay={{delay:2000}}
              onSlideChange={() => {}}
              onSwiper={(swiper) => {}}
            >
              <SwiperSlide>
                <ClientCard
                  img="../Images/Hero_section/client.svg"
                  title="Save time managing social media for your business"
                  dis=" “This is by far the simplest, most proffewssional,trrusted & easiest-to-get-going platform that I’ve ever worked in."
                  star="../Images/Hero_section/start.svg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ClientCard
                  img="../Images/Hero_section/client1.svg"
                  title="Well Organized Platform with Outstanding Outcome "
                  dis="Vegas Web is providing a well-coordinated platform with remarkable outcomes. Their team exhibits punctuality and responsiveness, ensuring a thorough understanding of the assigned tasks. "
                  star="../Images/Hero_section/start.svg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ClientCard
                  img="../Images/Hero_section/client2.svg"
                  title="Great After Sales Support with Strong Communication Skills "
                  dis="Just perfect and exceptional work. I am beyond impressed and will be utilizing their services in the future as well. "
                  star="../Images/Hero_section/start.svg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ClientCard
                  img="../Images/Hero_section/client3.svg"
                  title="You Can Save a Lot of Time and Manage Other Aspects of Business "
                  dis="This is far the simplest, most useful, easiest-to-got going platform I have ever worked with for my business. "
                  star="../Images/Hero_section/start.svg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ClientCard
                  img="../Images/Hero_section/client4.svg"
                  title="Very Professional, Organized, and Easy to User Dashboard  "
                  dis="Vegas Web is truly remarkable and has made a tremendous impact on my business. Their consistent delivery of top-notch designs has been invaluable, and I am particularly impressed with their online portal system. "
                  star="../Images/Hero_section/start.svg"
                />
              </SwiperSlide>
            </Swiper>
            <div className="slider-nav">
              <div className="prev">
                <svg
                  width="12"
                  height="15"
                  viewBox="0 0 9 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1L1 7.5L8 14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="next">
                <svg
                  width="12"
                  height="15"
                  viewBox="0 0 9 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 14L8 7.5L1 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;


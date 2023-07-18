import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper";
import { useEffect, useState } from "react";
function OurRecentProject({project}) {
  
    const recent = project.filter(res => res.section == 'recent-project')
  return (
    <>
      {/* <!-- ============== Our Recent Project start============== --> */}
      <section className="our-recent-project cpt-7"   data-aos="fade-up"
            data-aos-duration="2000">
        <div className="container">
          <div className="our-recent-wrapper">
            <div className="our-recent-title">
              <h3>Our Recent Projects</h3>
            </div>
            <div className="our-recent-project-items cpt-7">
              <div className="our-recent-arrow-left our-recent-arrow">
                <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2L3 9L10 16"
                    stroke="#FD5444"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="our-recent-arrow-right our-recent-arrow">
                <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 16L9 9L2 2"
                    stroke="#FD5444"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <Swiper
                modules={[Navigation, A11y]}
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                  prevEl: ".our-recent-arrow-left",
                  nextEl: ".our-recent-arrow-right",
                }}
                loop="true"
                breakpoints={{
                  640: {
                    width: 640,
                    slidesPerView: 1,
                  },
                  768: {
                    width: 768,
                    slidesPerView: 1.5,
                  },
                  992: {
                    width: 992,
                    slidesPerView: 2.5,
                  },
                }}
              >
                {recent.map((item, index) => (
                  <SwiperSlide>
                    <div className="our-recent-project-item">
                      <div className="our-recent-project-img">
                        <img src={item.value} alt="" />
                      </div>
                      <div className="our-recent-project-content">
                        <div className="our-recent-project-content-item">
                          <h3>{item.title}</h3>
                          {/* <a href="">Vegas/Mobile App</a> */}
                        </div>
                        <div className="our-recent-project-content-item-img">
                          <a href={item.link} target="_blank" rel="">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L0.292893 12.2929ZM14 1C14 0.447715 13.5523 0 13 0H4C3.44772 0 3 0.447715 3 1C3 1.55228 3.44772 2 4 2H12V10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10V1ZM1.70711 13.7071L13.7071 1.70711L12.2929 0.292893L0.292893 12.2929L1.70711 13.7071Z"
                                fill="#FD5444"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ============== Our Recent Project end============== --> */}
    </>
  );
}

export default OurRecentProject;

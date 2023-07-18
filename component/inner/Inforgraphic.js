import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper";
import { useEffect, useState } from "react";
import Image from "next/image";
function Inforgraphic({project}) {
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      };
      const styles = {
        titleTextColor: "blue",
        rowTitleColor: "blue",
      };
    
      const [sliderPopup, setSliderPopup] = useState(0);
      useEffect(() => {      
        console.log(sliderPopup);
      }, [sliderPopup]);
      const openTawk = (e) => {
        e.preventDefault();
        javascript: void Tawk_API.toggle();
      };

      const firstSlide  = project.filter(res => res.section == 'Inforgraphics' && res.sub_section == 1)
      const secondSlide  = project.filter(res => res.section == 'Inforgraphics' && res.sub_section == 2)
      const thirdSlide  = project.filter(res => res.section == 'Inforgraphics' && res.sub_section == 3)

  return (
    
    <>
      {/* <!-- ============== Our Imagine start ======================  --> */}
      <section className="imagine cpb-6 "    data-aos="fade-up"
            data-aos-duration="2000">
          <div className="container">
            <div className="imagine-warrper">
            <div className="imagine-item-title imagine-item-title-con">
                    <h4>Inforgraphics</h4>
                    <div className="portfolio_hero_box_btn">
                <button onClick={openTawk}>Find an expert <span><svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7071 8.7071C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928931C16.9526 0.538406 16.3195 0.538406 15.9289 0.928931C15.5384 1.31946 15.5384 1.95262 15.9289 2.34314L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.7071ZM8.74228e-08 9L23 9L23 7L-8.74228e-08 7L8.74228e-08 9Z" fill="white"/>
</svg>
</span></button>
              </div>
                  </div>
                  <div className="imagine-items">
              <div className="imagine-item">
                <div className="imagine-item-img">
                  <div
                    className="imaging-img"
                    onClick={() => {
                      setSliderPopup(1);
                    }}
                  >
                    <Swiper
                      modules={[Navigation, A11y, Autoplay]}
                      spaceBetween={50}
                      slidesPerView={1}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      loop="true"
                    >
                      {
                        firstSlide.map((item) =>
                        (
                          <SwiperSlide>
                        <Image
                          src={item.value}
                          alt="vegasweb"
                          width={812}
                          height={564}
                        />
                      </SwiperSlide>
                        )
                        )
                      }
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="imagine-item">
                <div className="imagine-item-img">
                  <div
                    className="imaging-img"
                    onClick={() => {
                      setSliderPopup(2);
                    }}
                  >
                    <Swiper
                      modules={[Navigation, A11y, Autoplay]}
                      // onAutoplayTimeLeft={onAutoplayTimeLeft}
                      spaceBetween={50}
                      slidesPerView={1}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      // navigation={{
                      //   prevEl: ".imagine-arrow-left",
                      //   nextEl: ".imagine-arrow-right",
                      // }}
                      loop="true"
                    >
                      {
                        secondSlide.map((item) =>
                        (
                          <SwiperSlide>
                        <Image
                          src={item.value}
                          alt="vegaswev"
                          width={812}
                          height={564}
                        />
                      </SwiperSlide>
                        )
                        )
                      }
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="imagine-item">
                <div className="imagine-item-img">
                  <div
                    className="imaging-img"
                    onClick={() => {
                      setSliderPopup(3);
                    }}
                  >
                    <Swiper
                      modules={[Navigation, A11y, Autoplay]}
                      // onAutoplayTimeLeft={onAutoplayTimeLeft}
                      spaceBetween={50}
                      slidesPerView={1}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      // navigation={{
                      //   prevEl: ".imagine-arrow-left",
                      //   nextEl: ".imagine-arrow-right",
                      // }}
                      loop="true"
                    >
                      {
                        thirdSlide.map((item) =>
                        (
                          <SwiperSlide>
                        <Image
                          src={item.value}
                          alt="vegasweb"
                          width={812}
                          height={564}
                        />
                      </SwiperSlide>
                        )
                        )
                      }
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
        {/* <!-- ============== Our Imagine end ======================  --> */}

      {/* ===========================slider popup=============== */}
      <div
        className={`${
          sliderPopup === 1 ? "slider-popup active" : "slider-popup"
        }`}
      >
        <div className="slider-popup-inner">
          <button
            className="close-btn"
            onClick={() => {
              setSliderPopup(0);
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6013 0.412345C17.475 0.285778 17.325 0.185364 17.1598 0.116852C16.9946 0.0483401 16.8176 0.0130744 16.6388 0.0130744C16.46 0.0130744 16.2829 0.0483401 16.1178 0.116852C15.9526 0.185364 15.8026 0.285778 15.6763 0.412345L9 7.07495L2.32375 0.398692C2.19735 0.272291 2.04729 0.172024 1.88214 0.103616C1.71698 0.0352086 1.53998 1.33185e-09 1.36122 0C1.18246 -1.33185e-09 1.00545 0.0352086 0.840303 0.103616C0.675152 0.172024 0.525092 0.272291 0.398692 0.398692C0.272291 0.525092 0.172024 0.675152 0.103616 0.840303C0.0352086 1.00545 -1.33185e-09 1.18246 0 1.36122C1.33185e-09 1.53998 0.0352086 1.71698 0.103616 1.88214C0.172024 2.04729 0.272291 2.19735 0.398692 2.32375L7.07495 9L0.398692 15.6763C0.272291 15.8027 0.172024 15.9527 0.103616 16.1179C0.0352086 16.283 0 16.46 0 16.6388C0 16.8175 0.0352086 16.9945 0.103616 17.1597C0.172024 17.3248 0.272291 17.4749 0.398692 17.6013C0.525092 17.7277 0.675152 17.828 0.840303 17.8964C1.00545 17.9648 1.18246 18 1.36122 18C1.53998 18 1.71698 17.9648 1.88214 17.8964C2.04729 17.828 2.19735 17.7277 2.32375 17.6013L9 10.9251L15.6763 17.6013C15.8027 17.7277 15.9527 17.828 16.1179 17.8964C16.283 17.9648 16.46 18 16.6388 18C16.8175 18 16.9945 17.9648 17.1597 17.8964C17.3248 17.828 17.4749 17.7277 17.6013 17.6013C17.7277 17.4749 17.828 17.3248 17.8964 17.1597C17.9648 16.9945 18 16.8175 18 16.6388C18 16.46 17.9648 16.283 17.8964 16.1179C17.828 15.9527 17.7277 15.8027 17.6013 15.6763L10.9251 9L17.6013 2.32375C18.1201 1.80494 18.1201 0.931154 17.6013 0.412345Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="slider-popup-content">
            <div className="slider-popup-content-inner">
              <Swiper
                modules={[Navigation, A11y, Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                loop="true"
              >

                      {
                        firstSlide.map((item) =>
                        (
                          <SwiperSlide>
                            <div className="slider-popup-img">
                              <Image
                                src={item.value}
                                alt="vegasweb"
                                width={812}
                                height={564}
                              />
                            </div>
                          </SwiperSlide>
                        )
                        )
                      }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          sliderPopup === 2 ? "slider-popup active" : "slider-popup"
        }`}
      >
        <div className="slider-popup-inner">
          <button
            className="close-btn"
            onClick={() => {
              setSliderPopup(0);
            }}
          >
        <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6013 0.412345C17.475 0.285778 17.325 0.185364 17.1598 0.116852C16.9946 0.0483401 16.8176 0.0130744 16.6388 0.0130744C16.46 0.0130744 16.2829 0.0483401 16.1178 0.116852C15.9526 0.185364 15.8026 0.285778 15.6763 0.412345L9 7.07495L2.32375 0.398692C2.19735 0.272291 2.04729 0.172024 1.88214 0.103616C1.71698 0.0352086 1.53998 1.33185e-09 1.36122 0C1.18246 -1.33185e-09 1.00545 0.0352086 0.840303 0.103616C0.675152 0.172024 0.525092 0.272291 0.398692 0.398692C0.272291 0.525092 0.172024 0.675152 0.103616 0.840303C0.0352086 1.00545 -1.33185e-09 1.18246 0 1.36122C1.33185e-09 1.53998 0.0352086 1.71698 0.103616 1.88214C0.172024 2.04729 0.272291 2.19735 0.398692 2.32375L7.07495 9L0.398692 15.6763C0.272291 15.8027 0.172024 15.9527 0.103616 16.1179C0.0352086 16.283 0 16.46 0 16.6388C0 16.8175 0.0352086 16.9945 0.103616 17.1597C0.172024 17.3248 0.272291 17.4749 0.398692 17.6013C0.525092 17.7277 0.675152 17.828 0.840303 17.8964C1.00545 17.9648 1.18246 18 1.36122 18C1.53998 18 1.71698 17.9648 1.88214 17.8964C2.04729 17.828 2.19735 17.7277 2.32375 17.6013L9 10.9251L15.6763 17.6013C15.8027 17.7277 15.9527 17.828 16.1179 17.8964C16.283 17.9648 16.46 18 16.6388 18C16.8175 18 16.9945 17.9648 17.1597 17.8964C17.3248 17.828 17.4749 17.7277 17.6013 17.6013C17.7277 17.4749 17.828 17.3248 17.8964 17.1597C17.9648 16.9945 18 16.8175 18 16.6388C18 16.46 17.9648 16.283 17.8964 16.1179C17.828 15.9527 17.7277 15.8027 17.6013 15.6763L10.9251 9L17.6013 2.32375C18.1201 1.80494 18.1201 0.931154 17.6013 0.412345Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="slider-popup-content">
            <div className="slider-popup-content-inner">
              <Swiper
                modules={[Navigation, A11y, Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                loop="true"
              >
                      {
                        secondSlide.map((item) =>
                        (
                          <SwiperSlide>
                            <div className="slider-popup-img">
                              <Image
                                src={item.value}
                                alt="vegasweb"
                                width={812}
                                height={564}
                              />
                            </div>
                          </SwiperSlide>
                        )
                        )
                      }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          sliderPopup === 3 ? "slider-popup active" : "slider-popup"
        }`}
      >
        <div className="slider-popup-inner">
          <button
            className="close-btn"
            onClick={() => {
              setSliderPopup(0);
            }}
          >
        <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6013 0.412345C17.475 0.285778 17.325 0.185364 17.1598 0.116852C16.9946 0.0483401 16.8176 0.0130744 16.6388 0.0130744C16.46 0.0130744 16.2829 0.0483401 16.1178 0.116852C15.9526 0.185364 15.8026 0.285778 15.6763 0.412345L9 7.07495L2.32375 0.398692C2.19735 0.272291 2.04729 0.172024 1.88214 0.103616C1.71698 0.0352086 1.53998 1.33185e-09 1.36122 0C1.18246 -1.33185e-09 1.00545 0.0352086 0.840303 0.103616C0.675152 0.172024 0.525092 0.272291 0.398692 0.398692C0.272291 0.525092 0.172024 0.675152 0.103616 0.840303C0.0352086 1.00545 -1.33185e-09 1.18246 0 1.36122C1.33185e-09 1.53998 0.0352086 1.71698 0.103616 1.88214C0.172024 2.04729 0.272291 2.19735 0.398692 2.32375L7.07495 9L0.398692 15.6763C0.272291 15.8027 0.172024 15.9527 0.103616 16.1179C0.0352086 16.283 0 16.46 0 16.6388C0 16.8175 0.0352086 16.9945 0.103616 17.1597C0.172024 17.3248 0.272291 17.4749 0.398692 17.6013C0.525092 17.7277 0.675152 17.828 0.840303 17.8964C1.00545 17.9648 1.18246 18 1.36122 18C1.53998 18 1.71698 17.9648 1.88214 17.8964C2.04729 17.828 2.19735 17.7277 2.32375 17.6013L9 10.9251L15.6763 17.6013C15.8027 17.7277 15.9527 17.828 16.1179 17.8964C16.283 17.9648 16.46 18 16.6388 18C16.8175 18 16.9945 17.9648 17.1597 17.8964C17.3248 17.828 17.4749 17.7277 17.6013 17.6013C17.7277 17.4749 17.828 17.3248 17.8964 17.1597C17.9648 16.9945 18 16.8175 18 16.6388C18 16.46 17.9648 16.283 17.8964 16.1179C17.828 15.9527 17.7277 15.8027 17.6013 15.6763L10.9251 9L17.6013 2.32375C18.1201 1.80494 18.1201 0.931154 17.6013 0.412345Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="slider-popup-content">
            <div className="slider-popup-content-inner">
              <Swiper
                modules={[Navigation, A11y, Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                loop="true"
              >
                      {
                        thirdSlide.map((item) =>
                        (
                          <SwiperSlide>
                            <div className="slider-popup-img">
                              <Image
                                src={item.value}
                                alt="vegasweb"
                                width={812}
                                height={564}
                              />
                            </div>
                          </SwiperSlide>
                        )
                        )
                      }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================slider popup end=============== */}
    </>
  )
}

export default Inforgraphic;
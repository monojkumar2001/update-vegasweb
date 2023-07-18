import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper";
import { useEffect, useState } from "react";
import Image from "next/image";
function Imagine({ project }) {
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

  const presentation = project.filter(
    (res) => res.section == "presentation-design"
  );
  const landingPage = project.filter((res) => res.section == "landing-page");
  const brochurFlyers = project.filter(
    (res) => res.section == "brochur-flyers"
  );
  const bookGraphics = project.filter((res) => res.section == "book-graphics");
  const apparel = project.filter((res) => res.section == "apparel");
  const packaging = project.filter((res) => res.section == "packaging");

  return (
    <>
      {/* <!-- ============== Our Imagine start ======================  --> */}
      <section className="imagine cpb-6 cpt-7 "   data-aos="fade-up"
            data-aos-duration="2000">
        <div className="container">
          <div className="imagine-warrper">
            <div className="imagine-item-title imagine-item-titles">
              <h1 className="section_title1">
                If you can imagine it, we can design it.
              </h1>
            </div>
            <div className="imagine-items">
              <div className="imagine-item">
                <div className="imagine-item-title">
                  <h4>Presentation Design</h4>
                </div>
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
                      {presentation.map((item) => (
                        <SwiperSlide>
                          <Image
                            src={item.value}
                            alt="vegasweb"
                            width={808}
                            height={565}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="imagine-item">
                <div className="imagine-item-title">
                  <h4>Landing Pages</h4>
                </div>
                <div className="imagine-item-img">
                  <div
                    className="imaging-img"
                    onClick={() => {
                      setSliderPopup(2);
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
                      {landingPage.map((item) => (
                        <SwiperSlide>
                          <Image
                            src={item.value}
                            alt="vagasweb"
                            width={808}
                            height={565}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="imagine-item">
                <div className="imagine-item-title">
                  <h4>Brochure & Flyers</h4>
                </div>
                <div className="imagine-item-img">
                  <div
                    className="imaging-img"
                    onClick={() => {
                      setSliderPopup(3);
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
                      {brochurFlyers.map((item) => (
                        <SwiperSlide>
                          <Image
                            src={item.value}
                            alt="vegasweb"
                            width={808}
                            height={565}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="imagine-item">
                <div className="imagine-item-title">
                  <h4>Book Graphics</h4>
                </div>
                <div className="imagine-item-img">
                  <div
                    className="imaging-img"
                    onClick={() => {
                      setSliderPopup(4);
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
                      {bookGraphics.map((item) => (
                        <SwiperSlide>
                          <Image
                            src={item.value}
                            alt="vegasweb"
                            width={808}
                            height={565}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="imagine-item">
                <div className="imagine-item-title">
                  <h4>Apparel</h4>
                </div>
                <div className="imagine-item-img">
                  <div
                    className="imaging-img"
                    onClick={() => {
                      setSliderPopup(5);
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
                      {apparel.map((item) => (
                        <SwiperSlide>
                          <Image
                            src={item.value}
                            alt="vegasweb"
                            width={808}
                            height={565}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="imagine-item">
                <div className="imagine-item-title">
                  <h4>Packaging</h4>
                </div>
                <div className="imagine-item-img">
                  <div
                    className="imaging-img"
                    onClick={() => {
                      setSliderPopup(6);
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
                      {packaging.map((item) => (
                        <SwiperSlide>
                          <Image
                            src={item.value}
                            alt="vegasweb"
                            width={808}
                            height={565}
                          />
                        </SwiperSlide>
                      ))}
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
                {presentation.map((item) => (
                  <SwiperSlide>
                    <div className="slider-popup-img">
                      <Image src={item.value} alt="vegasweb" width={808} height={565} />
                    </div>
                  </SwiperSlide>
                ))}
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
                {landingPage.map((item) => (
                  <SwiperSlide>
                    <div className="slider-popup-img">
                      <Image src={item.value} alt="vegasweb" width={808} height={565} />
                    </div>
                  </SwiperSlide>
                ))}
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
                {brochurFlyers.map((item) => (
                  <SwiperSlide>
                    <div className="slider-popup-img">
                      <Image src={item.value} alt="vegasweb" width={808} height={565} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          sliderPopup === 4 ? "slider-popup active" : "slider-popup"
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
                {bookGraphics.map((item) => (
                  <SwiperSlide>
                    <div className="slider-popup-img">
                      <Image src={item.value} alt="vegasweb" width={808} height={565} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          sliderPopup === 5 ? "slider-popup active" : "slider-popup"
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
                {apparel.map((item) => (
                  <SwiperSlide>
                    <div className="slider-popup-img">
                      <Image src={item.value} alt="" width={808} height={565} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          sliderPopup === 6 ? "slider-popup active" : "slider-popup"
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
                {packaging.map((item) => (
                  <SwiperSlide>
                    <div className="slider-popup-img">
                      <Image src={item.value} alt="vegasweb" width={808} height={565} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================slider popup end=============== */}
    </>
  );
}

export default Imagine;

const itemName = ["Apparel", "Apparel", "Apparel"];

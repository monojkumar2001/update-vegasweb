import React from "react";
import { FaArrowRight } from "react-icons/fa";
const CreativeIdea = ({ video }) => {
  const openTawk = (e) => {
    e.preventDefault();
    javascript: void Tawk_API.toggle();
  };

  const firstVideo  = video.filter(res => res.slug == 'first-video')
  const secondVideo  = video.filter(res => res.slug == 'second-video')
  const thirdVideo  = video.filter(res => res.slug == 'third-video')
  const fourthVideo  = video.filter(res => res.slug == 'fourth-video')
  return (
    <>
      {/* campaign_section start */}
      <section>
        <div
          className="campaign cmt-8"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="container">
            <div className="campaign_box ">
              <div className="campaign_box_left">
                <div className="section_title">
                  <h1 className="section_title1">Creative Solutions</h1>
                  <h2 className="scondary_titie2">
                    The hyperconnected world of today demands complex solutions.
                    We approach problem solving by fusing the most effective
                    features from multiple software applications. Any and all of
                    the following services can be done perfectly by VEGAS WEB:
                  </h2>
                  <div className="campaign_btn">
                    <button onClick={openTawk}>
                      Find an expert <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="campaign_box_right">
                <video
                  autoPlay
                  loop
                  className="video_cont"
                  src={firstVideo[0].value}
                ></video>
              </div>
            </div>
            <div className="campaign_video_box row g-3">
              <div className="campaign_video_box_list col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <video
                  autoPlay
                  loop
                  className="video_cont1"
                  src={secondVideo[0].value}
                  width={400}
                ></video>
              </div>

              <div className="campaign_video_box_list col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <video
                  autoPlay
                  loop
                  className="video_cont2"
                  src={thirdVideo[0].value}
                  width={400}
                ></video>
              </div>
              <div className="campaign_video_box_list col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <video
                  autoPlay
                  loop
                  className="video_cont3"
                  src={fourthVideo[0].value}
                  width={400}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* campaign_section end */}
    </>
  );
};

export default CreativeIdea;

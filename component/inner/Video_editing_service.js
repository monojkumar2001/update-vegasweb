import React from "react";

function Video_editing_service() {

  return (
    <>
      <section>
        <div className="less_money cpt-6"   data-aos="fade-up"
            data-aos-duration="2000">
          <div className="container">
            <div className="less_section_title text-center ">
              <h1 className="section_title1"> Get consistent and professional-looking videos</h1>
              <p>
                {" "}
                {/* We work as your digital partner to produce eye-catching designs and reliable solutions for your business. */}
              </p>
            </div>
            <div className="row  less_money_box d-flex align-items-center justify-content-center">
              {services.map((item, i) => {
                return(
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={i}>
                  <div className="less_money_box_item " >
                    <div className="less_money_box_icons align-items-center text-center">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="less_money_item_title">
                      <h1>{item.title}</h1>
                    </div>
                    <p>{item.service_discrpition}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Video_editing_service;
const services=[
  {
    id:1,
    image:"Images/video-editing-service/1.svg",
    title:'Professional Editors On Demand',
    service_discrpition:'VEGAS WEB recruits elite professionals to manage your editing in order to be the best video editing service in the market. Join today to get your films edited by professionals who work relentlessly to make you look wonderful.'
  },
  {
    id:2,
    image:"Images/video-editing-service/2.svg",
    title:'Effective Communication',
    service_discrpition:`Every subscription package includes royalty-free audio and stock video, which we will employ to completely surpass our clients' expectations. To include anything, just tell your editor, and they'll do it.`, 
  },
  {
    id:3,
    image:"Images/video-editing-service/3.svg",
    title:'On-Time Delivery',
    service_discrpition:`We're here to support you so you may focus more of your energy into making videos and managing other aspects of your company. It is part of our ethos to keep working until you are totally satisfied.`,
  },
  {
    id:4,
    image:"Images/video-editing-service/4.svg",
    title:'Creativity',
    service_discrpition:`Compared to other websites, VEGAS WEB doesn't require weeks for editing. Instead, we provide a turnaround time of two days. You can always request changes after receiving your video. Revisions just require one day.`,
  },
  {
    id:5,
    image:"Images/video-editing-service/5.svg",
    title:'Flexible Hiring Models',
    service_discrpition:`We are so much more than just editors. To help us understand your style and assist you in creating better content on your end, you can  always schedule a 1-on-1 session with one of our staff members when you sign up.`,
  },
  {
    id:6,
    image:"Images/video-editing-service/6.svg",
    title:'Certified Designers',
    service_discrpition:`Not only will we ease you of the hassle of editing, but the caliber of your videos will also skyrocket, which will benefit you in establishing yourself as the master in your business.`,
  }
]

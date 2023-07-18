import React from "react";

function WebDesignService() {

  return (
    <>
      <section>
        <div className="less_money cpt-6"   data-aos="fade-up"
            data-aos-duration="2000">
          <div className="container">
            <div className="less_section_title text-center ">
              <h1 className="section_title1">Web Design Services</h1>
              <p>
                {" "}
                We work as your digital partner to produce eye-catching designs and reliable solutions for your business.
              </p>
            </div>
            <div className="row  less_money_box d-flex align-items-center justify-content-center">
              {services.map((item, i) => {
                return(
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="less_money_box_item " key={i}>
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

export default WebDesignService;
const services=[
  {
    id:1,
    image:"Images/website-service/1.svg",
    title:'Innovative Designs',
    service_discrpition:'Our UI/UX developers prefer easy,creative, and engaging websites and mobile friendly design.'
  },
  {
    id:2,
    image:"Images/website-service/2.svg",
    title:'Effective Communication',
    service_discrpition:'We will always keep you updated in order to establish a solid and lasting relationship with our clients.'
  },
  {
    id:3,
    image:"Images/website-service/3.svg",
    title:'On-Time Delivery',
    service_discrpition:'We guarantee on-time delivery because there is nothing more crucial than launching the website or web app on time.'
  },
  {
    id:4,
    image:"Images/website-service/4.svg",
    title:'Creativity',
    service_discrpition:'We build websites and web apps that are creative enough to grab your users attention.'
  },
  {
    id:5,
    image:"Images/website-service/5.svg",
    title:'Flexible Hiring Models',
    service_discrpition:'You can choose the business model that best suits your requirements from  the variety of services we offer at Vegas Web.'
  },
  {
    id:6,
    image:"Images/website-service/6.svg",
    title:'Certified Designers',
    service_discrpition:'We have a team of certified UI/UX designers, that works round the clock to make your project unique.'
  }
]

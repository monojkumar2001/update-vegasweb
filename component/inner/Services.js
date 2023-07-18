import React from "react";
import Link from "next/link";
const Services = () => {
  return (
    <div className="service cpt-7" data-aos="fade-up"
    data-aos-duration="2000">
      <div className="container">
        <div className="service_title">
          <h1 className="section_title1">Services</h1>
          <p>
            With our brand-new, exciting features and capabilities, the Vegas
            Web Platform will help you establish a billion start-up.
          </p>
        </div>
        <div className="service_box cpt-7">
          <div className="serivce_box_list">
            <div className="service_box_icons">
              <img
                src="../Images/home_service/1.svg"
                alt="vages web"
                width="65"
                height="70"
              />
            </div>
            <div className="service_box_list_title">
              <h2>Graphics Design</h2>
              <p>
                Build a premium visual identity for your startup with a
                modarate budget and timeline with VEGAS WEB. We produce stunning
                designs that produce concrete results.
              </p>
            </div>
            <div className="service_box_list_btn">
              <Link href="/graphic-design">Learn More</Link>
            </div>
          </div>

          <div className="serivce_box_list">
            <div className="service_box_icons">
              <img
                src="../Images/home_service/2.svg"
                alt="vages web"
                width="65"
                height="70"
              />
            </div>
            <div className="service_box_list_title">
              <h2>Video Editing</h2>
              <p>
                We provide a range of corporate and commercial video production
                across a number of visual storytelling services, ranging from
                promotional video creation to client testimonials and product
                photography. Browse through some of our most recent animation
                and video projects.
              </p>
            </div>
            <div className="service_box_list_btn">
              <Link href="/video-editing">Learn More</Link>
            </div>
          </div>

          <div className="serivce_box_list">
            <div className="service_box_icons">
              <img
                src="../Images/home_service/3.svg"
                alt="vages web"
                width="65"
                height="70"
              />
            </div>
            <div className="service_box_list_title">
              <h2>Social Media Marketing</h2>
              <p>
                Develop cross-channel marketing campaigns with VEGAS WEB that
                connect with your customers, get ideas for fresh brand tactics,
                and make and manage extensive content plans.
              </p>
            </div>
            <div className="service_box_list_btn">
              <Link href="/social-marketing">Learn More</Link>
            </div>
          </div>

          <div className="serivce_box_list">
            <div className="service_box_icons">
              <img
                src="../Images/home_service/4.svg"
                alt="vages web"
                width="55"
                height="70"
              />
            </div>
            <div className="service_box_list_title">
              <h2>Website Design </h2>
              <p>
                With VEGAS WEB, you can create websites that are goal-driven,
                responsive, accessible, and focused on providing an excellent
                user experience. We build websites that are supported by
                diligent UX and research effort.
              </p>
            </div>
            <div className="service_box_list_btn">
              <Link href="/website-design">Learn More</Link>
            </div>
          </div>

          <div className="serivce_box_list">
            <div className="service_box_icons">
              <img
                src="../Images/home_service/5.svg"
                alt="vages web"
                width="65"
                height="70"
              />
            </div>
            <div className="service_box_list_title">
              <h2>Website Development </h2>
              <p>
                We are experts at creating and maintaining websites that have
                performance at their core, whether they be bespoke brochure
                websites, integrated e-commerce systems, or seamless CMS
                migrations.
              </p>
            </div>
            <div className="service_box_list_btn">
              <Link href="/web-development">Learn More</Link>
            </div>
          </div>

          <div className="serivce_box_list">
            <div className="service_box_icons">
              <img
                src="../Images/home_service/6.svg"
                alt="vages web"
                width="65"
                height="70"
              />
            </div>
            <div className="service_box_list_title">
              <h2>SEO</h2>
              <p>
                Increase the online visibility of your company, the organic
                traffic to your website, and your position for the most
                profitable keywords. We are the SEO company that will improve
                your search results and maximize the return on your marketing
                investments.
              </p>
            </div>
            <div className="service_box_list_btn">
              <Link href="/seo">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

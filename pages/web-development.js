import React from "react";
import Link from "next/link";
import AppLayout from "../component/Layout/Layout";
import { FaCheckCircle } from "react-icons/fa";
import dynamic from "next/dynamic";
// import Section_Service from "../component/inner/Section_Service";
// import Brands from "../component/inner/Brands";
// import Custiomize_Price from "../component/inner/Custiomize_Price";
// import Mentioned from "../component/inner/Mentioned";
// import NewsLetter from "../component/inner/NewsLetter";
// import Project_Contact from "../component/inner/project_contact";
// import Registration from "../component/inner/Registration";
// import HowItWork from "../component/inner/HowItWork";
// import Client from "../component/inner/Client";
// import Faqshow from "../component/inner/Faqshow";
// import Whyus from "../component/inner/Whyus";
// import Solution from "../component/inner/Solution";
// import Fashion from "../component/inner/Fashion";
import Head from "next/head";
const Fashion = dynamic(() => import("../component/inner/Fashion"));
const Solution = dynamic(() => import("../component/inner/Solution"));
const Section_Service = dynamic(() => import("../component/inner/Section_Service"));
const Registration = dynamic(() => import("../component/inner/Registration"));
const NewsLetter = dynamic(() => import("../component/inner/NewsLetter"));
const Project_Contact = dynamic(() => import("../component/inner/project_contact"));
const Mentioned = dynamic(() => import("../component/inner/Mentioned.js"));
const Custiomize_Price = dynamic(() =>import("../component/inner/Custiomize_Price"));
const Whyus = dynamic(() => import("../component/inner/Whyus"));
const HowItWork = dynamic(() => import("../component/inner/HowItWork"));
const Faqshow = dynamic(() => import("../component/inner/Faqshow"));
const Client = dynamic(() => import("../component/inner/Client"));
const Brands = dynamic(() => import("../component/inner/Brands"));

const web_development = () => {
  return (
    <>
      <Head>
        <title>
          Vegas Web – Web Tech Development Services for B2B Outsourcing.
        </title>
        <meta property="og:site_name" content="VEGAS WEB"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://vegasweb.co/web-development" />
        <link rel="canonical" href="https://vegasweb.co/web-development" />
        <meta
          name="description"
          content="Vegas web offers Client-focused, customer-centric, web application development and design services which helps brands to evaluate the ever-changing digital landscape."
        ></meta>
        <meta
          name="og:description"
          content="Vegas web offers Client-focused, customer-centric, web application development and design services which helps brands to evaluate the ever-changing digital landscape."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Vegas Web – Web Tech Development Services for B2B Outsourcing. "
        />
        <meta
          property="og:image"
          content="Images/meta-img/web-development.jpg"
        />
        <meta property="image" content="Images/meta-img/web-development.jpg" />
        <meta name="keywords" content=""></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
      <div id="home1">
        <section className="web_dev cpt-7 cpb-6">
          <div className="container">
            <div className="web_dev_box row  d-flex align-items-center">
              <div className="web_dev_box_left social_marketing_left col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
                <div className="web_dev_box_title">
                  <h1 className="section_title1">
                    Functional & Creative Web <span>Development</span> Services
                  </h1>
                  <p>
                  From planning to execution our designs are unique, inventive and bold.{" "}
                  </p>
                </div>
                <div className="video_editing_right_btn d-flex gap-3">
                <Link href='#service'> Get Started</Link>
                    {/* <Link href='#service'  className="learn-more-btn">Learn More</Link> */}
                </div>
                <div className="hero_icon d-flex align-items-center text-center gap-5">
                  <div className="hero_icons_item d-flex  text-center gap-2">
                    <FaCheckCircle />
                    <h2 className="section_title2">Free Register</h2>
                  </div>
                  <div className="hero_icons_item d-flex  text-center gap-2">
                    <FaCheckCircle />
                    <h2 className="section_title2">Great Service</h2>
                  </div>
                </div>
              </div>
              <div className="web_dev_box_right text-center  col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
                <img
                  src="https://res.cloudinary.com/dne6hxmao/image/upload/v1684411911/Vegas%20Web/UI_w5nmyq.gif"
                  alt="vegas Web"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <========section_Service start========> */}
        <Section_Service />
        {/* <========section_Service end========> */}
        {/* <Disc/> section start */}
        <Whyus items={items}  />
        {/* <Disc/> section end */}
        <Brands />
        <Custiomize_Price />
        {/* <Brand_service/> section start */}
        <div id="service"><Solution title="Build and deploy strong, effective agile solutions" /></div>
        {/* <Brand_service/> section end */}
        <Mentioned />
        {/* <Less/> section start */}
        <Fashion title="Bring your dream development to life" />
        {/* <Less/> section end */}
        {/* NewsLetter section start */}
        <NewsLetter />
        {/* NewsLetter section end */}
        {/* Joining section start */}
        <HowItWork />
        {/* Joining section end */}
        {/* Client section start */}
        <Client />
        {/* Client section end */}
        {/* Project_Contact section start */}
        <Project_Contact />
        {/* Project_Contact section end */}
        {/* FAQ SECTIN Start */}
        <Faqshow />
        {/* FAQ SECTIN end */}
        <Registration />
      </div>
    </>
  );
};
web_development.Layout = AppLayout;
export default web_development;

const items = [
  `We provide web development services at a moderate cost, respecting your ideas and vision.`,
   `Our UI/UX designers and developers create user-friendly, secure solutions to scale your business.`, 
   `We strategize solutions to your project, giving you options to make modifications as needed until you are completely satisfied.`,
   `Money-back guarantee if our work falls short of your expectations and you don't get the greatest possible result for your brand.`,
  ];
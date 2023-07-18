import React from "react";
import Link from "next/link";
import Applayout from "../component/Layout/Layout";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Head from "next/head";

const Fashion = dynamic(() => import("../component/inner/Fashion"));
const Solution = dynamic(() => import("../component/inner/Solution"));
const Section_Service = dynamic(() => import("../component/inner/Section_Service"));
const Registration = dynamic(() => import("../component/inner/Registration"));
const NewsLetter = dynamic(() => import("../component/inner/NewsLetter"));
const Project = dynamic(() => import("../component/inner/project_contact"));
const Mentioned = dynamic(() => import("../component/inner/Mentioned.js"));
const Custiomize_Price = dynamic(() =>import("../component/inner/Custiomize_Price"));
const Whyus = dynamic(() => import("../component/inner/Whyus"));
const HowItWork = dynamic(() => import("../component/inner/HowItWork"));
const Faqshow = dynamic(() => import("../component/inner/Faqshow"));
const Client = dynamic(() => import("../component/inner/Client"));
const Brands = dynamic(() => import("../component/inner/Brands"));
const SocialMarketing = () => {
  return (
    <>
      <Head>
        <title>
          Vegas Web – Leading social media and digital marketing growth agency.
        </title>
        <meta property="og:site_name" content="VEGAS WEB"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://vegasweb.co/social-marketing" />
        <link rel="canonical" href="https://vegasweb.co/social-marketing" />
        <meta
          name="description"
          content="Experience exceptional social media marketing solutions with Vegas Web. Our strategies will drive engagement, build brand loyalty, and generate valuable leads with a limited budget. "
        ></meta>
        <meta
          name="og:description"
          content="Experience exceptional social media marketing solutions with Vegas Web. Our strategies will drive engagement, build brand loyalty, and generate valuable leads with a limited budget. "
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Vegas Web – Leading social media and digital marketing growth agency."
        />
        <meta
          property="og:image"
          content="Images/meta-img/social-marketing.jpg"
        />
        <meta property="image" content="Images/meta-img/social-marketing.jpg" />
        <meta name="keywords" content=""></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
      <section className="social_marketing cpt-7 cpb-6">
        <div className="container">
          <div className="social_marketing_container row d-flex align-items-center">
            <div className="social_marketing_left col-xl-6 col-lg-6 col-md-12 ">
              <div className="social_marketing_title ">
                <h1 className="section_title1">
                  Revolutionary Social Media Marketing <span>Services</span>
                </h1>
                <p className="section_title2">
                  Utilize social media to bring your boldest ideas to reality.{" "}
                </p>
              </div>
              <div className="video_editing_right_btn d-flex gap-3">
              <Link href='#service'> Get Started</Link>
                    {/* <Link href='#service'  className="learn-more-btn">Learn More</Link> */}
              </div>
              <div className="hero_icon d-flex  align-items-center text-center gap-5">
                <div className="hero_icons_item d-flex  text-center gap-2">
                  <FaCheckCircle />
                  <h2 className="section_title2">Unique Design</h2>
                </div>
                <div className="hero_icons_item d-flex  text-center gap-2">
                  <FaCheckCircle />
                  <h2 className="section_title2">Great Service</h2>
                </div>
              </div>
            </div>
            <div className="social_marketing_right text-center col-xl-6 col-lg-6 col-md-12 ">
              <Image width={636} height={562}
                src="https://res.cloudinary.com/dne6hxmao/image/upload/v1684406835/Vegas%20Web/Social-Media-01_fhl5aq.gif"
                alt="vages Web"
              />
            </div>
          </div>
        </div>
      </section>
      <Section_Service />
      {/* disc section start */}
      <Whyus items={items} />
      {/* disc section end */}
      <Brands />
      <Custiomize_Price />
      {/* Brand_service Section start*/}
      <div id="service">
      <Solution title="Get Noticed!" />
      </div>
      {/* Brand_service Section end*/}
      {/* Mentioned  section start*/}
      <Mentioned />
      {/* Mentioned  section end*/}
      {/* Grow section start */}
      <Fashion title="Tactfully Engage Customers & Grow Sales" />
      {/* Grow section end */}
      <NewsLetter />
      <HowItWork />
      <Client />
      <Project />
      <Faqshow />
      <Registration />
    </>  );
};
SocialMarketing.Layout = Applayout;
export default SocialMarketing;


const items = [
  `A team of seasoned experts, professionals, and trendsetters from the digital world that are dedicated to delivering results.`,
   `We deliver relevant, targeted content based on the user's device, location, interests, and other preferences to create an engaging, one-of-a-kind customer experiences. `, 
   `Independent in-house content writers to ensure Create a unique and innovative consumer experience by acting quickly to market changes and social requirements.`,
   `An integrated, technology- and analytics-driven strategy that is 100% performance-based or money-back guaranteed.`
 ]
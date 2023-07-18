import React from "react";
import Link from "next/link";
import Applayout from "../component/Layout/Layout";
import { FaCheckCircle } from "react-icons/fa";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";

const Fashion = dynamic(() => import("../component/inner/Fashion"));
const Solution = dynamic(() => import("../component/inner/Solution"));
const Section_Service = dynamic(() => import("../component/inner/Section_Service"));
const Registration = dynamic(() => import("../component/inner/Registration"));
const NewsLetter = dynamic(() => import("../component/inner/NewsLetter"));
const Project = dynamic(() => import("../component/inner/project_contact"));
const ChainUp = dynamic(() => import("../component/inner/ChainUp"));
const Mentioned = dynamic(() => import("../component/inner/Mentioned.js"));
const Custiomize_Price = dynamic(() =>import("../component/inner/Custiomize_Price"));
const Whyus = dynamic(() => import("../component/inner/Whyus"));
const HowItWork = dynamic(() => import("../component/inner/HowItWork"));
const Faqshow = dynamic(() => import("../component/inner/Faqshow"));
const Client = dynamic(() => import("../component/inner/Client"));
const Brands = dynamic(() => import("../component/inner/Brands"));

const GraphicDesign = () => {
  return (
    <>
      <Head>
        <title>
          Vegas Web – Unlimited graphic design by top designers | 1000+ 5-star
          reviews.
        </title>
        <meta property="og:site_name" content="VEGAS WEB"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://vegasweb.co/graphic-design" />
        <link rel="canonical" href="https://vegasweb.co/graphic-design" />
        <meta
          name="description"
          content="Get Unlimited, fast, top notch graphics design services trusted by 20k+ SMBs, marketers, and start-ups with flexible pricing plans. Cancel anytime.  "
        ></meta>
        <meta
          name="og:description"
          content="Get Unlimited, fast, top notch graphics design services trusted by 20k+ SMBs, marketers, and start-ups with flexible pricing plans. Cancel anytime.  "
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Vegas Web – Unlimited graphic design by top designers | 1000+ 5-star reviews."
        />
        <meta property="og:image" content="Images/meta-img/graphic-page.jpg" />
        <meta property="image" content="Images/meta-img/graphic-page.jpg" />
        <meta name="keywords" content=""></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
      <section>
        <div className="graphic">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="graphic_left col-lg-6 col-md-12 ">
                <div className="graphic_title">
                  <h1 className="section_title1">
                    Creative Graphic Strategy For Your <span>Brand</span>
                  </h1>
                  <p className="section_title2">
                    Get the best design services for your brand to beat the
                    market.
                  </p>
                </div>
                <div className="video_editing_right_btn d-flex gap-3">
                  <Link href="#service"> Get Started</Link>
                  {/* <Link href='#service'  className="learn-more-btn">Learn More</Link> */}
                </div>
                <div className="graphic_icon d-flex align-items-center text-center gap-3">
                  <div className="graphic_icons_item d-flex  align-items-center gap-2">
                    <FaCheckCircle />
                    <h2 className="section_title2">Unique Design</h2>
                  </div>
                  <div className="graphic_icons_item d-flex  align-items-center gap-2">
                    <FaCheckCircle />
                    <h2 className="section_title2">Great Service</h2>
                  </div>
                </div>
              </div>
              <div className="graphic_right col-lg-6 col-md-12 ">
                <Image
                  width={636}
                  height={557}
                  src="https://res.cloudinary.com/dne6hxmao/image/upload/v1684914372/Vegas%20Web/Graphics-Design-01_qyf6uc.gif"
                  alt="vegas web"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section_Service start */}
      <Section_Service />
      {/* Section_Service end */}
      {/* disc section start */}
      <Whyus items={items} />
      {/* disc section end */}
      <Brands />
      <Custiomize_Price />
      {/* ===================== */}
      {/* <BrandDesign /> */}
      {/* <===================> */}
      {/* Brand_Service section Start */}
      <div id="service">
        <Solution title="Create A Design That Fits  Your Brand Identity" />
      </div>
      {/* Brand_Service section end */}
      {/* Mentioned section satrt */}
      <Mentioned />
      {/* Mentioned section end */}
      <Fashion title="Get richer graphics for less money." />
      <ChainUp />
      <NewsLetter />
      <HowItWork />
      <Client />
      <Project />
      <Faqshow />
      <Registration />
    </>
  );
};
GraphicDesign.Layout = Applayout;

export default GraphicDesign;

const items = [
  `Our design services include solutions to fit any budget starting at a moderate cost. Projects typically begin getting designs within a few hours.`,
  `A experienced and dynamic team of designers is always available to create the ideal design for your brand.`,
  `You can request as many adjustments and changes as you like till you're pleased.`,
  `Money back guarantee if our designs don't meet your standards and you don't receive the best one for your company.`,
];

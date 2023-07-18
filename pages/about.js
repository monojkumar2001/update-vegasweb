import React from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
const Ready = dynamic(() => import("../component/inner/Ready"));
const Companies = dynamic(() => import("../component/inner/companies/Companies"));
const EveryPlan = dynamic(() => import("../component/inner/everyPlan/EveryPlan"));
const Works = dynamic(() => import("../component/inner/works/Works"));
const Traditional = dynamic(() => import("../component/inner/Traditional"));
// const Avengers = dynamic(() => import("../component/inner/Avengers"));
const Facts = dynamic(() => import("../component/inner/Facts"));
const Section_Service = dynamic(() => import("../component/inner/Section_Service"));
const Mentioned = dynamic(() => import("../component/inner/Mentioned.js"));
const Faqshow = dynamic(() => import("../component/inner/Faqshow"));
const Brands = dynamic(() => import("../component/inner/Brands"));

const about = () => {
  return (
    <>
      <Head>
        <title>Unleash Your Online Potential with Vegas Web</title>
        <meta property="og:site_name" content="VEGAS WEB"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://vegasweb.co/about" />
        <link rel="canonical" href="https://vegasweb.co/about" />
        <meta
          name="description"
          content="Elevate your digital presence with Vegas Web, the ultimate digital marketing partner. Watch your business thrive in the online world with our e xpert strategies and dedicated team. "
        ></meta>
        <meta
          name="og:description"
          content="Elevate your digital presence with Vegas Web, the ultimate digital marketing partner. Watch your business thrive in the online world with our e xpert strategies and dedicated team. "
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Unleash Your Online Potential with Vegas Web "
        />
        <meta property="og:image" content="Images/meta-img/about.jpg" />
        <meta property="image" content="Images/meta-img/about.jpg" />
        <meta name="keywords" content=""></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
      <div className="graphic">
        <div className="container">
          <div className="row ">
            <div className=" col-lg-12 col-md-12 ">
              <div className="about-content d-flex flex-column align-items-center justify-content-center mb-5">
                <h1 className="section_title1">
                We Win When you do, too! Our <span className="about-fucas">Business expands</span>  alongside yours
                </h1>
                <p className="mt-3">
                At VEGAS WEB, we create enduring  and strong connections with our clients by providing SEO, paid search marketing, Google Ads management, website design, eCommerce branding & development services. We offer integrated services and a data-driven strategy for web marketing that multiplies the effects of each channel. We are a team of more than 100+web developers, designers and digital marketing experts that was founded in 2005.
                </p>
                <div className="hero-img-4">
                <Image width={53} height={53} src="/Images/about/hero-4.svg" alt="" />
                </div>
                <div className="hero-img-5">
                <Image width={94} height={89} src="/Images/about/hero-5.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-conent-center">
            <div className="col-lg-12">
              <div className="about-img-wrapper">
               <div className="about-hero-img">
                <Image width={1460} height={589} src="/Images/about/hero-img.svg" alt="" />
               </div>
                <div className="about-item-2">
                <Image width={224} height={136} src="/Images/about/hero-img-2.svg" alt="" />
                </div>
                <div className="about-item-3">
                <Image width={248} height={120} src="/Images/about/hero-img-3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Section_Service />
      <Brands />
      <Facts/>
      <Traditional/>
      {/* <Avengers title='Vegas Web Avengers'/> */}
      <Mentioned/>
      <Works/>
      <EveryPlan/>
      <Companies/>
      <Faqshow />
      <Ready/>
    </>
  );
};
about.Layout = AppLayout;
export default about;

// const items = [
//   `Our design services include solutions to fit any budget starting at a moderate cost. Projects typically begin getting designs within a few hours.`,
//    `A experienced and dynamic team of designers is always available to create the ideal logo for your brand.`, 
//    `You can request as many adjustments and changes as you like till you're pleased.`
//   ];
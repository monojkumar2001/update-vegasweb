import React from "react";
import Link from "next/link";
import Applayout from "../component/Layout/Layout";
import { FaCheckCircle } from "react-icons/fa";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from 'next/image';

const Fashion = dynamic(() => import("../component/inner/Fashion"));
const Solution = dynamic(() => import("../component/inner/Solution"));
const Section_Service = dynamic(() => import("../component/inner/Section_Service"));
const Registration = dynamic(() => import("../component/inner/Registration"));
const NewsLetter = dynamic(() => import("../component/inner/NewsLetter"));
const Project = dynamic(() => import("../component/inner/project_contact"));
const Video_editing_service = dynamic(() => import("../component/inner/Video_editing_service"));
const Mentioned = dynamic(() => import("../component/inner/Mentioned.js"));
const Custiomize_Price = dynamic(() =>import("../component/inner/Custiomize_Price"));
const Whyus = dynamic(() => import("../component/inner/Whyus"));
const HowItWork = dynamic(() => import("../component/inner/HowItWork"));
const Faqshow = dynamic(() => import("../component/inner/Faqshow"));
const Client = dynamic(() => import("../component/inner/Client"));
const Brands = dynamic(() => import("../component/inner/Brands"));
const VideoEditing = () => {
  return (
    <>
      <Head>
        <title>
          Vegas Web– Elevate Your Videos with Vegas Web's Video Editing Services
        </title>
        <meta property="og:site_name" content="VEGAS WEB"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://vegasweb.co/video-editing" />
        <link rel="canonical" href="https://vegasweb.co/video-editing" />
        <meta
          name="description"
          content="Vegas Web: Your one-stop video editing agency for films, weddings, commercials, music videos, and YouTube content."
        ></meta>
        <meta
          name="og:description"
          content="Vegas Web: Your one-stop video editing agency for films, weddings, commercials, music videos, and YouTube content."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content=" Vegas Web– Elevate Your Videos with Vegas Web's Video Editing Services"
        />
        <meta property="og:image" content="Images/meta-img/video-edting.jpg" />
        <meta property="image" content="Images/meta-img/video-edting.jpg" />
        <meta name="keywords" content=""></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
      <section className="video_editing cpb-5">
        <div className="container video_editing-wrapper">
          <div className="video_editing_title">
            <h1 className="section_title1">Top Notch Video Editing Services</h1>
          </div>

          <div className="video_editing_box">
            <div className="video_editing_box_left">
              <Image width={600} height={363}
                src="Images/video-editing/image-2.svg"
                alt=""
              />
            </div>
            <div className="video_editing_right">
              <div className="video_editing_right_title">
                <p>
                  {" "}
                  Find the best post-production and video editing services right
                  here. At our video editing studio, a talented group of motion
                  designers, artists, and animators collaborate to produce
                  stunning works of art which compliments your brand.
                </p>
              </div>
              <div className="video_editing_right_btn d-flex gap-3">
              <Link href='#service'> Get Started</Link>
                    {/* <Link href='#service'  className="learn-more-btn">Learn More</Link> */}
              </div>
              <div className="video_editing_icons hero_icon d-flex align-items-center text-center">
                <div className="hero_icons_item video_editing_icons_items d-flex  text-center gap-2">
                  <FaCheckCircle />
                  <h2 className="section_title2">Free Register</h2>
                </div>
                <div className="hero_icons_item video_editing_icons_items d-flex  text-center gap-2">
                  <FaCheckCircle />
                  <h2 className="section_title2">Great Service</h2>
                </div>
              </div>
            </div>
            <div className="video_editing_image2">
              <img
                src="https://res.cloudinary.com/dne6hxmao/image/upload/v1684402810/Vegas%20Web/Video-Animation-01_mfzj3j.gif"
                alt="vages Web"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section_Service start */}
      <Section_Service />
      {/* Section_Service end */}
      <Whyus items={items} />
      {/* disc section end */}

      <Brands />
      <Custiomize_Price />

      {/* Brand_service section start */}
      <div id="service">
      <Solution title="Editing Services That Excite, Engage, and inspire your audience." />
      </div>
      {/* Brand_service section END */}
      {/* Mentioned section start*/}
      <Mentioned />
      <Fashion title="Get A-1 Video Editing & Post-Production Services." />
      {/* Mentioned section end*/}
      <NewsLetter />
      <Video_editing_service/>
      <HowItWork />
      <Client />
      <Project />
      <Faqshow />
      <Registration />
    </>
  );
};
VideoEditing.Layout = Applayout;
export default VideoEditing;

const items = [
  `Thanks to our in-house videography and post production resources, our creative team can produce phenomenal videos at a reasonable price for our clients.`,
   `In order to produce an intriguing visual story our creative team analyze each project from every perspective to pick out the most appealing and intriguing viewpoint.`, 
   `Our exceptional editorial strategy for our clients' video productions, which incorporates style and rhythm, grabs and holds the interest of your target audiences and generates sales.`,
   `Money-back guarantee if our work falls short of your expectations and you don't get the greatest possible result for your brand.`
  ];
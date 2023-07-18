import AppLayout from "../component/Layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FaCheckCircle } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
const WebDesignService = dynamic(() => import("../component/inner/WebDesignService"));
const Techologies = dynamic(() => import("../component/inner/Techologies"));
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
const website_design = () => {
  return (
    <>
      <Head>
        <title>Vegas Web – Top notch cost-effective web design services.</title>
        <meta property="og:site_name" content="VEGAS WEB"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://vegasweb.co/website-design" />
        <link rel="canonical" href="https://vegasweb.co/website-design" />
        <meta
          name="description"
          content="Discover Vegas Web, a professional website design company. We create stunning and functional websites that elevate your online presence and attract your target audience."
        ></meta>
        <meta
          name="og:description"
          content="Discover Vegas Web, a professional website design company. We create stunning and functional websites that elevate your online presence and attract your target audience."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Vegas Web – Top notch cost-effective web design services."
        />
        <meta property="og:image" content="Images/meta-img/web-design.jpg" />
        <meta property="image" content="Images/meta-img/web-design.jpg" />
        <meta name="keywords" content=""></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
      <section className="web_design cpt-6 cpb-6">
        <div className="container">
          <div className="web_design_box row">
            <div className=" web_design_left social_marketing_left col-xl-6 col-lg-6 col-md-12 ">
              <div className=" web_design_title">
                <h1 className="section_title1">
                  User-Centric & Profit-Oriented <span>Web Design</span>{" "}
                  Services
                </h1>
                <p>
                  Design a custom website for your business that showcase your
                  identity and your work.{" "}
                </p>
              </div>
              <div className="video_editing_right_btn d-flex gap-3">
                <Link href="#service"> Get Started</Link>
                {/* <Link href="#service" className="learn-more-btn">
                  Learn More
                </Link> */}
              </div>
              <div className="hero_icon  gap-5">
                <div className="d-flex align-items-center  text-center">
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
            </div>
            <div className="web_design_box_right text-center col-xl-6 col-lg-6 col-md-12  ">
              <Image width={636}
              height={473}
                src="https://res.cloudinary.com/dne6hxmao/image/upload/v1684411753/Vegas%20Web/Website_puserc.gif"
                alt="vages Web"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <======Section_Service start========> */}
      <div className="serice-cards">
        <Section_Service />
      </div>
      {/* <======Section_Service end========> */}
      {/* <Disc/> section start */}
      <Whyus items={items} />

      {/* <Disc/> section end */}
      <Brands />
      <Custiomize_Price />
      {/* <Brand_service/> */}
      <div id="service">
        <Solution title="Create your digital experiences exciting and inspiring with these services. Make Your Online Presence Count" />
      </div>
      {/* <Brand_service/> */}
      <Mentioned />
      {/* <Less/>  section start*/}
      <Fashion title="Get the most creative and functional design for less" />

      {/* <Less/>  section end*/}
      <Techologies />
      <NewsLetter />
      <WebDesignService />
      <HowItWork />
      <Client />
      <Project />
      <Faqshow />
      <Registration />
    </>
  );
};

website_design.Layout = AppLayout;
export default website_design;

const items = [
  `A experienced and dynamic team of designers are always available to create the ideal website for your brand at a moderate costing.`,
  `You can request as many adjustments and changes as you like till you're pleased.`,
  `You get a completely optimizable, easy-to-use and all device friendly website.`,
  `You receive a fully scalable, holistic design which is entirely performance-based.`,
];

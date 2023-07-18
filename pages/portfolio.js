import React, { useEffect, useState } from "react";
import axios from "axios";
import Applayout from "../component/Layout/Layout";
import "swiper/swiper-bundle.min.css";
import "swiper/css/autoplay";
// import Registration from "../component/inner/Registration";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import Head from "next/head";
import dynamic from "next/dynamic";
const SocialMediaGraphic = dynamic(() => import("../component/inner/SocialMediaGraphic"));
const CustomIllustration = dynamic(() => import("../component/inner/CustomIIIustration"));
const Inforgraphic = dynamic(() => import("../component/inner/Inforgraphic"));
const Imagine = dynamic(() => import("../component/inner/Imagine"));
const Section_Service = dynamic(() => import("../component/inner/Section_Service"));
const Registration = dynamic(() => import("../component/inner/Registration"));
const Campaign = dynamic(() => import("../component/inner/Campaign"));
const Project = dynamic(() => import("../component/inner/project_contact"));
const Launching = dynamic(() => import("../component/inner/Launching"));
const CreativeIdea = dynamic(() =>import("../component/inner/CreativeIdea"));
const portfolio = () => {
  const openTawk = (e) => {
    e.preventDefault();
    javascript: void Tawk_API.toggle();
  };

  const [item, setItem] = useState([])
  const [social, setSocial] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingg, setLoadingg] = useState(true)
  useEffect(() => {
    axios.get('api/portfolio')
          .then(res => {
            setItem(res.data.data)
            // console.log(res.data.data);
            setLoading(false);
          })
    axios.get('api/social')
          .then(res => {
            setSocial(res.data.data)
            setLoadingg(false);

          })
    
  }, [])
  
  if(loading){
    return '';
  }
  if(loadingg){
    return '';
  }

  return (
    <>
      <Head>
        <title>
          Vegas Web – One Step Solution for Web Tech, Design and Marketing
          Services.
        </title>
        <meta property="og:site_name" content="VEGAS WEB"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://vegasweb.co/portfolio" />
        <link rel="canonical" href="https://vegasweb.co/portfolio" />
        <meta
          name="description"
          content="Vegas Web is an innovative strategic design and marketing agency, leveraging data analytics, market research, and digital technology for impactful solutions in branding, design, and product development.  "
        ></meta>
        <meta
          name="og:description"
          content="Vegas Web is an innovative strategic design and marketing agency, leveraging data analytics, market research, and digital technology for impactful solutions in branding, design, and product development.  "
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Vegas Web – One Step Solution for Web Tech, Design and Marketing Services."
        />
        <meta property="og:image" content="Images/meta-img/portflio.jpg" />
        <meta property="image" content="Images/meta-img/portflio.jpg" />
        <meta name="keywords" content=""></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
      <section className="portfolio_hero cpt-7 cpb-6">
        <div className="container">
          <div className="protfolio_hero_box row d-flex align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="portfolio_hero_box_left social_marketing_left">
                <h1 className="section_title1">
                  We Help Businesses Grow Online & Increase Sales.
                </h1>
                <h2 className="section_title2">
                  VEGAS WEB focuses on developing and marketing websites that
                  are results-driven, helping businesses and startups grow by
                  generating more leads and online sales. Our internal team
                  works together to bring new concepts and tested marketing
                  techniques to the table.
                </h2>
                <div className="portfolio_hero_box_btn">
                  <button onClick={openTawk}>Lets Talk</button>
                </div>
                <div className="portfolio_hero_icons">
                  <h2 className="section_title2">Follow Us On </h2>
                  <div className="portfolio_hero_icons_items">
                    <a href={social[0].value}>
                      <FaFacebookF />
                    </a>
                    <a href={social[2].value}>
                      <FaLinkedinIn />
                    </a>
                    <a href={social[1].value}>
                      {" "}
                      <FaTwitter />
                    </a>
                    <a href={social[3].value}>
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="portfolio_hero_box_right">
                <img
                  className="portfolio_image"
                  src="https://res.cloudinary.com/dne6hxmao/image/upload/v1684656191/Vegas%20Web/Portfolio-01_ylfext.gif"
                  alt="vages Web"
                  width="auto"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section_Service start */}
      <Section_Service />
      {/* Section_Service end */}

      {/* Our Recent Project */}
      {/* <OurRecentProject project={item}/> */}
      {/* Socail Media graphic */}
      <SocialMediaGraphic project={item}/>
      {/* Custom Illustration */}
      <CustomIllustration project={item}/>

      {/* Inforgraphic */}
      <Inforgraphic project={item}/>

      <CreativeIdea video={item}/>

      <Campaign />

      <Imagine project={item}/>
      {/* launching section start */}
      <Launching />
      {/* launching section end */}
      {/* Project_Contact section start */}
      <Project />
      {/* Project_Contact section end */}
      {/* FAQ SECTIN Start */}
      
      {/* <Faqshow /> */}
      {/* FAQ SECTIN end */}
      <Registration />
    </>
  );
};
portfolio.Layout = Applayout;
export default portfolio;

import React from 'react';
import Link from "next/link";
import AppLayout from '../component/Layout/Layout';
import dynamic from 'next/dynamic';
import Head from "next/head";
import Image from 'next/image';
const Fashion = dynamic(() => import("../component/inner/Fashion"));
const Solution = dynamic(() => import("../component/inner/Solution"));
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

const SEO = () => {
  return (
  <>
  <Head>
        <title>
        Vegas Web – Award-Winning Search Engine Optimization Services 
        </title>
        <meta property="og:site_name" content="VEGAS WEB"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://vegasweb.co/seo" />
        <link rel="canonical" href="https://vegasweb.co/seo" />
        <meta
          name="description"
          content="Vegas Web offers effective SEO solutions. Our team of experts will optimize your website, improve search rankings, and maximize your online success. "
        ></meta>
        <meta
          name="og:description"
          content="Vegas Web offers effective SEO solutions. Our team of experts will optimize your website, improve search rankings, and maximize your online success. "
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Vegas Web – Award-Winning Search Engine Optimization Services "
        />
        <meta property="og:image" content="Images/meta-img/seo.jpg" />
        <meta property="image" content="Images/meta-img/seo.jpg" />
        <meta
          name="keywords"
          content=""
        ></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
        <section>
            <div className="seo">
                <div className="container">
                    <div className="seo_box">
                        <div className="seo_title text-center">
                            <h1 className='section_title1'>Get Powerful Leads With Performance driven SEO Tactics</h1>
                            <p className='section_title2'>Optimize Your Website for Top Search Engine visibility and ensure powerful boost in Traffic, Leads & Sales!</p>
                            <div className="seo_btn">
                                <Link href='#service' className='custom-btn'>Get Started</Link>
                            </div>
                        </div>
                        <div className='seo_image'>
                            <Image width={1635} height={923}  src="../Images/Hero_section/SEO1.svg" alt='vegas Web'/>
                        </div>
                        <div className='seo_image-2'>
                            <Image width={985} height={584}  src="../Images/Hero_section/SEO2.svg" alt='vegas Web'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
      {/* <=============SEO SECTION END=============> */}

      {/* <Disc/> section start*/}
        <Whyus items={items}  />
      {/* <Disc/> section end*/}
      <Brands/>
      <Custiomize_Price/>
      {/* <Brand_service/> */}
      <div id='service'><Solution title="Achieve New Heights With Your Brand"/></div>
      {/* <Brand_service/> */}
      <Mentioned/>
      {/*  */}
      <Fashion title="Outrank And Outsmart Your Competitors With Us"/>
     
      {/*  */}
      <NewsLetter/>
      <HowItWork/>
      <Client/>
      <Project/>
      <Faqshow/>
      <Registration />
  </>
  )
}
SEO.Layout = AppLayout;

export default SEO;

const items = [
  `At VEGAS WEB, every action we take is founded on tactics that have been tried, tested, and evaluated under the expertise of our team.`,
   `We operate a cost-effective working structure to offer high-quality optimization services at a market challenging price range.`, 
   `Our SEO experts always stay relevant with the most recent organic search algorithm upgrades and are constantly looking for ways to boost the performance of your website.`,
   `Money back guarantee if our services don't meet your standards and you don't receive what’s best for your company.`
  ];
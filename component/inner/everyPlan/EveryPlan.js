import React from "react";
import EveryPlanCard from "./EveryPlanCard";

const EveryPlan = () => {
  return (
    <section className="cpt-6"   data-aos="fade-up"
    data-aos-duration="2000">
      <div className="container">
        <div className="every-plan-wrapper">
          <div className="every-plan-title">
            <h1 className="section_title1 cpb-7">What you Get with Every Plan</h1>
          </div>
          <div className="every-plan-cards row">
            <EveryPlanCard EveryPlanData={EveryPlanData}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveryPlan;

const EveryPlanData=[
    {
        id:1,
        planIcon:'Images/about/every-plan/1.svg',
        title:"Endless projects",
        dis:"Submit and queue up as many projects as desired on our platform."
    },
    {
        id:2,
        planIcon:'Images/about/every-plan/2.svg',
        title:"Hassle-free revisions",
        dis:"Make your revisions together  directly with the team. hassle-free and easy."
    },
    {
        id:3,
        planIcon:'Images/about/every-plan/3.svg',
        title:"Distinctive folders",
        dis:"Use distinctive folders to effectively organize and manage your clients."
    },
    {
        id:4,
        planIcon:'Images/about/every-plan/4.svg',
        title:"Easy turnaround",
        dis:"Simple projects can be completed in 1-2 days, whereas complex ones take 3–4 days."
    },
    {
        id:5,
        planIcon:'Images/about/every-plan/5.svg',
        title:"100+ services",
        dis:"With our 100+ services, all your business needs can be met under one roof. There is always a committed team available for any and every project."
    },
    {
        id:6,
        planIcon:'Images/about/every-plan/6.svg',
        title:"Qualified team",
        dis:"Only the top 2% of experts are hired by Vegas Web, ensuring that you only work with the best."
    },
    {
        id:7,
        planIcon:'Images/about/every-plan/7.svg',
        title:"Team collaboration",
        dis:"To collaborate on client projects, marketing strategies, or product designs, we welcome your team to join ours."
    },
    {
        id:8,
        planIcon:'Images/about/every-plan/8.svg',
        title:"24/7 Customer support",
        dis:"Need assistance? Our helpful team is always available and ready to help."
    },
    {
        id:9,
        planIcon:'Images/about/every-plan/9.svg',
        title:"Money-back guarantee",
        dis:"Get a full refund, if Vegas web fail to impress you with their services ."
    },
]
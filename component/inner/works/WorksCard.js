import React from "react";

const WorksCard = () => {
  return (
    <>
      {worksItem.map((item, i) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="works-card avenger-card" key={i}>
              <div className="works-img-icon">
                <img src={item.icon} alt="" />
              </div>
              <div className="works-item-name">
                <h4>{item.names}</h4>
              </div>
              <p>{item.worksDis}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WorksCard;

const worksItem=[
    {
        id:1,
        icon:'Images/about/work-icon-1.svg',
        names:'Create unlimited  projects',
        worksDis:'Complete a brief form detailing your work needs and attach any examples or inspirations '
    },
    {
        id:2,
        icon:'Images/about/work-icon-2.svg',
        names:'Assigns most qualified talent',
        worksDis:`Vegasweb’s  A.I. compares thousands of creatives and assigns the most qualified for your project.         `,
    },
    {
        id:3,
        icon:'Images/about/work-icon-3.svg',
        names:'Get your work done  by 1-2 days',
        worksDis:`Quick 1-2 days turnaround with unlimited edits. Download your files instantly once it's perfect!`
    }
]

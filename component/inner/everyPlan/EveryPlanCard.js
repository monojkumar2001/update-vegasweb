import React from "react";
const EveryPlanCard = ({ EveryPlanData }) => {
  return (
    <>
      {EveryPlanData.map((item, i) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="every-plan-card" key={i}>
              <div className="every-plan-icon">
                <img src={item.planIcon} alt="" />
              </div>
              <div className="every-plan-content">
                <div className="every-plan-name">
                    <h4>{item.title}</h4>
                </div>
                <p>{item.dis}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EveryPlanCard;

import GrowTeamStar from "./GrowTeamStar";
import React, { useState } from "react";

const GrowTeamCard = ({ img, userName, des, showDis }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <div className="grow-team-card">
        <div className="grow-team-header">
          <div className="grow-team-user-img">
            <img src={img} alt="" />
          </div>
          <div className="grow-team-title">
            <h3>{userName}</h3>
            <GrowTeamStar />
          </div>
        </div>
        <p className="grow-dis">
          {des}
          {isShowMore && (
            <p>
            {showDis}
            </p>
          )}
        </p>

        <button onClick={toggleReadMoreLess} className="grow-read-more-btn">
          {isShowMore ? "Read Less" : "Read More..."}
        </button>
      </div>
    </>
  );
};

export default GrowTeamCard;

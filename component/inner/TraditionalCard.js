import React from "react";

const TraditionalCard = () => {
  return (
    <>
      {itemCard.map((item, i) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="tradition-item-card">
              <div className="tradition-item-card-icon">
                <img src={item.images} alt="" />
              </div>
              <h3 className="tradition-dis">{item.traditionDis}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TraditionalCard;

const itemCard = [
  {
    id: 1,
    images: "Images/about/tradi-1.svg",
    traditionDis: "Manage Multiple Projects",
  },
  {
    id: 2,
    images: "Images/about/tradi-2.svg",
    traditionDis: "Point & Click Revisions",
  },
  {
    id: 3,
    images: "Images/about/tradi-3.svg",
    traditionDis: "Team Collaboration",
  },
];

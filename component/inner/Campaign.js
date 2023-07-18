import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
function Campaign() {
    const openTawk = (e) => {
        e.preventDefault();
        javascript: void Tawk_API.toggle();
      };
  return (
    <> 
        <section>
        <div className="campaign_asset cpt-7 cpb-7"   data-aos="fade-up"
            data-aos-duration="2000">
          <div className="container">
            <div className="campaign_asset_box row g-4 d-flex align-items-center">
              <div className="col-lg-6 col-md-12">
              <div className="campaign_asset_box_left social_marketing_left">
                <h1 className="section_title1">Campaign Assets</h1>
                <h3 className="section_title3">
                  Turn your campaign concept into as many individual asset types
                  as you need. More variations? More formats? More platforms? No
                  problem. Let us turn your vision into a cohesive,
                  multi-dimensional campaign.
                </h3>
                <div className="portfolio_hero_box_btn ">
                  <button onClick={openTawk}>
                    Find an expert <FaArrowRight />
                  </button>
                </div>
              </div>
              </div>
              <div className="col-lg-6 col-md-12">
              <div className="campaign_asset_box_right">
                <Image
                  src="../Images/campaign_asset.svg"
                  alt="vegasweb"
                  width={784}
                  height={666}
                />
              </div>
              </div>
             
            
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Campaign
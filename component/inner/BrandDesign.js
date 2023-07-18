import React from 'react'

function BrandDesign() {
  return (
    <>
          <div className="brand_design  cpt-6"   data-aos="fade-up"
            data-aos-duration="2000">
        <div className="container">
          <div className="brand_design_title d-flex">
            <h1 className=" section_title1">
              Take A look at some of our brand Design work
            </h1>
            <a className="custom-btn text-center">
              Our Work <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="brand_design_box row g-4">
            <div className="col-lg-3 col-md-6 col-sm-12 align-items-center text-center brand_dedign_items">
              <img
                src="../Images/brand_identity_design.png"
                alt="vages Web"
                width="300"
                height="300"
              />
              <a className="custom-btn">Brand Identity Design</a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 align-items-center text-center brand_dedign_items">
              <img
                src="../Images/ad_icons.png"
                alt="vages Web"
                width="300"
                height="300"
              />
              <a className="custom-btn">AD Creative</a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 align-items-center text-center brand_dedign_items">
              <img
                src="../Images/packaing_icons.png"
                alt="vages Web"
                width="300"
                height="300"
              />
              <a className="custom-btn">Packaging & Merch Design</a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 align-items-center text-center brand_dedign_items">
              <img
                src="../Images/illustration_icons.png"
                alt="vages Web"
                width="300"
                height="300"
              />
              <a className="custom-btn">Illustration</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BrandDesign
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
function Launching() {
  const openTawk = (e) => {
    e.preventDefault();
    javascript: void Tawk_API.toggle();
  };
  return (
    <>
      <section>
        <div
          className="campaign_asset cpt-7 cpb-7"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="container">
            <div className="campaign_asset_box row g-4 d-flex align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="campaign_asset_box_left social_marketing_left">
                  <h3 className="section_title3">SEASONAL DESIGNS</h3>
                  <h1 className="section_title1">
                    Launching a seasonal campaign? We can help!
                  </h1>
                  <p className="section_title3">
                    Seasonal design demand is one of the top reasons our clients
                    sign up for a design subscription. Sign up today and start
                    automating your seasonal design needs.
                  </p>
                  <div className="portfolio_hero_box_btn ">
                    <button onClick={openTawk}>
                      Get Started <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="launching_asset_box_right">
                  <Image
                    src="../Images/portfolio/launching-img.svg"
                    alt="vegasweb"
                    width={731}
                    height={509}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Launching;

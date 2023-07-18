import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";
// import styled from '@emotion/styled';
function valuetext(value) {
  return `${value}USD`;
}

export default function DiscreteSlider({ valuetext }) {
  const [value, setValue] = React.useState(5000);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div className="price-range cpt-6 "    data-aos="fade-up"
            data-aos-duration="2000">
        <div className="container">
          <div className="price-range-width">
            <h2 className="sec-title">
              Customizable pricing and quotation methods.
            </h2>

            <p className="sec-des">
            Use our personalized service plans to bring in high-caliber clients who will spend a fortune at your site. To provide you a game-changing experience, our specially design subscription plans combines the work of top designers and developers from across the globe with technology that has been specifically designed for the purpose.            </p>
          </div>
          <div className="range-area">
            <div className="left-range">
              <h3 className="range-title">What is your monthly budget?</h3>
              <h2 className="range-total">$5k$ - $10k</h2>
              <Box className="price-slider">
                <Slider
                  aria-label="Temperature"
                  defaultValue={500}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  onChange={handleChange}
                  step={5000}
                  marks
                  min={1000}
                  max={100000}
                />
              </Box>
              <p>
                $5k - $10k $10k - $20k $20k - $40k $40k - $60k $60k - $100k
                $100k - $200k $200k -$500k $500k
              </p>
            </div>
            <div className="right-telk">
              <h2 className="month-price">
                ${value}/<span className="price-text">mo</span>
              </h2>
              {/* <ReactWhatsapp
                number="+13025977087"
                message={`Hello, I chose this price ${value} USD for my project. Please contact me as soon as possible. Thank you`}
              > */}
              <Link href='/connect' type="submit" className="get-start-btn">
                Get Started
              </Link>
              {/* </ReactWhatsapp> */}
              <p>
                Monthly payment, no setup fees, pay only when you approve the
                expert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

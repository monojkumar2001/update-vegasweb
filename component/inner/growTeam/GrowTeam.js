import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.min.css";
import GrowTeamCard from "./GrowTeamCard";
import GrowTeamStar from "./GrowTeamStar";
const GrowTeam = () => {
  return (
    <div className="grow-team-wrapper cpt-7 cpb-7">
      <div className="">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Navigation, EffectCoverflow, A11y]}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          breakpoints={{
            450: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 3,
            },
            1240: {
              slidesPerView: 5,
            },
          }}
        >
   
          <SwiperSlide>
            <GrowTeamCard
              img="/Images/About/companies/user-1.jpg"
              userName="Julia Hoffman"
              des="The professionalism and commitment the Vegas Web team displayed to this project left me feeling very satisfied."
           showDis="The new website they have made for us is fantastic; it fulfills all of our expectations and then some."
           />
          </SwiperSlide>
          <SwiperSlide>
            <GrowTeamCard
              img="/Images/About/companies/user-2.jpg"
              userName="Julia Hoffman"
              des="At first, I was skeptical but I soon realized that my apprehensions were misplaced! Within a few weeks,  
              "
            showDis="the designers and developers at Vegas Web updated our previous website in a matter of weeks, and it now looks just stunning."
            />
          </SwiperSlide>
          <SwiperSlide>
            <GrowTeamCard
              img="/Images/About/companies/user-3.jpg"
              userName="Cassey Roberts"
              des="We asked Vegas Web  to create a new digital marketing strategy to strengthen our online visibility "
            showDis=".They not only created a fantastic digital marketing strategy that enhanced our marketing efficiency, but also helped sky-rocket our business. Thank you Vegas web!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GrowTeamCard
              img="/Images/About/companies/user-4.jpg"
              userName="Richard L. Link"
              des="Their service solved so many pain points for our small business, allowing us to have a graphic designer while staying on budget. Their services were "
            showDis=" professional, reliable, and quick. Would highly recommend!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GrowTeamCard
              img="/Images/About/companies/user-5.jpg"
              userName="Marla I Ortega"
              des="When our company was bottle-necked with digital marketing needs, the vegasweb team helped us out. They are creative professionals. "
            showDis="They always go above and beyond to satisfy your company needs!."
            />
          </SwiperSlide>
          <SwiperSlide>
            <GrowTeamCard
              img="/Images/About/companies/user-6.jpg"
              userName="Shawn B. Nail"
              des="Vegasweb is wonderful and has helped my business so much. They consistently produce high-quality work and I love their online portal system,"
            showDis=" as it is very professional, organized, and easy to use. I highly recommend them!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GrowTeamCard
              img="/Images/About/companies/user-7.jpg"
              userName="Aleisha B. Key"
              des="Vegasweb is a valuable resource for agencies looking to offload creative work. Their services have greatly benefited"
            showDis=" both our clients and our agency, and we highly recommend them!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GrowTeamCard
              img="/Images/About/companies/user-8.jpg"
              userName="Donald M. Jenson"
              des="Among many companies, Vegas Web was the best in terms of pricing, quality, and turnaround time. As a small digital marketing agency,"
            showDis=" we sometimes get too much work or receive requests for small graphic design tasks outside of our expertise, which is where vegasweb comes in."
            />
          </SwiperSlide>
          <SwiperSlide>
            <GrowTeamCard
              img="/Images/About/companies/user-9.jpg"
              userName="Anne M. Erikson"
              des="As a non-profit with a small team on a low budget, vegasweb makes it easy to collaborate as a team and get the designs we need in a small time frame."
            showDis=" Their portal is easy to use and makes revisions, all of which are returned within 24 hours."
            />
          </SwiperSlide>
        </Swiper>

        <div className="slider-nav">
          <div className="prev  grow-arrow-nav">
            <svg
              width="12"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L1 7.5L8 14"
                stroke="#FD5444"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="next grow-arrow-nav">
            <svg
              width="12"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 14L8 7.5L1 1"
                stroke="#FD5444"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowTeam;

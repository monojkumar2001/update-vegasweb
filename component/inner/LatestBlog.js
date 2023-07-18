import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
function LatestBlog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("api/latest/post")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);
  return (
    <section>
      <div className="latest-blog">
        <div className="container">
          <div className="latest-post-title">
            <h2 className="raleway-black-24">CONTINUE READING</h2>
          </div>
          <div className="latest-post-container">
            <div className="latest-post-card">
              <div className="post-card-wrapper">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  modules={[Navigation, A11y]}
                  navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                  }}
                  breakpoints={{
                    450: {
                      slidesPerView: 1,
                    },
                    700: {
                      slidesPerView: 2,
                    },
                    1240: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {posts.map((post, index) => (
                    <SwiperSlide className="latest-blog-post" key={post.id}>
                      <div className="blog-post post-card">
                        <div className="blog-img">
                          <img
                            height="auto"
                            width="auto"
                            src={post.main_image}
                            alt={post.seo_title}
                          />
                        </div>
                        <div className="about-blog">
                          <Link href={post.slug} className="urbanist-black-18">
                         {post.title}
                          </Link>
                          <p className="raleway-grey-16">
                            <span className="author-name-post">
                              {post.author}
                            </span>{" "}
                            <div className="space">|</div>
                            <span className="post-date">
                              {post.created_date}
                            </span>
                          </p>
                          <p
                            className="sm-des"
                            dangerouslySetInnerHTML={{
                              __html: post.description.substring(0, 100),
                            }}
                          ></p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="slider-nav latest-post-nav-arrow">
                  <div className="prev">
                  <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2L3 9L10 16"
                    stroke="#FFF"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
                  </div>
                  <div className="next">
                  <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 16L9 9L2 2"
                    stroke="#FFF"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestBlog;
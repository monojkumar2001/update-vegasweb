import axios from "../../lib/axios";
import AppLayout from "../../component/Layout/Layout";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Blocks } from "react-loader-spinner";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
// import LatestBlog from "../../component/inner/LatestBlog";


export async function getStaticPaths() {
  const response = await axios.get("http://metacookiesnft.com/api/blog");

  return {
    fallback: true,
    paths: response.data.map((post) => ({
      params: { slug: post.slug.toString() },
    })),
  };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(`api/blog/${params.slug}`);
  const data = response.data;

  if (!data.slug) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: data,
    },
    revalidate: 10,
  };
}

export default function BlogDetails({ blog }) {
  const [scroll, setScroll] = useState(0);
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    );
  }

  useEffect(() => {
    function handleScroll() {
      setScroll(
        Math.floor(
          (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
            100
        )
      );
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta property="og:title" content={blog.seo_title} />
        <meta name="description" content={blog.seo_description}></meta>
        <meta name="og:description" content={blog.seo_description}></meta>
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blog.main_image} />
        <meta property="image" content={blog.main_image} />
        <meta name="keywords" content={blog.seo_keywords}></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>

      {/* <OfferA /> */}
      <div id="blog" className="cpy-6">
        <div className="container">
          <div className="page-route">
            <Link href={"/blog"}>
              <p className="blog-page-link">BLOG</p>
            </Link>
            <p> &gt; </p>

            <p>POST DETAILS</p>
          </div>

          <div className="post-top-area">
            <div className="post-top-content">
              <h1 className="urbanist-dark-22">{blog.title}</h1>

              <div className="blog-img">
                <img
                  height="auto"
                  width="auto"
                  src={blog.main_image}
                  alt={blog.seo_title}
                />
              </div>
            </div>
            <div className="small-info">
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75 3.25C6.09375 3.25 4.75 4.59375 4.75 6.25C4.75 7.90625 6.09375 9.25 7.75 9.25C9.40625 9.25 10.75 7.90625 10.75 6.25C10.75 4.59375 9.40625 3.25 7.75 3.25ZM7.75 7.75C6.90625 7.75 6.25 7.09375 6.25 6.25C6.25 5.4375 6.90625 4.75 7.75 4.75C8.5625 4.75 9.25 5.4375 9.25 6.25C9.25 7.09375 8.5625 7.75 7.75 7.75ZM7.75 0.25C3.46875 0.25 0 3.71875 0 8C0 12.2812 3.46875 15.75 7.75 15.75C12.0312 15.75 15.5 12.2812 15.5 8C15.5 3.71875 12.0312 0.25 7.75 0.25ZM7.75 14.25C6.1875 14.25 4.75 13.6875 3.65625 12.75C4.125 12.0312 4.9375 11.5312 5.84375 11.5312C6.5 11.7188 7.125 11.8125 7.75 11.8125C8.34375 11.8125 8.96875 11.7188 9.625 11.5312C10.5312 11.5625 11.3438 12.0312 11.8125 12.75C10.7188 13.6875 9.28125 14.25 7.75 14.25ZM12.8125 11.625C12.0625 10.6562 10.875 10 9.53125 10C9.21875 10 8.71875 10.3125 7.75 10.3125C6.75 10.3125 6.25 10 5.9375 10C4.59375 10 3.40625 10.6562 2.65625 11.625C1.90625 10.625 1.5 9.375 1.5 8C1.5 4.5625 4.28125 1.75 7.75 1.75C11.1875 1.75 14 4.5625 14 8C14 9.375 13.5625 10.625 12.8125 11.625Z"
                    fill="#6345ED"
                  />
                </svg>

                <p className="urbanist-grey-15">{blog.author}</p>
              </div>
              <div>
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z"
                    fill="#6345ED"
                  />
                </svg>

                <p className="urbanist-grey-15">{blog.created_date}</p>
              </div>
            </div>
          </div>
          <section className="blog-content">
            {/* <!---------------------- right side -------------------------------> */}
            <div className="tags-media">
              <p className="read-time">10 Min Read</p>

              <div className="progress-bar">
                <div className="progress" style={{ width: `${scroll}%` }} />
              </div>
              <div className="soc-share">
                <p className="urbanist-black-18">Share:</p>
                <div className="soc-tags-container">
                  <FacebookShareButton
                    url={`https://nftconstructer.com/blog/${blog.slug}`}
                  >
                    <div className="soc-tag">
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.71875 9L9.15625 6.125H6.375V4.25C6.375 3.4375 6.75 2.6875 8 2.6875H9.28125V0.21875C9.28125 0.21875 8.125 0 7.03125 0C4.75 0 3.25 1.40625 3.25 3.90625V6.125H0.6875V9H3.25V16H6.375V9H8.71875Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={`https://nftconstructer.com/blog/${blog.slug}`}
                  >
                    <div className="soc-tag">
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z"
                          fill="#14161B"
                        />
                      </svg>
                    </div>
                  </TwitterShareButton>
                  <LinkedinShareButton
                    url={`https://nftconstructer.com/blog/${blog.slug}`}
                  >
                    <div className="soc-tag">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.125 14V4.65625H0.21875V14H3.125ZM1.65625 3.40625C2.59375 3.40625 3.34375 2.625 3.34375 1.6875C3.34375 0.78125 2.59375 0.03125 1.65625 0.03125C0.75 0.03125 0 0.78125 0 1.6875C0 2.625 0.75 3.40625 1.65625 3.40625ZM13.9688 14H14V8.875C14 6.375 13.4375 4.4375 10.5 4.4375C9.09375 4.4375 8.15625 5.21875 7.75 5.9375H7.71875V4.65625H4.9375V14H7.84375V9.375C7.84375 8.15625 8.0625 7 9.5625 7C11.0625 7 11.0938 8.375 11.0938 9.46875V14H13.9688Z"
                          fill="#14161B"
                        />
                      </svg>
                    </div>
                  </LinkedinShareButton>
                  <TelegramShareButton
                    url={`https://nftconstructer.com/blog/${blog.slug}`}
                  >
                    <div className="soc-tag">
                      <TelegramIcon size={32} />
                    </div>
                  </TelegramShareButton>
                </div>
              </div>
            </div>

            {/* <!---------------------- right side end-------------------------------> */}
            <div className="blog-side">
              <div className="blog-txt-container">
                <div className="blog-txt">
                  <p className="raleway-grey-14">
                    <div
                      dangerouslySetInnerHTML={{ __html: blog.description }}
                    ></div>
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <LatestBlog/> */}
        </div>
      </div>
    </>
  );
}

BlogDetails.layout = AppLayout;

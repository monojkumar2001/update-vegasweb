import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
  } from "react-icons/fa";
  import Link from "next/link";

const Footeritems = () => {
  return (
    <div className="footer cpb-6">
    <div className="footerborder"></div>
    <div className="container">
      <footer className="cpy-5">
        <div className="row g-4">
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <h5>NAVIGATE</h5>
            <ul className="nav flex-column algin-items-">
              <li className="nav-item mb-2">
                <Link href={"/"} className="nav-link p-0 text-muted">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href={"/about"} className="nav-link p-0 text-muted">
                  About Us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href={"/Contact"}
                  className="nav-link p-0 text-muted"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href={"/blog"} className="nav-link p-0 text-muted">
                  Blog
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href={"/portfolio"}
                  className="nav-link p-0 text-muted"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <h5>Services</h5>
            <ul className="nav flex-column algin-items-start">
              <li className="nav-item mb-2">
                <Link
                  href={"/graphic-design"}
                  className="nav-link p-0 text-muted"
                >
                  Graphics Design
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href={"/video-editing"}
                  className="nav-link p-0 text-muted"
                >
                  Video Editing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href={"/social-marketing"}
                  className="nav-link p-0 text-muted"
                >
                  Social Media Marketing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href={"/website-design"}
                  className="nav-link p-0 text-muted"
                >
                  Website Design
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link
                  href={"/web-development"}
                  className="nav-link p-0 text-muted"
                >
                  Web Development
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href={"/seo"} className="nav-link p-0 text-muted">
                  SEO
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <h5>Marketing Talent</h5>
            <ul className="nav flex-column algin-items-">
              <li className="nav-item mb-2">
                <Link
                  href={"/terms-conditions"}
                  className="nav-link p-0 text-muted"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href={"/privacy-policy"}
                  className="nav-link p-0 text-muted"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href={"/cookies-policy"}
                  className="nav-link p-0 text-muted"
                >
                  Cookies Policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href={"/refund-policy"}
                  className="nav-link p-0 text-muted"
                >
                  Refund Policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href={"/Contact"}
                  className="nav-link p-0 text-muted"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <h5>Follow Us</h5>
            <ul className="nav flex-column algin-items-">
              <li className="nav-item mb-2">
                <a href="https://www.facebook.com/vegaswebinc" target="_blank" className="nav-link p-0 text-muted">
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://twitter.com/vegaswebinc" target="_blank" className="nav-link p-0 text-muted">
                  Twitter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://www.instagram.com/vegaswebinc/" target="_blank" className="nav-link p-0 text-muted">
                Instagram
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" target="_blank" className="nav-link p-0 text-muted">
                 YouTube
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" target="_blank" className="nav-link p-0 text-muted">
                 Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    {/* <div className='footerborder'></div> */}
    <div className="container">
      <div className="d-flex row justify-content-between g-4 mb-5 align-items-center">
        <div className="col-lg-4 col-md-6 col-sm-6 footer-contact-area">
          <p>30N Gould Street</p>
          <p>Sheridan WY 82801</p>
          <p> +1 914-904-7834, United States</p>
          <p></p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 footer-contact-area mb-4">
          <ul className="list-unstyled d-flex footer_about_icons align-items-center justify-content-center" >
            <li className="ms-3">
              <a className="link-dark" href="https://www.facebook.com/vegaswebinc" target="_blank">
                <FaFacebookF />
              </a>
             
            </li>
            <li className="ms-3">
              <a className="link-dark"  href="https://twitter.com/vegaswebinc" target="_blank">
                <FaTwitter />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="https://www.instagram.com/vegaswebinc/" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#" target="_blank">
                <FaYoutube />
              </a>
            </li>
          </ul>
          <div className="text-center coperight" >
            <p>&copy; Vegas Web 2023</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footeritems
import React, { Component, useRef, useEffect, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";
import Applayout from "../component/Layout/Layout";
import Head from "next/head";
function Contract() {
  const [verified, setVerified] = useState(false);
  const { push } = useRouter();

  var today = new Date().toISOString().slice(0, -8);
  var date = new Date();
  date.setDate(date.getDate() + 7);
  var maxDate = date.toISOString().slice(0, -8);

  const [inputField, setInputField] = useState({
    do_not_fill: "",
    botSubmit: "",
    name: "",
    email: "",
    country: "",
    phone: "",
    subject: "",
    message: "",
    meeting: today,
    error_log: [],
  });
  const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const captchaRef = useRef(null);
  const onChangeRecapcha = () => {
    setVerified(false);
  };

  const allInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("do_not_fill", inputField.do_not_fill);
    formData.append("name", inputField.name);
    formData.append("email", inputField.email);
    formData.append("phone", inputField.phone);
    formData.append("country", inputField.country);
    formData.append("subject", inputField.subject);
    formData.append("message", inputField.message);
    formData.append("meeting", inputField.meeting);

    axios
      .post("api/second-contact", formData)
      // .post("http://127.0.0.1:8000/api/contact", formData)
      .then((res) => {
        if (res.data.status === 200) {
          alert(res.data.msg);
          setVerified(true);
          captchaRef.current.reset();
          setInputField({
            do_not_fill: "",
            botSubmit: "",
            name: "",
            email: "",
            country: "",
            phone: "",
            subject: "",
            message: "",
            meeting: today,
            error_log: [],
          });
          // push("/thankYou");
        } else if (res.data.status == 203) {
          setInputField({
            ...inputField,
            botSubmit: res.data.data,
          });
        } else {
          setInputField({
            ...inputField,
            error_log: res.data.error,
          });
          console.log(res.data.error);
        }
      });
  };
  // ======================GET ALL CATEGORY ==============
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get("api/country")
      // axios.get('http://127.0.0.1:8000/api/country')
      .then((res) => setCountry(res.data.data));
  }, []);

  return (
    <>
     <Head>
        <title>
        Contact VegasWeb |  Reach Out to Our Expert Team for Exceptional Web Solutions
        </title>
        <meta property="og:site_name" content="VEGAS WEB"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://vegasweb.co/Contact" />
        <link rel="canonical" href="https://vegasweb.co/Contact" />
        <meta
          name="description"
          content="Contact VegasWeb for top-notch services tailored to your needs. Explore our comprehensive range of web development, design, and digital marketing solutions today!"
        ></meta>
        <meta
          name="og:description"
          content="Contact VegasWeb for top-notch services tailored to your needs. Explore our comprehensive range of web development, design, and digital marketing solutions today!"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Contact VegasWeb |  Reach Out to Our Expert Team for Exceptional Web Solutions"
        />
        <meta property="og:image" content="Images/meta-img/contact-us.jpg" />
        <meta property="image" content="Images/meta-img/contact-us.jpg" />
        <meta name="keywords" content=""></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
    <section>
      <div className="contact-area cpb-6 cpt-6">
        <div className="container">
          <div className="section-title cpb-7">
            <h2 className="sec-title">CONNECT WITH US</h2>
            <p className="sec-des">
              We'd love to hear more about your project . Schedule a call with us right now to get in touch. At Vegas web, we always respect your ideas and privacy and never disclose information about you or specifics of your projects to anyone. Your protection is our main concern.
            </p>
          </div>

          <div className="row">
            {inputField.botSubmit != "" ? (
              <div
                style={{
                  color: "white",
                  backgroundColor: "red",
                  textAlign: "center",
                  padding: "5px",
                  fontWeight: "Bold",
                  margin: "5px",
                }}
              >
                {inputField.botSubmit}
              </div>
            ) : (
              ""
            )}

            <div className="request-form">
              <form onSubmit={allInfoSubmit}>
                <input
                  type="hidden"
                  onChange={inputsHandler}
                  value={inputField.do_not_fill}
                  name="do_not_fill"
                  placeholder="do_not_fill"
                />

                <div className="form-group-2">
                  <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <div className="input-box">
                      <input
                        type="text"
                        onChange={inputsHandler}
                        value={inputField.name}
                        name="name"
                        className="form-control"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <small style={{ color: "red" }}>
                      {inputField.error_log.name}
                    </small>
                  </div>
                  <div className="input-group">
                    <label htmlFor="name">Your E-mail :</label>
                    <div className="input-box">
                      <input
                        type="email"
                        onChange={inputsHandler}
                        value={inputField.email}
                        name="email"
                        className="form-control"
                        placeholder="YourEmail@domain.com"
                      />
                    </div>
                    <small style={{ color: "red" }}>
                      {inputField.error_log.email}
                    </small>
                  </div>
                </div>

                <div className="form-group-2">
                  <div className="input-group">
                    <label htmlFor="country">Country</label>
                    <div className="input-box">
                      <select
                        name="country"
                        onChange={inputsHandler}
                        value={inputField.country}
                        className="form-control input-select"
                      >
                        <option value="">Select Country</option>
                        {country.map((country) => (
                          <option value={country.code} key={country.id}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <small style={{ color: "red" }}>
                      {inputField.error_log.country}
                    </small>
                  </div>

                  <div className="input-group">
                    <label htmlFor="phone-number">Phone Number:</label>
                    <div className="input-box">
                      <input
                        type="text"
                        onChange={inputsHandler}
                        value={inputField.phone}
                        name="phone"
                        placeholder="+1234567890"
                        className="form-control with-select"
                      />
                    </div>
                    <small style={{ color: "red" }}>
                      {inputField.error_log.phone}
                    </small>
                  </div>
                </div>

                <div className="form-group-2">
                  <div className="input-group">
                    <label htmlFor="subject">Subject :</label>
                    <div className="input-box">
                      <input
                        type="text"
                        onChange={inputsHandler}
                        value={inputField.subject}
                        name="subject"
                        placeholder="Subject"
                        className="form-control with-select"
                      />
                    </div>
                    <small style={{ color: "red" }}>
                      {inputField.error_log.subject}
                    </small>
                  </div>
                  <div className="input-group">
                    <label htmlFor="subject">Schedule A Meeting : (Schedule should be in Europe/London time)</label>
                    <div className="input-box">
                      <input
                        type="datetime-local"
                        onChange={inputsHandler}
                        value={inputField.meeting}
                        name="meeting"
                        placeholder="meeting"
                        className="form-control"
                        min={today}
                        max={maxDate}
                      />
                    </div>
                    <small style={{ color: "red" }}>
                      {inputField.error_log.meeting}
                    </small>
                  </div>
                </div>
                <div className="form-group " style={{ marginBottom: "30px" }}>
                    <label htmlFor="message">Consult :</label>
                    <div className="input-box">
                      <textarea
                        onChange={inputsHandler}
                        value={inputField.message}
                        name="message"
                        className="form-control"
                        rows="10"
                      ></textarea>
                    <small style={{ color: "red" }}>
                      {inputField.error_log.message}
                    </small>
                  </div>
                </div>
                {/* localjost */}
                {/* <ReCAPTCHA
                    sitekey="6LeZXu4kAAAAAGFzu6tlXEQpi68T1C5xX-m_HKAn"
                    onChange={onChangeRecapcha} ref={captchaRef}
                  /> */}
                {/* live server */}
                <ReCAPTCHA
                  sitekey="6LfliKsmAAAAAExUMeYHCBKgwPMaEBMy9O5Lk0Lb"
                  onChange={onChangeRecapcha}
                  ref={captchaRef}
                />

                <div className="form-group mt-3">
                  <button
                    className="custom-btn contect-button"
                    type="submit"
                    style={
                      verified
                        ? { color: "#837c7c", background: "#7470706b" }
                        : { color: "white", background: "#6E58EB" }
                    }
                    disabled={verified}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
Contract.Layout = Applayout;
export default Contract;

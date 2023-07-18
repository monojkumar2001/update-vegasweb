import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";

const Registration = () => {
  const [loading, setLoading] = useState(true);

  var today = new Date();
  today.setHours(today.getHours() - 1);
  var minDate = today.toISOString().slice(0, -8);
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
    social: "",
    category_id: "",
    subcategory_id: "",
    message: "",
    meeting: minDate,
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
    formData.append("social", inputField.social);
    formData.append("category_id", inputField.category_id);
    formData.append("subcategory_id", inputField.subcategory_id);
    formData.append("message", inputField.message);
    formData.append("meeting", inputField.meeting);

    axios
      // .post("api/contact", formData)
      .post("http://127.0.0.1:8000/api/contact", formData)
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
            social: "",
            category_id: "",
            subcategory_id: "",
            message: "",
            meeting: minDate,
            error_log: [],
          });
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
        }
      });
  };
  // ======================GET ALL CATEGORY ==============
  const [category, setCategory] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get("api/category")
      // axios.get('http://127.0.0.1:8000/api/category')
      .then((res) => setCategory(res.data.data));
    axios
      .get("api/country")
      // axios.get('http://127.0.0.1:8000/api/country')
      .then((res) => setCountry(res.data.data));
    setLoading(false);
  }, []);

  // ====================SUB CATEGORY ================
  const [subCategory, setSubCategory] = useState([]);
  const [verified, setVerified] = useState(false);

  const handleCategoryInput = (e) => {
    const cid = e.target.value;
    if (cid) {
      axios
        .get(`api/sub-category/${cid}`)
        // axios.get(`http://127.0.0.1:8000/api/getsubcategory/${cid}`)
        .then((res) => setSubCategory(res.data.data));
      setInputField({
        ...inputField,
        [e.target.name]: e.target.value,
      });
    } else {
      setInputField({
        ...inputField,
        [e.target.name]: e.target.value,
      });
    }
  };

  if (loading) {
    return "";
  }

  return (
    <>
      <div className="registration cpy-8">
        <div className="container">
          <div className="registration_box row d-flex align-items-center g-4">
            <div className=" registration_left col-xl-7 col-lg-7 col-md-12 "    data-aos="fade-up"
            data-aos-duration="2000">
              <div className="registration_title">
                <h1>With Vegas Web You Get:</h1>
              </div>
              <div className="registration_disc">
                <div className="registration-items">
                  <div className="registration-item-list">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7L7.5 12.5L18 2"
                        stroke="#04AA33"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <p>
                      A "<span>DREAM TEAM</span>" including world's best
                      designers , devlopers and marketing experts (that none of
                      your competitors can steal from you)
                    </p>
                  </div>
                  <div className="registration-item-list">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7L7.5 12.5L18 2"
                        stroke="#04AA33"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <p>
                      A "<span>SIMPLIFIED HIRING PROCESS</span>" Always be aware
                      of the time required for your project. Never wait more
                      than 48 hours for results.
                    </p>
                  </div>
                  <div className="registration-item-list">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7L7.5 12.5L18 2"
                        stroke="#04AA33"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <p>
                      {" "}
                      "<span>Easy store, share and collaboration</span>" Keep
                      your brand's assets up to date on Vegas Web so that our
                      team can stick to your aesthetic in design files shared
                      with stakeholders and your team.
                    </p>
                  </div>
                  <div className="registration-item-list">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7L7.5 12.5L18 2"
                        stroke="#04AA33"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <p>
                      {" "}
                      "<span>Easy-to-use dashboards</span>" With our Point &
                      Click tool, changes may be made to your project
                      immediately with only a few click.
                    </p>
                  </div>
                </div>
              </div>
              <div className="registration_icons">
                <div className="row text-center g-5 d-flex align-items-center justfiy-content-center">
                  <div className="col-6 col-lg-4 col-md-4 col-sm-6">
                    <Image width={198} height={67} src="/Images/logo_section/1.png" alt="vegas web" />
                  </div>
                  <div className="col-6 col-lg-4 col-md-4 col-sm-6">
                    <Image width={178} height={54} src="/Images/logo_section/2.png" alt="vegas web" />
                  </div>
                  <div className="col-6 col-lg-4 col-md-4 col-sm-6">
                    <Image width={179} height={36} src="/Images/logo_section/3.png" alt="vegas web" />
                  </div>
                  <div className="col-6 col-lg-4 col-md-4 col-sm-6">
                    <Image width={202} height={105} src="/Images/logo_section/4.png" alt="vegas web" />
                  </div>
                  <div className="col-6 col-lg-4 col-md-4 col-sm-6">
                    <Image width={122} height={64} src="/Images/logo_section/5.png" alt="vegas web" />
                  </div>
                  <div className="col-6 col-lg-4 col-md-4 col-sm-6">
                    <Image width={216} height={47} src="/Images/logo_section/6.png" alt="vegas web" />
                  </div>
                </div>
              </div>
            </div>
            <div className="registration_right col-xl-5 col-lg-5 col-md-12 "    data-aos="fade-up"
            data-aos-duration="3000">
              {inputField.botSubmit != "" ||
              inputField.botSubmit == "undefined" ? (
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
              <div className="registration_right_box">
                <form onSubmit={allInfoSubmit}>
                  <div className="form-email " hidden>
                    <label htmlFor="">Don not fill</label>
                    <div className="form-email ">
                      <input
                        type="hidden"
                        onChange={inputsHandler}
                        value={inputField.do_not_fill}
                        name="do_not_fill"
                        placeholder="do_not_fill"
                      />
                    </div>
                  </div>

                  <div className="form-email ">
                    <label htmlFor="">Your Full Name</label>
                    <div className="form-email ">
                      <input
                        type="text"
                        onChange={inputsHandler}
                        value={inputField.name}
                        name="name"
                        placeholder="E.g . Buzz"
                      />
                      <small style={{ color: "red" }}>
                        {inputField.error_log.name}
                      </small>
                    </div>
                  </div>
                  <div className="form-email ">
                    <label htmlFor="">Email</label>
                    <div className="form-email ">
                      <input
                        type="text"
                        name="email"
                        onChange={inputsHandler}
                        value={inputField.email}
                        placeholder="E.g . buzz@nasa.gov"
                      />
                      <small style={{ color: "red" }}>
                        {inputField.error_log.email}
                      </small>
                    </div>
                  </div>
                  <div className="form-email ">
                    <label htmlFor="country">Country</label>
                    <div className="select-form">
                      <select
                        name="country"
                        onChange={inputsHandler}
                        value={inputField.country}
                      >
                        <option value="">Select Country</option>
                        {country.map((country, index) => (
                          <option value={country.code} key={index}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      <small style={{ color: "red" }}>
                        {inputField.error_log.country}
                      </small>
                    </div>
                  </div>
                  <div className="form-email ">
                    <label htmlFor="">Phone Number</label>
                    <div className="form-email ">
                      <input
                        type="number"
                        name="phone"
                        onChange={inputsHandler}
                        value={inputField.phone}
                        placeholder="E.g 234 5678 9"
                      />
                      <small style={{ color: "red" }}>
                        {inputField.error_log.phone}
                      </small>
                    </div>
                  </div>

                  <div className="form-email ">
                    <label htmlFor="social">WhatsApp/Discord/Skype :</label>
                    <div className="form-email ">
                      <input
                        type="text"
                        onChange={inputsHandler}
                        value={inputField.social}
                        name="social"
                        placeholder="Social Account"
                      />
                      <small style={{ color: "red" }}>
                        {inputField.error_log.social}
                      </small>
                    </div>
                  </div>

                  <div className="form-email ">
                    <label htmlFor="">
                      Schedule A Meeting (Schedule should be in Europe/London
                      time)
                    </label>
                    <div className="form-email ">
                      <input
                        type="datetime-local"
                        name="meeting"
                        onChange={inputsHandler}
                        value={inputField.meeting}
                        placeholder="meeting"
                        min={minDate}
                        max={maxDate}
                      />
                      <small style={{ color: "red" }}>
                        {inputField.error_log.meeting}
                      </small>
                    </div>
                  </div>

                  <div className="form-email ">
                    <label htmlFor="category_id">Category :</label>
                    <div className="select-form">
                      <select
                        name="category_id"
                        onChange={handleCategoryInput}
                        value={inputField.category_id}
                        aria-invalid="false"
                      >
                        <option value="">Select Category</option>
                        {category.map((category, index) => (
                          <option value={category.id} key={index}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <small style={{ color: "red" }}>
                      {inputField.error_log.category_id}
                    </small>
                  </div>

                  {subCategory.length > 0 && (
                    <div className="form-email ">
                      <label htmlFor="subcategory_id">Sub Category :</label>
                      <div className="select-form">
                        <select
                          name="subcategory_id"
                          onChange={inputsHandler}
                          value={inputField.subcategory_id}
                          className="form-control input-select"
                          aria-invalid="false"
                        >
                          <option value="">Select Sub Category</option>
                          {subCategory.map((subcat, index) => (
                            <option value={subcat.id} key={index}>
                              {subcat.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <small style={{ color: "red" }}>
                        {inputField.error_log.subcategory_id}
                      </small>
                    </div>
                  )}
                  <div className="form-email ">
                    <label htmlFor="message">Consult :</label>
                    <div className="form-email ">
                      <textarea
                        name="message"
                        onChange={inputsHandler}
                        value={inputField.message}
                        cols="30"
                        rows="4"
                        className="form-control mb-3"
                      ></textarea>
                    </div>
                    <small style={{ color: "red" }}>
                      {inputField.error_log.message}
                    </small>
                  </div>
                  {/* SITE key v2: 6LeZXu4kAAAAAGFzu6tlXEQpi68T1C5xX-m_HKAn
                 secret key v2: 6LeZXu4kAAAAALzPXUheMDOAk-ZPNtL62blK_nXN
                 SITE key v3: 6LfDZO4kAAAAAIZ7ioPuegaFKbqxVpxX9NvCVitB
                 secret key v3: 6LfDZO4kAAAAAKBVBtn8IbrlrA9gW30bhgRC6Xy6 */}

                  <div
                    className="captcha"
                    style={{ transform: "scale(0.85)", transformOrigin: "0 0" }}
                  >
                    <ReCAPTCHA
                      sitekey="6LfliKsmAAAAAExUMeYHCBKgwPMaEBMy9O5Lk0Lb"
                      onChange={onChangeRecapcha}
                      ref={captchaRef}
                    />
                  </div>

                  {/* <p>
                  We need your phone number for the demo. We'll never use it for
                  any other purposes.
                </p> */}
                  <div className="form-email ">
                    <input
                      style={
                        verified
                          ? { color: "#837c7c", background: "#7470706b" }
                          : {
                              color: "white",
                              background: "#FD5444",
                              cursor: "pointer",
                            }
                      }
                      className="submit-btn"
                      type="submit"
                      value="Let’s Talk"
                      disabled={verified}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;

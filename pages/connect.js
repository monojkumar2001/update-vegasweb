import React, { useState, useEffect } from "react";
import AppLayout from "../component/Layout/Layout";
import axios from "axios";
import Head from "next/head";
import Firstwidget from "../component/inner/connect/FirstStepWithdraw";
import Secondwidget from "../component/inner/connect/SecondStepWithdraw";
import Thirdwidget from "../component/inner/connect/ThreeStepWithdraw";
import Fourthwidget from "../component/inner/connect/FourStepWithdraw";


const Connect = () => {

  const [loading, setLoading] = useState(true);
  const [randomNumber, setRandomNumber] = useState(Math.floor((Math.random() * 100000) + 1));

  var today = new Date().toISOString().slice(0, -8);
  var date = new Date();
  date.setDate(date.getDate() + 7);
  var maxDate = date.toISOString().slice(0, -8);

  // ======================GET ALL CATEGORY ==============
  const [category, setCategory] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get('api/category')
    // axios.get('http://127.0.0.1:8000/api/category')
    .then(res => 
    setCategory(res.data.data));
    axios.get('api/country')
    // axios.get('http://127.0.0.1:8000/api/country')
    .then(res => 
      setCountry(res.data.data));
      setLoading(false);
  }, []);

  

  // ====================SUB CATEGORY ================
  const [subCategory, setSubCategory] = useState([]);

  const handleCategoryInput = (e) => {
    const cid = e.target.value;
      if(cid){
        axios.get(`api/sub-category/${cid}`)
        // axios.get(`http://127.0.0.1:8000/api/sub-category/${cid}`)
        .then(res => 
          setSubCategory(res.data.data));
          setInputField( {
            ...inputField,
            [e.target.name] : e.target.value
          })
      }else{
        setInputField( {
          ...inputField,
          [e.target.name] : e.target.value
        })
      }
  }



  const [inputField, setInputField] = useState({
    first_name : "",
    last_name : "",
    email: "",
    phone: "",
    aboutUs: "",
    country: "",
    social: "",
    terms : [],

    category: "",
    subcategory: "",
    market: "",
    message: "",

    meeting : today,

    page1 : "1",
    page2 : "2",
    page3 : "3",
    error_log : []
  });



  // States
  const [activeStep, setActiveStep] = useState(1);

  const inputsHandler = (e) => {
    e.persist();

    if(e.target.type == 'checkbox'){
      
      let jone = inputField[e.target.name];
      if(e.target.checked == true){
        setInputField({
          ...inputField,
          [e.target.name]: [...jone,e.target.value ]
        });

      }else{
        setInputField({
          ...inputField,
          [e.target.name]: jone.filter((item) => item !== e.target.value)
        });
      }
      }else{
        setInputField({
          ...inputField,
          [e.target.name]: e.target.value,
        });
      }
    
  };

  const stateChangeOne = () => {
    setActiveStep(1)
  }
  const stateChangeTwo = () => {
    setActiveStep(2)
  }


  // Submits
  const brandInfoSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('randomNumber',randomNumber)
    formData.append('firstName',inputField.first_name)
    formData.append('lastName',inputField.last_name)
    formData.append('email',inputField.email)
    formData.append('phone',inputField.phone)
    formData.append('aboutUs',inputField.aboutUs)
    formData.append('page',inputField.page1)
    formData.append('terms',inputField.terms)
    formData.append("country", inputField.country);
    formData.append("social", inputField.social);

    axios
      .post("api/connect", formData)
      // .post("http://127.0.0.1:8000/api/connect", formData)
      .then(res => {
        if(res.data.status == 200){
          setActiveStep(2);
        }else{
          setInputField( {
            ...inputField,
            error_log : res.data.error
          })
        }
      })
  };

  const websiteInfoSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('randomNumber',randomNumber)
    formData.append('category',inputField.category)
    formData.append('subcategory',inputField.subcategory)
    formData.append('market',inputField.market)
    formData.append('message',inputField.message)
    formData.append('page',inputField.page2)

    axios
      .post("api/connect", formData)
      // .post("http://127.0.0.1:8000/api/connect", formData)
      .then(res => {
        if(res.data.status == 200){
          setActiveStep(3);
        }else{
          setInputField( {
            ...inputField,
            error_log : res.data.error,
          })
        }
      })
  };

  const smartContractInfoSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('randomNumber',randomNumber)
    formData.append('meeting',inputField.meeting)
    formData.append('page',inputField.page3)

    axios
      .post("api/connect", formData)
      // .post("http://127.0.0.1:8000/api/connect", formData)
      .then(res => {
        if(res.data.status == 200){
          alert('Your Information Submitted successfully. We will Contact with You Very Soon.');
          setActiveStep(4);
        }else{
          setInputField( {
            ...inputField,
            error_log : res.data.error
          })
        }
      })

  };


  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>
      <React.Fragment>
        <div className="connect-wrapper">
          <div className="container">
            <div className="connect-from-wrapper">
              {

                activeStep == 1 ?
                <Firstwidget brandInfoSubmit={brandInfoSubmit} randomNumber={randomNumber} inputsHandler={inputsHandler} inputField={inputField} country={country} activeStep={activeStep}/>
                :
                ''
              }

              {
                activeStep == 2 ?
                <Secondwidget websiteInfoSubmit={websiteInfoSubmit} randomNumber={randomNumber} inputsHandler={inputsHandler} inputField={inputField} category={category} subCategory={subCategory} activeStep={activeStep} handleCategoryInput={handleCategoryInput} stateChangeOne={stateChangeOne}/>
                :
                ''
              }
              {
                activeStep == 3 ?
                <Thirdwidget smartContractInfoSubmit={smartContractInfoSubmit} randomNumber={randomNumber} inputsHandler={inputsHandler} inputField={inputField} activeStep={activeStep} today={today} maxDate={maxDate} stateChangeTwo = {stateChangeTwo}/>
                :
                ''
              }
              {
                activeStep == 4 ?
                <Fourthwidget activeStep={activeStep}/>
                :
                ''
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

Connect.Layout = AppLayout;
export default Connect;

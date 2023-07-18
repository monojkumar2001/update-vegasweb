import React,{useState} from "react";
import { TbBrandTelegram } from "react-icons/tb";
import axios from "axios";
import Image from 'next/image';

const NewsLetter = () => {

    const [inputField, setInputField] = useState({
        name: "",
        email: "",
        error_log : []
      });
    
      const inputsHandler = (e) => {
        e.persist();
        setInputField({
          ...inputField,
          [e.target.name]: e.target.value,
        });
      };
    
      const allInfoSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", inputField.name);
        formData.append("email", inputField.email);
        axios
          .post("api/subscriber", formData)
          // .post("http://127.0.0.1:8000/api/subscriber", formData)
          .then((res) => {
            if (res.data.status === 200) {
              alert(res.data.msg);
              setInputField({
                name: "",
                email: "",
                error_log : []
              });
            }else {
              setInputField( {
                ...inputField,
                error_log : res.data.data
              })
            }
          });
      };

      
  return (

        <div className="newsletters cpt-7"    data-aos="fade-up"
        data-aos-duration="2000">
                <div className=" newsletters_box">
                    <div className="newsletters_box_left">
                        <div className="newsletters_title">
                            <h1>Newsletters</h1>
                            <h2>Get Updates About Our Latest Service Trends</h2>
                        </div>
                        <form onSubmit={allInfoSubmit} className="newsletters_from">
                            <div className="newsletters_name">
                                <input  
                                type="text"
                                onChange={inputsHandler}
                                value={inputField.name}
                                name="name"
                                placeholder="Your Name"
                                required
                                className="newsletters_name-input"
                                />
                                <small style={{ color:'red' }}>{inputField.error_log.email}</small>
                            </div>
                            <div className="newsletters_email_address d-flex justify-content-between align-items-center text-center">
                                <input 
                                type="email"
                                required
                                name="email"
                                onChange={inputsHandler}
                                value={inputField.email}
                                placeholder="Enter Email Address"
                                />
                                <button className="custom-btn"><TbBrandTelegram/> Subscribe </button>
                            </div>
                        </form>
                    </div>
                    <div className="newsletters_box_right">
                    <Image width={489} height={669} src="/Images/Hero_section/newsletter.png" alt="vages Web" />
                    </div>
                </div>
        </div>

  )
}

export default NewsLetter
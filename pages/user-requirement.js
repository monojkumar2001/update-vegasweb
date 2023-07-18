import React, { Component, useRef, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Applayout from "../component/Layout/Layout";
import RequirementForm from "../component/requirement/RequirementForm";


function Requirement() {
  const { push } = useRouter();

  const [question, setQuestion] = useState([])
  const [rowsInput, setRowsInput] = useState({
    answer0: '', answer1: '', answer2: '', answer3: '',answer4: '',answer5: '',answer6: '',
    answer7: '', answer8: '', answer9: '', answer10: '',answer11: '',answer12: '',answer13: '', answer14: '',answer15: '', answer16: '', answer17: '',answer18: '',answer19: '',answer20: '',
    answer21: '', answer22: '', answer23: '', answer24: '',answer25: '',answer26: '',answer27: '',
    answer28: '', answer29: '', answer30: '', answer31: '',answer32: '',answer33: '',answer34: '',
    answer35: '', answer36: '', answer37: '', answer38: '',answer39: '',answer40: '',answer41: '',
    answer42: '', answer43: '', answer44: '', answer45: '',answer46: '',answer47: '',answer48: '',
    answer49: '', answer50: '',
  });

  useEffect(() => {
    axios.get('api/question').then((res) => {
        setQuestion(res.data.data)
        console.log(res.data.data)
    });
  }, [])
  const handleChange = (index,evnt) => {
    const rowsInput = [...question];
    setRowsInput({
      ...rowsInput,
      [evnt.target.name] : evnt.target.value
    })
    if(evnt.target.type == 'file'){
      rowsInput[index][evnt.target.name] = evnt.target.files[0];
      console.log(evnt.target.files[0]);
    }else{
      rowsInput[index][evnt.target.name] = evnt.target.value;
    }
    console.log(rowsInput);
  }

  const allInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('items',JSON.stringify(rowsInput));

    axios
      .post("api/answer", formData)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.data);
          // push("/thankYou");
        } else {
          setInputField({
            ...inputField,
            error_log: res.data.error,
          });
        }
      });
  };
 

  return (
    <section>
      <div className="contact-area cpb-6 cpt-6">
        <div className="container">
          <div className="section-title cpb-7">
            <h2 className="sec-title">Requirement</h2>
            <p className="sec-des">
              We'd love to hear more about your project . Schedule a call with us right now to get in touch. At Vegas web, we always respect your ideas and privacy and never disclose information about you or specifics of your projects to anyone. Your protection is our main concern.
            </p>
          </div>

          <div className="row">
            {
              question.length > 0 ?
              <RequirementForm allInfoSubmit={allInfoSubmit} rowsInput={rowsInput} question={question} handleChange={handleChange}/>
              :
              ''
            }
            
          </div>
        </div>
      </div>
    </section>
  );
}
Requirement.Layout = Applayout;
export default Requirement;

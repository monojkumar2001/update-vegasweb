import React from 'react'

const RequirementForm = ({rowsInput,question,allInfoSubmit,handleChange}) => {
  return (
    <div className="request-form">
              <form encType='multipart/form-data' onSubmit={allInfoSubmit}>

                {
                    question.map((item,i) => {
                        let val="answer" + i
                    return (
                        <div className="form-group " style={{ marginBottom: "30px" }} key={i}>
                            <label htmlFor="message" className="text-dark">{item.question}</label>
                            <div className="input-box">
                                {
                                    item.type == 'text' ?
                                        <input
                                        type="text"
                                        onChange={(evnt)=>(handleChange(i,evnt))}
                                        value={rowsInput.val}
                                        name={val}
                                        className="form-control"
                                    /> : item.type == 'file' ?
                                    <input
                                        type="file"
                                        onChange={(evnt)=>(handleChange(i,evnt))}
                                        value={""}
                                        name={val}
                                        className="form-control"
                                    /> :
                                    <select
                                        name={val}
                                        onChange={(evnt)=>(handleChange(i,evnt))}
                                        value={rowsInput.val}
                                        className="form-control input-select"
                                    >
                                        <option value="">Select Country</option>
                                        {item.items.map((res) => (
                                        <option value={res.item} key={res.id}>
                                            {res.item}
                                        </option>
                                        ))}
                                    </select>
                                }
                            </div>
                        </div>
                    )
                        

                    })
                }

                <div className="form-group mt-3">
                  <button
                    className="custom-btn contect-button"
                    type="submit">
                    Send Requirement
                  </button>
                </div>
              </form>
            </div>
  )
}

export default RequirementForm
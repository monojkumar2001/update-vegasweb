import React from "react";
const ThreeStepWithdraw = ({smartContractInfoSubmit,inputsHandler,activeStep,randomNumber,inputField,today,maxDate,stateChangeTwo}) => {
  return (
    <>
      <form onSubmit={smartContractInfoSubmit}
                  className={
                    activeStep === 3
                      ? "connect-step step  active"
                      : "connect-step step "
                  }>
        <h2>Schedule a meeting with our expert</h2>

        <input type="hidden" defaultValue={randomNumber} name="randomNumber" />
        <input type="hidden" defaultValue={inputField.page3} name="page"  />

        <div className="input-group-items d-flex flex-column gap-4">
          <div className="input-group">
            <label>Select Date and Time</label>
            <input
                      type="datetime-local"
                      name="meeting"
                      onChange={inputsHandler}
                      value={inputField.meeting}
                      min={today}
                      max={maxDate}
                      required
                    />
          </div>

          <div className="btns">
          <button
            type="button"
            className="btn-hero-1"
            onClick={stateChangeTwo}
          >
            Previous
          </button>
            <button className="btn-hero-1">
              <span>Next</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ThreeStepWithdraw;

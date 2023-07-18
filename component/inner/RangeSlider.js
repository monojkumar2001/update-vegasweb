import React,{useState} from "react";

const RangeSlider = () => {

    const [rangeval, setRangeval] = useState(null);
  
    return (
      <div>
        <input type="range" className="custom-range" min="1000" max="100000" step="5000"
         onChange={(event) => setRangeval(event.target.value)} />
        <h4>The range value is {rangeval}</h4>
      </div>
    );
  };
  
  export default RangeSlider;
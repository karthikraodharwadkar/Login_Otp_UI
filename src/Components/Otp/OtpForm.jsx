import React, { useEffect, useRef, useState } from "react";
import "./OtpForm.scss";

export default function OtpForm({ otpLength }) {
  let array = new Array(otpLength).fill("");

  const [otpValue, setOtpValue] = useState(array);
  const inputRef = useRef([]);

  const handleInputOtpChange = (event, index) => {
    const inputValue = event.target.value;
    const lastValue = inputValue[inputValue.length - 1];

    const newOtp = [...otpValue];
    newOtp[index] = lastValue;
    setOtpValue(newOtp);

    if (inputValue && index < otpLength - 1  && inputRef.current[index+1]) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event,index) => {
    const btnClicked = event.key;
    if (btnClicked === "Backspace" && index>0 && inputRef.current[index-1] && !otpValue[index]) {
        inputRef.current[index-1].focus();
    }

  };

  const handleClick = (index) =>{
    console.log()
    inputRef.current[index].setSelectionRange(1,1)
  }

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  return (
    <div className="otp-form">
      {otpValue.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              ref={(element) => (inputRef.current[index] = element)}
              value={item}
              onKeyDown={(e) => handleKeyDown(e,index)}
              onChange={(event) => handleInputOtpChange(event, index)}
              onClick={()=>handleClick(index)}
              className="otp-input"
            />
          </div>
        );
      })}
    </div>
  );
}

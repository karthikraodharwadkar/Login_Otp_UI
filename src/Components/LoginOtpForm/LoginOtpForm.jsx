import React, { useState } from "react";
import OtpForm from "../Otp/OtpForm";
import "./LoginOtpForm.scss"

export default function LoginOtpForm() {
  const [mobileNumber, setMobileNumber] = useState("");

  const [otp, setOtp] = useState(false);

  const otpLength = 4;

  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
    setMobileNumber(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let regerx = new RegExp("[^0-9]");

    if (mobileNumber.length < 10 || mobileNumber.length > 10) {
      alert("Please Enter Valid Mobile Number");
      return;
    }

    if (mobileNumber.length === 10 && regerx) {
      setOtp(true);
    }
  };

  return (
    <div className="login-otp">
      {!otp ? (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            placeholder="Enter Mobile Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <OtpForm otpLength={otpLength} />
        </>
      )}
    </div>
  );
}

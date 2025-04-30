import "./OtpModal.styles.css";

import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const handleSubmit = () => console.log("OTP submitted to API.");

export const OtpModal = ({ length = 4, onSubmit = handleSubmit }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const otpInputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (otpInputsRef.current[0]) {
      otpInputsRef.current[0].focus();
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (!value.trim().match(/^[0-9]/)) {
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = value[value.length - 1];
    setOtp(newOtp);
    if (index < length - 1) {
      otpInputsRef.current[index + 1].focus();
    }
    if (newOtp.join("").length === length) {
      onSubmit();
    }
  };

  const handleKeyDown = (
    { key }: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0) {
        otpInputsRef.current[index - 1].focus();
      }
    }
  };

  const handleClick = (index: number) => {
    otpInputsRef.current[index].setSelectionRange(1, 1);
  };

  return (
    <div className="card">
      <p>Please enter the {length} digits OTP you have received.</p>
      <div className="inputs">
        {otp.map((value, index) => (
          <input
            key={index}
            value={value}
            ref={(input) => {
              otpInputsRef.current[index] = input!;
            }}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onClick={() => handleClick(index)}
            className={`${otp[index].length ? "filled" : null}`}
          />
        ))}
      </div>
    </div>
  );
};

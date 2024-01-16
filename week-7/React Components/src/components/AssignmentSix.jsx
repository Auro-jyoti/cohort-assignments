import { useState } from "react";
const AssignmentSix = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const predefinedOtp = "123456";

  function handleInputChange(e) {
    const input = e.target.value;
    setInput(input);
  }
  function onPressBtn() {
    setIsValid(input === predefinedOtp);
  }
  return (
    <div>
      <input
        type="text"
        value={input}
        maxLength={predefinedOtp.length}
        onChange={handleInputChange}
      />
      <button onClick={onPressBtn}>Check</button>
      {isValid ? <p style={{ color: "green" }}>OTP is valid</p> : <p style={{color: "red"}}>Invalid Otp</p>}
      
    </div>
  );
};

export default AssignmentSix;

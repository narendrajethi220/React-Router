import React, { useState } from "react";

const FormValidation = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/;
  const handleName = (e) => {
    let name = e.target.value;
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const handleEmail = (e) => {
    let email = e.target.value;
    if (!email.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(e.target[0].value + " " + e.target[1].value);
  };

  return (
    <div>
      <h2 className="text-xl underline font-bold">Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter Name:</label>
        <input
          className="border-2 ml-2"
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          required
        ></input>
        <br></br>
        {nameError ? (
          <span className="text-red-500">Enter 2 or more Character</span>
        ) : (
          " "
        )}
        <br></br>
        <label>Enter Email</label>
        <input
          className="border-2 ml-2"
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          required
        ></input>
        <br></br>
        {emailError ? <span className="text-red-500">Invalid Email</span> : " "}
        <br></br>
        <button className="border-2 font-bold text-sm bg-blue-500 text-white p-1 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;

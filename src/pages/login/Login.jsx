import React from "react";
import "./login.css";

const Login = () => {
  const handleSubmit = (e) => {
    //
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login__header">
        <h1>Queue Registration</h1>
      </div>
      <div className="login__main">
        <input type="text" id="ssn" required placeholder="SSN" />
        <br />
        <br />
        <label htmlFor="services">Select your service:</label>
        <br />
        <select id="services" required>
          <option value="">Choose</option>
          <option value="Услуга 1">Service 1</option>
          <option value="Услуга 2">Service 2</option>
          <option value="Услуга 3">Service 3</option>
        </select>
        <br />
        <br />
      </div>

      <div className="login__footer">
        <button type="submit">Get your place</button>
      </div>
    </form>
  );
};

export default Login;

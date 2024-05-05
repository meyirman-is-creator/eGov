import React from "react";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const baseUrl = "http://172.20.10.2:8080";
  const [category, setCategory] = useState();
  const [iin, setIin] = useState();
  const navigate = useNavigate();

  const handleService = (event) => {
    setCategory(Number(event.target.value));
  };

  const handleIIN = (event) => {
    setIin(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userCredentials = {
      category_id: category,
      iin: iin,
    };

    try {
      console.log(userCredentials);
      await axios.post(`${baseUrl}/queue/`, userCredentials);
      navigate("/status", { state: iin });
    } catch (error) {
      console.log("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login__header">
        <h1>Очередь в ЦОН</h1>
      </div>
      <div className="login__main">
        <input
          type="text"
          id="ssn"
          required
          placeholder="ИИН"
          maxLength={12}
          onChange={handleIIN}
        />
        <br />
        <label htmlFor="services">Выберите сервис:</label>
        <select id="services" required onChange={handleService}>
          <option value="">Сервис</option>
          <option value="1">Service 1</option>
          <option value="2">Service 2</option>
          <option value="3">Service 3</option>
        </select>
        <br />
      </div>

      <div className="login__footer">
        <button type="submit">Получить свое место</button>
      </div>
    </form>
  );
};

export default Login;

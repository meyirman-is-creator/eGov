import React from "react";
import "./login.css";
import { useState } from "react";

const Login = () => {
  return (
    <form>
      <div className="login__header">
        <h1>Очередь в ЦОН</h1>
      </div>
      <div className="login__main">
        <input type="text" id="ssn" required placeholder="ИИН" maxLength={12} />
        <br />
        <label htmlFor="services">Выберите сервис:</label>
        <select id="services" required>
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

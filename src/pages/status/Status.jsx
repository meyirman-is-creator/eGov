import React from "react";
import "./status.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Status = () => {
  const location = useLocation();
  const baseUrl = "http://172.20.10.2:8080/";

  const receivedData = location.state;

  // try {
  //   const response = await axios.get(`${baseUrl}/status`)
  // }
  return (
    <div className="status">
      <div className="status__header">
        {/* Сюда добавить место окошка */}
        <h1>Окно №</h1>
      </div>
      <div className="status__main">
        <div className="left">
          <h1>25 человек</h1>
          <p>До вашей очереди</p>
        </div>
        <div className="mid"></div>
        <div className="right">
          <h1>25 минут</h1>
          <p>До вашей очереди</p>
        </div>
      </div>
      <div className="status__footer">
        <button>Проверить статус</button>
      </div>
    </div>
  );
};

export default Status;

import React from "react";
import "./status.css";

const Status = () => {
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

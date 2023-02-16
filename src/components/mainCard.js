import React from "react";

export default function MainCard() {
  return (
    <div className="MainCardContainer">
      <div className="mainCard">
        <img src="/imgs/Bitmap.png" alt="personImg" />
        <div className="report">
          <h6>Report for</h6>
          <h1>Best Sales</h1>
        </div>
      </div>
      <ul>
        <li>Daily</li>
        <li>Weekly</li>
        <li>Monthly</li>
      </ul>
    </div>
  );
}

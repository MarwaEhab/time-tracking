import React from "react";

export default function Card({ card, bgcolor }) {
  return (
    <div className="CardContainer" style={{ backgroundColor: bgcolor }}>
      <div className="card">
        <div className="flexDev">
          <h3>{card.category}</h3>
          <svg
            width="21"
            height="5"
            viewBox="0 0 21 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5ZM13 2.5C13 3.88071 11.8807 5 10.5 5C9.11929 5 8 3.88071 8 2.5C8 1.11929 9.11929 0 10.5 0C11.8807 0 13 1.11929 13 2.5ZM18.5 5C19.8807 5 21 3.88071 21 2.5C21 1.11929 19.8807 0 18.5 0C17.1193 0 16 1.11929 16 2.5C16 3.88071 17.1193 5 18.5 5Z"
              fill="#BBC0FF"
            />
          </svg>
        </div>
        <div className="details">
          <h1> {card.price}$</h1>
          <div className="flexDev">
            <p>{card.title}</p>
            <span>InStore {card.rating.count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

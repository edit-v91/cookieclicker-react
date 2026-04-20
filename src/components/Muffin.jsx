import React from "react";
import MuffinImg from "../assets/Vanilla-cupcake.png";

export default function Muffin({ onClick }) {
  return (
    <div className="muffinContainer">
      <button
        type="button"
        onClick={onClick}
        className="muffinButton"
        aria-label="Click the muffin"
      >
        <div className="muffinIcon">
            <img src={MuffinImg} alt="muffin" className="muffinImg"/>
        </div>
      </button>
    </div>
  );
}

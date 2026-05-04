import React from "react";
import MuffinImg from "../assets/Vanilla-cupcake.png";
import MuffinUpgradeImg from "../assets/Muffin-upgrade.png";

export default function Muffin({ onClick, counter }) {
	return (
		<div className="muffinContainer">
			<button
				type="button"
				onClick={onClick}
				className="muffinButton"
				aria-label="Click the muffin">
				<div className="muffinIcon">
					{counter < 1000 ? (
						<img src={MuffinImg} alt="muffin" className="muffinImg" />
					) : (
						<img src={MuffinUpgradeImg} alt="muffin" className="muffinImg" />
					)}
				</div>
			</button>
		</div>
	);
}

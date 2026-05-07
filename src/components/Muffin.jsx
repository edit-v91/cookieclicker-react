import React from "react";
import MuffinImg from "../assets/Vanilla-cupcake.png";
import MuffinUpgradeImg from "../assets/Muffin-upgrade.png";
import DonutImg from "../assets/Donut.png";

export default function Muffin({ onClick, counter, hasDonutSkin }) {
	return (
		<div className="muffinContainer">
			<button
				type="button"
				onClick={onClick}
				className="muffinButton"
				aria-label="Click the muffin">
				<div className="muffinIcon">
					{hasDonutSkin ? (
						<img src={DonutImg} alt="donut" className="muffinImg" />
					) : counter > 1000 && !hasDonutSkin ? (
						<img src={MuffinUpgradeImg} alt="muffin upgrade" className="muffinImg" />
					) : (
						<img src={MuffinImg} alt="muffin" className="muffinImg" />
					)}
				</div>
			</button>
		</div>
	);
}

import React from "react";
import MuffinImg from "../assets/Vanilla-cupcake.png";
import MuffinUpgradeImg from "../assets/Muffin-upgrade.png";
import DonutImg from "../assets/Donut.png";
import { useSkin } from "../contexts/SkinContext";

export default function Muffin({ onClick, counter }) {
	const { getDisplaySkin } = useSkin();
	const displaySkin = getDisplaySkin(counter);

	return (
		<div className="muffinContainer">
			<button
				type="button"
				onClick={onClick}
				className="muffinButton"
				aria-label="Click the muffin">
				<div className="muffinIcon">
					<img
						src={displaySkin.mainImage}
						alt={displaySkin.name}
						className="muffinImg"
					/>
				</div>
			</button>
		</div>
	);
}

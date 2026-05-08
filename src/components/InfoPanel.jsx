import { useSkin } from "../contexts/SkinContext";

export default function InfoPanel({ multiplier }) {
	const { activeSkinId } = useSkin();

	const itemName = activeSkinId === "donut" ? "donut" : "muffin";
	const coinRate = activeSkinId === "donut" ? 2 : 3;

	return (
		<aside className="infoPanel">
			<h2>Game Info</h2>
			<div className="infoPanelContent">
				<p>🥮 1 click = {multiplier} {itemName}</p>
				<p>⚡ Boosters multiply {itemName} gain</p>
				<p>🛒 {coinRate} {itemName}s = 1 coin</p>
				<p>🚀 Bigger boosts cost more {itemName}s</p>
			</div>
		</aside>
	);
}

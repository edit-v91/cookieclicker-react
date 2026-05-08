import { useSkin } from "../contexts/SkinContext";

export default function CounterDisplay({ counter, multiplier }) {
	const { activeSkinId } = useSkin();
	const itemName = activeSkinId === "donut" ? "donut(s)" : "muffin(s)";

	return (
		<div className="container">
			<div className="counterBox">
				<h3>
					{multiplier > 1
						? `Sugar rush x${multiplier}`
						: "No booster active"}
				</h3>
				<h2>{counter} {itemName}</h2>
			</div>
		</div>
	);
}

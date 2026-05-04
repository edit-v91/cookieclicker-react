export default function CounterDisplay({ counter, multiplier }) {
	return (
		<div className="container">
			<div className="boosterContainer">
				<h3>{multiplier}x booster active</h3>
			</div>
			<div className="counterContainer">
				<h2>{counter} muffin(s)</h2>
			</div>
		</div>
	);
}

export default function CounterDisplay({ counter, multiplier }) {
	return (
		<div className="container">
			<div className="counterBox">
				<h3>
					{multiplier > 1
						? `Sugar rush x${multiplier}`
						: "No booster active"}
				</h3>
				<h2>{counter} muffin(s)</h2>
			</div>
		</div>
	);
}

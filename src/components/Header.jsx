import { Link } from "react-router-dom";
import MuffinImg from "../assets/Vanilla-cupcake.png";
import MuffinUpgradeImg from "../assets/Muffin-upgrade.png";
import DonutImg from "../assets/Donut.png";

export default function Header({ counter, hasDonutSkin }) {
	return (
		<header className="header">
			<Link to="/" className="headerLink">
				{hasDonutSkin ? (
					<>
						<img src={DonutImg} alt="donut" className="navMuffin m1" />
						<img src={DonutImg} alt="donut" className="navMuffin m2" />
						<img src={DonutImg} alt="donut" className="navMuffin m3" />
						<img src={DonutImg} alt="donut" className="navMuffin m4" />
					</>
				) : counter > 1000 ? (
					<>
						<img className="navMuffin m1" src={MuffinUpgradeImg} alt="upgraded-muffin" />
						<img className="navMuffin m2" src={MuffinUpgradeImg} alt="upgraded-muffin" />
						<img className="navMuffin m3" src={MuffinUpgradeImg} alt="upgraded-muffin" />
						<img className="navMuffin m4" src={MuffinUpgradeImg} alt="upgraded-muffin" />
					</>
				) : (
					<>
						<img className="navMuffin m1" src={MuffinImg} alt="muffin" />
						<img className="navMuffin m2" src={MuffinImg} alt="muffin" />
						<img className="navMuffin m3" src={MuffinImg} alt="muffin" />
						<img className="navMuffin m4" src={MuffinImg} alt="muffin" />
					</>
				)}
				<h1>Welcome to the Muffin clicker</h1>
				<p>Have fun!</p>
			</Link>
		</header>
	);
}

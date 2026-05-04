import { Link } from "react-router-dom";
import MuffinImg from "../assets/Vanilla-cupcake.png";
import MuffinUpgradeImg from "../assets/Muffin-upgrade.png";

export default function Header({counter}) {
	return (
		<header className="header">
			<Link to="/" className="headerLink">
				{counter > 1000 ? (
					<>
						<img className="navMuffin m1" src={MuffinUpgradeImg} alt="" />
						<img className="navMuffin m2" src={MuffinUpgradeImg} alt="" />
						<img className="navMuffin m3" src={MuffinUpgradeImg} alt="" />
						<img className="navMuffin m4" src={MuffinUpgradeImg} alt="" />
					</>
				) : (
					<>
						<img className="navMuffin m1" src={MuffinImg} alt="" />
						<img className="navMuffin m2" src={MuffinImg} alt="" />
						<img className="navMuffin m3" src={MuffinImg} alt="" />
						<img className="navMuffin m4" src={MuffinImg} alt="" />
					</>
				)}
				<h1>Welcome to the Muffin clicker</h1>
				<p>Have fun!</p>
			</Link>
		</header>
	);
}

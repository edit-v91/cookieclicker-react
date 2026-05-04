import { Link } from "react-router-dom";
import MuffinImg from "../assets/Vanilla-cupcake.png";

export default function Header() {
	return (
		<header className="header">
			<img className="navMuffin m1" src={MuffinImg} alt="" />
			<img className="navMuffin m2" src={MuffinImg} alt="" />
			<img className="navMuffin m3" src={MuffinImg} alt="" />
			<img className="navMuffin m4" src={MuffinImg} alt="" />
			<Link to="/" className="headerLink">
				<h1>Welcome to the Muffin clicker</h1>
			</Link>
			<p>Have fun!</p>
		</header>
	);
}

import { Link } from "react-router-dom";
import { useSkin } from "../contexts/SkinContext";

export default function Header({ counter }) {
	const { getDisplaySkin } = useSkin();
	const displaySkin = getDisplaySkin(counter);
	
	return (
		<header className="header">
			<Link to="/" className="headerLink">
				<img
					src={displaySkin.mainImage}
					alt={displaySkin.name}
					className="navMuffin m1"
				/>
				<img
					src={displaySkin.mainImage}
					alt={displaySkin.name}
					className="navMuffin m2"
				/>
				<img
					src={displaySkin.mainImage}
					alt={displaySkin.name}
					className="navMuffin m3"
				/>
				<img
					src={displaySkin.mainImage}
					alt={displaySkin.name}
					className="navMuffin m4"
				/>
				<h1>Welcome to the Muffin clicker</h1>
				<p>Have fun!</p>
			</Link>
		</header>
	);
}

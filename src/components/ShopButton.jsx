import { useNavigate } from "react-router-dom";
import { useSkin } from "../contexts/SkinContext";

export default function ShopButton({ money, onBuy, counter }) {
	const navigate = useNavigate();
	const { getDisplaySkin } = useSkin();
	const displaySkin = getDisplaySkin(counter);

	return (
		<div className="shopContainer">
			<button
				type="button"
				onClick={onBuy}
				className="shopButton"
				disabled={money === 0}
				aria-label="Spend money to buy muffins">
				<span className="moneyCount">{money}</span>

				<div className="moneyIcon">
					<img src={displaySkin.coinImage} alt="coin" className="coinImg" />
				</div>
			</button>

			<button
				type="button"
				className="shopButton cartButton"
				onClick={() => navigate("/shop")}>
				<span className="moneyCount">Shop</span>

				<div className="moneyIcon">
					<img src={displaySkin.cartImage} alt="cart" className="coinImg" />
				</div>
			</button>
		</div>
	);
}

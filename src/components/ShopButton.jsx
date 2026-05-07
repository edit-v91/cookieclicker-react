import { useNavigate } from "react-router-dom";
import MoneyImg from "../assets/Cupcake-coin.png";
import CartImg from "../assets/Shoppingcart.png";
import DonutCoin from "../assets/Donut-coin.png";
import DonutCart from "../assets/Donut-cart.png";

export default function ShopButton({ money, onBuy, hasDonutSkin }) {
	const navigate = useNavigate();

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
					{hasDonutSkin ? (
						<img src={DonutCoin} alt="coin" className="coinImg" />
					) : (
						<img src={MoneyImg} alt="coin" className="coinImg" />
					)}
				</div>
			</button>
			<button
				type="button"
				className="shopButton cartButton"
				onClick={() => navigate("/shop")}>
				<span className="moneyCount">Shop</span>
				<div className="moneyIcon">
					{hasDonutSkin ? (
						<img src={DonutCart} alt="cart" className="coinImg" />
					) : (
						<img src={CartImg} alt="cart" className="coinImg" />
					)}
				</div>
			</button>
		</div>
	);
}

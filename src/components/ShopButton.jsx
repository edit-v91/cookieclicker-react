import MoneyImg from "../assets/Cupcake-coin.png";
import CartImg from "../assets/Shoppingcart.png";

export default function ShopButton({ money, onBuy }) {
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
					<img src={MoneyImg} alt="coin" className="coinImg" />
				</div>
			</button>
      <button
        type="button"
        className="shopButton cartButton"
      >
        <span className="moneyCount">Shop</span>
        <div className="moneyIcon">
          <img src={CartImg} alt="cart" className="coinImg" />
        </div>
      </button>
		</div>
	);
}

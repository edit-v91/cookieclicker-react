import { useNavigate } from "react-router-dom";
import { useSkin } from "../contexts/SkinContext";
const shopItems = [
	{
		name: "2x clicks",
		value: 2,
		price: 5,
		type: "booster",
		iconKey: "booster2Icon",
	},
	{
		name: "5x clicks",
		value: 5,
		price: 15,
		type: "booster",
		iconKey: "booster5Icon",
	},
	{
		name: "Donut skin",
		skinId: "donut",
		price: 20,
		type: "skin",
	},
];
export default function Shop({ money, setMoney, buyMultiplier, counter }) {
	const navigate = useNavigate();
	const { skins, getDisplaySkin, ownedSkins, buySkin } = useSkin();
	const displaySkin = getDisplaySkin(counter);
	const buyShopItem = (item) => {
		if (money < item.price) return;
		if (item.type === "skin") {
			if (ownedSkins.includes(item.skinId)) return;
			setMoney((m) => m - item.price);
			buySkin(item.skinId);
			return;
		}
		buyMultiplier(item.value, item.price);
	};
	return (
		<main className="shopPage">
			<section className="shopPanel">
				<h2>Shop</h2>
				<div className="shopItems">
					{shopItems.map((item) => {
						const isOwnedSkin =
							item.type === "skin" && ownedSkins.includes(item.skinId);
						const icon =
							item.type === "skin"
								? skins[item.skinId].mainImage
								: displaySkin[item.iconKey];
						return (
							<button
								className="shopItem"
								key={item.name}
								onClick={() => buyShopItem(item)}
								disabled={money < item.price || isOwnedSkin}
							>
								<div className="shopItemInfo">
									<img src={icon} alt={item.name} />
									<span>{isOwnedSkin ? `${item.name} owned` : item.name}</span>
								</div>
								<div className="shopItemPrice">
									<span>{item.price}</span>
									<img src={displaySkin.coinImage} alt="coins" />
								</div>
							</button>
						);
					})}
				</div>
				<button onClick={() => navigate("/")} className="backButton">
					← Back
				</button>
			</section>
		</main>
	);
}
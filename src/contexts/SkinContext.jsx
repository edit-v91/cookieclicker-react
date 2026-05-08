import { createContext, useContext, useMemo, useState } from "react";

import MuffinImg from "../assets/Vanilla-cupcake.png";
import MuffinUpgradeImg from "../assets/Muffin-turquoise.png";
import DonutImg from "../assets/Donut.png";

import CupcakeCoin from "../assets/Cupcake-coin.png";
import MuffinUpgradeCoin from "../assets/Coin-turquoise.png";
import DonutCoin from "../assets/Donut-coin.png";

import CartImg from "../assets/Shoppingcart.png";
import DonutCart from "../assets/Donut-cart.png";
import MuffinUpgradeCart from "../assets/Shoppingcart-turquoise.png";

import Booster2 from "../assets/Booster-x2.png";
import Booster5 from "../assets/Booster-x5.png";
import DonutBooster2 from "../assets/Booster-x2-donut.png";
import DonutBooster5 from "../assets/Booster-x5-donut.png";
import MuffinUpgradeBooster2 from "../assets/Booster-x2-turquoise.png";
import MuffinUpgradeBooster5 from "../assets/Booster-x5-turquoise.png";

const SkinContext = createContext();

const skins = {
	muffin: {
		id: "muffin",
		name: "Muffin",
		mainImage: MuffinImg,
		coinImage: CupcakeCoin,
		cartImage: CartImg,
		booster2Icon: Booster2,
		booster5Icon: Booster5,
		themeClass: "themeMuffin",
	},
	donut: {
		id: "donut",
		name: "Donut",
		mainImage: DonutImg,
		coinImage: DonutCoin,
		cartImage: DonutCart,
		booster2Icon: DonutBooster2,
		booster5Icon: DonutBooster5,
		themeClass: "themeDonut",
	},
	upgradedMuffin: {
		id: "upgradedMuffin",
		name: "Upgraded Muffin",
		mainImage: MuffinUpgradeImg,
		coinImage: MuffinUpgradeCoin,
		cartImage: MuffinUpgradeCart,
		booster2Icon: MuffinUpgradeBooster2,
		booster5Icon: MuffinUpgradeBooster5,
		themeClass: "themeUpgradedMuffin",
	},
};

export function SkinProvider({ children }) {
	const [activeSkinId, setActiveSkinId] = useState("muffin");
	const [ownedSkins, setOwnedSkins] = useState(["muffin"]);

	const buySkin = (skinId) => {
		setOwnedSkins((current) =>
			current.includes(skinId) ? current : [...current, skinId],
		);
		setActiveSkinId(skinId);
	};

	const activeSkin = skins[activeSkinId];

	const getDisplaySkin = (counter) => {
		if (activeSkinId === "muffin" && counter >= 1000) {
			return skins.upgradedMuffin;
		}

		return skins[activeSkinId];
	};

	const value = useMemo(
		() => ({
			skins,
			activeSkin,
			activeSkinId,
			ownedSkins,
			buySkin,
			setActiveSkinId,
			getDisplaySkin,
		}),
		[activeSkin, activeSkinId, ownedSkins],
	);

	return <SkinContext.Provider value={value}>{children}</SkinContext.Provider>;
}

export function useSkin() {
	return useContext(SkinContext);
}

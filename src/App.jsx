import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Muffin from "./components/Muffin";
import ShopButton from "./components/ShopButton";
import CounterDisplay from "./components/CounterDisplay";
import Header from "./components/Header";
import Shop from "./components/Shop";

function Home({ counter, countClick, multiplier, hasDonutSkin }) {
	return (
		<>
			<CounterDisplay counter={counter} multiplier={multiplier} />
			<Muffin
				onClick={countClick}
				counter={counter}
				hasDonutSkin={hasDonutSkin}
			/>
		</>
	);
}

function App() {
	const [counter, setCounter] = useState(0);
	const [money, setMoney] = useState(0);
	const [multiplier, setMultiplier] = useState(1);
	const [hasDonutSkin, setHasDonutSkin] = useState(false);

	const countClick = () => {
		const nextCounter = counter + multiplier;
		setCounter(nextCounter);

		if (hasDonutSkin) {
			if (nextCounter % 2 === 0) {
				setMoney((currentMoney) => currentMoney + 1);
			}
		} else {
			if (nextCounter % 3 === 0) {
				setMoney((currentMoney) => currentMoney + 1);
			}
		}
	};

	const buyMuffin = () => {
		if (money === 0) return;
		setCounter((currentCounter) => currentCounter + money);
		setMoney(0);
	};

	const buyMultiplier = (value, cost) => {
		if (money < cost) return;

		setMoney((m) => m - cost);
		setMultiplier(multiplier * value);
	};

	const buyDonutSkin = (cost) => {
		if (money < cost || hasDonutSkin) return;

		setMoney((m) => m - cost);
		setHasDonutSkin(true);
	};

	return (
		<BrowserRouter>
			<Header counter={counter} hasDonutSkin={hasDonutSkin} />
			<ShopButton money={money} onBuy={buyMuffin} hasDonutSkin={hasDonutSkin} />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							counter={counter}
							countClick={countClick}
							multiplier={multiplier}
							hasDonutSkin={hasDonutSkin}
						/>
					}
				/>
				<Route
					path="/shop"
					element={
						<Shop
							money={money}
							buyMultiplier={buyMultiplier}
							hasDonutSkin={hasDonutSkin}
							buyDonutSkin={buyDonutSkin}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

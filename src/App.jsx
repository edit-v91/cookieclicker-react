import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Muffin from "./components/Muffin";
import ShopButton from "./components/ShopButton";
import CounterDisplay from "./components/CounterDisplay";
import Header from "./components/Header";
import Shop from "./components/Shop";

function Home({ counter, countClick, multiplier }) {
	return (
		<>
			<CounterDisplay counter={counter} multiplier={multiplier}/>
			<Muffin onClick={countClick} counter={counter}/>
		</>
	);
}

function App() {
	const [counter, setCounter] = useState(0);
	const [money, setMoney] = useState(0);
	const [multiplier, setMultiplier] = useState(1);

	const countClick = () => {
		const nextCounter = counter + multiplier;
		setCounter(nextCounter);

		if (nextCounter % 3 === 0) {
			setMoney((currentMoney) => currentMoney + 1);
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

	return (
		<BrowserRouter>
			<Header counter={counter}/>
			<ShopButton money={money} onBuy={buyMuffin} />
			<Routes>
				<Route
					path="/"
					element={<Home counter={counter} countClick={countClick} multiplier={multiplier}/>}
				/>
				<Route
					path="/shop"
					element={<Shop money={money} buyMultiplier={buyMultiplier} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

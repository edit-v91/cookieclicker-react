import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Muffin from "./components/Muffin";
import ShopButton from "./components/ShopButton";
import CounterDisplay from "./components/CounterDisplay";
import Header from "./components/Header";

function Home({ counter, countClick }) {
	return (
		<>
			<CounterDisplay counter={counter} />
			<Muffin onClick={countClick} />
		</>
	);
}

function Shop() {
	return <h2>Shop coming soon!</h2>;
}

function App() {
	const [counter, setCounter] = useState(0);
	const [money, setMoney] = useState(0);

	const countClick = () => {
		const nextCounter = counter + 1;
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

	return (
		<BrowserRouter>
			<Header />
			<ShopButton money={money} onBuy={buyMuffin} />
			<Routes>
				<Route
					path="/"
					element={<Home counter={counter} countClick={countClick} />}
				/>
				<Route path="/shop" element={<Shop />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

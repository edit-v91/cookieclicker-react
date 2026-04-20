import { useState } from "react";
import "./App.css";
import Muffin from "./components/Muffin";
import ShopButton from "./components/ShopButton";
import CounterDisplay from "./components/CounterDisplay";

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
		<>
			<header className="header">
				<h1>Welcome to the Muffin clicker</h1>
				<p>Have fun!</p>
			</header>
      <ShopButton money={money} onBuy={buyMuffin} />
      <CounterDisplay counter={counter} />
      <Muffin onClick={countClick} />
		</>
	);
}

export default App;

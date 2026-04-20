export default function ShopButton({ money, onBuy }) {
  return (
    <div className="shopContainer">
      <button
        type="button"
        onClick={onBuy}
        className="shopButton"
        disabled={money === 0}
        aria-label="Spend money to buy muffins"
      >
        <span className="moneyCount">{money}</span>
        <div className="moneyIcon">🪙🧁</div>
      </button>
    </div>
  );
}

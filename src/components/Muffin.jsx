
export default function Muffin({ onClick }) {
  return (
    <div className="muffinContainer">
      <button
        type="button"
        onClick={onClick}
        className="muffinButton"
        aria-label="Click the muffin"
      >
        <div className="muffinIcon">🧁</div>
      </button>
    </div>
  );
}

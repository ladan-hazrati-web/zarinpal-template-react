import "./Buttons.css";
function Buttons({ text1, text2 }) {
  return (
    <div className="buttons">
      <button>{text1}</button>
      <button>{text2}</button>
    </div>
  );
}

export default Buttons;

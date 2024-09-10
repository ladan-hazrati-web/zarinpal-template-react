import "./Main.css";

import Buttons from "./Buttons";
function Main({
  title,
  subTitle,
  text,
  textBtn1,
  textBtn2,
  image,
  orderImg,
  orderText,
  width,
}) {
  return (
    <div className="container-item">
      <figure
        className={`img-item ${orderImg} ${title === "زرین کارت" && width} `}
      >
        <img src={image} alt="" />
      </figure>
      <div className={`text-item ${orderText} `}>
        <h3>{title}</h3>
        <h2>{subTitle}</h2>
        <p>{text}</p>
        <div className="line"></div>
        <Buttons text1={textBtn1} text2={textBtn2} />
      </div>
    </div>
  );
}

export default Main;

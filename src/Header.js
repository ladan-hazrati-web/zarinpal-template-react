import "./Header.css";
import logo from "../src/images/logo-white.svg";
function Header() {
  return (
    <header className="header">
      <figure className="logo">
        <img src={logo} alt="logo" />
      </figure>
      <div className="header-left-section">
        <nav>
          <ul className="menu">
            <li>محصولات</li>
            <li>تعرفه ها</li>
            <li>توسعه دهندگان</li>
            <li>تماس با ما</li>
            <li>بیشتر</li>
          </ul>
        </nav>
        <button className="zarinpal-btn">زرین پال من</button>
      </div>
      <span className="header-icon">|||</span>
    </header>
  );
}

export default Header;

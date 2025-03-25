import "../styles/header.css";
import logo from "../assets/Netflix_Logo_PMS.png";
export default function Header() {
  return (
    <header className="header-container">
      <span className="logo">
        <img src={logo} alt="" />
      </span>
      <button className="sign-btn">Sign In</button>
    </header>
  );
}

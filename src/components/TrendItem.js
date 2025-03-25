import "../styles/TrendItem.css";
import imagesrc from "../assets/hero-background.jpg";
export default function TrendItem() {
  return (
    <div>
      <img src={imagesrc} alt="" className="trend-item-img" />
    </div>
  );
}

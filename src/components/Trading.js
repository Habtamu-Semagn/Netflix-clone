import "../styles/trading.css";
import TrendItem from "./TrendItem";
export default function Trading() {
  return (
    <div>
      <h1>Trending Now</h1>
      <div>
        <span>{"<"}</span>
        <TrendItem />
        <span>{">"}</span>
      </div>
    </div>
  );
}

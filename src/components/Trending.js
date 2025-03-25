import "../styles/Trending.css";
import { useRef } from "react";
import TrendItem from "./TrendItem";
export default function Trending() {
  const NavRef = useRef();
  const handleClick = (direction) => {
    if (direction === "left") {
      NavRef.current.scrollLeft -= 600;
    } else if (direction === "right") {
      NavRef.current.scrollLeft += 600;
    }
  };
  return (
    <div className="trending">
      <h1>Trending Now</h1>
      <div className="img-container-trend">
        <span onClick={() => handleClick("left")}>{"<"}</span>
        <div className="scroll" ref={NavRef}>
          <TrendItem />
          <TrendItem />
          <TrendItem />
          <TrendItem />
          <TrendItem />
          <TrendItem />
          <TrendItem />
          <TrendItem />
        </div>
        <span onClick={() => handleClick("right")}>{">"}</span>
      </div>
    </div>
  );
}

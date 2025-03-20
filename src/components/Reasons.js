import "../styles/Reasons.css";
import ReasonContainer from "./ReasonContainer";
export default function Reason() {
  return (
    <div className="reason-container">
      <h2>More Reasons to Join</h2>
      <div>
        <ReasonContainer
          title="Enjoy on your TV"
          text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        />
      </div>
    </div>
  );
}

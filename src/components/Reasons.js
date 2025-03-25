import "../styles/Reasons.css";
import ReasonContainer from "./ReasonContainer";
export default function Reason() {
  const reasonData = [
    {
      title: "Enjoy on your TV",
      text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      num: 1,
    },
    {
      title: "Download your shows to watch offline",
      text: "Save your favorites easily and always have something to watch.",
      num: 2,
    },
    {
      title: "Watch everywhere",
      text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      num: 3,
    },
    {
      title: "Create profiles for kids",
      text: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      num: 4,
    },
  ];
  return (
    <div className="reason-container">
      <h2>More Reasons to Join</h2>
      <div className="reason-data">
        {reasonData.map((el) => (
          <ReasonContainer title={el.title} text={el.text} num={el.num} />
        ))}
      </div>
    </div>
  );
}

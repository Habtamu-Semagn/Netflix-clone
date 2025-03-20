import "../styles/ReasonContainer.css";
export default function ReasonContainer({ title, text, imgSrc }) {
  return (
    <div className="reason-img-container">
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={imgSrc} alt="" />
    </div>
  );
}

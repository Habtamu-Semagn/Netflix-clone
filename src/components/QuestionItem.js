import "../styles/QuestionItem.css";
export default function QuestionItem({ el, text, handleClick }) {
  return (
    <div className="quest">
      <p className="quest-title" onClick={() => handleClick(el)}>
        <span>{el.title}</span>
        <span className="sign">+</span>
      </p>
      {el.text === text ? <p className="quest-text">{text}</p> : ""}
    </div>
  );
}

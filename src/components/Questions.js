import { useState } from "react";
import "../styles/Questions.css";
import QuestionItem from "./QuestionItem";
export default function Questions() {
  const [text, setText] = useState(null);
  const handleClick = (el) => {
    if (text === el.text) {
      setText("");
      return;
    }
    setText(el.text);
  };
  const questions = [
    {
      title: "What is Netflix?",
      text: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      title: "How much does Netflix cost?",
      text: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch?",
      text: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do I cancel?",
      text: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      title: "What can I watch on Netflix?",
      text: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good for kids",
      text: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];
  return (
    <div className="questions">
      <h2>Frequently Asked Questions</h2>
      {questions.map((el) => (
        <QuestionItem el={el} text={text} handleClick={handleClick} />
      ))}
    </div>
  );
}

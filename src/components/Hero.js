import "../styles/Hero.css";
export default function Hero() {
  return (
    <div className="hero-section">
      <h1 className="hero-heading">
        Unlimited movies, <br />
        TV shows, and more
      </h1>
      <p className="first-p">Starts at USD 2.99. Cancel anytime.</p>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <label>
        <input type="emal" className="hero-input" placeholder="Email address" />
        <button className="get-started-btn">Get Started {">"} </button>
      </label>
    </div>
  );
}

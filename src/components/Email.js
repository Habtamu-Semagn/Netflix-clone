import "../styles/Email.css";
export default function Email() {
  return (
    <div className="email-container">
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

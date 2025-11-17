const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function RefinedHero() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailPattern.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3200);
  };

  const ringClass =
    status === "success"
      ? "ring-2 ring-offset-2 ring-offset-white/70 ring-emerald-200"
      : status === "error"
      ? "ring-2 ring-offset-2 ring-offset-white/70 ring-rose-200"
      : "ring-1 ring-offset-2 ring-offset-white/80 ring-slate-200/70";

  return (
    <section className="canvas">
      <div className="copy">
        <p className="eyebrow">OGION</p>
        <h1>Performance, illuminated</h1>
        <p className="lede">
          The future of lending is almost here. Ogion AI Intelligence brings depth, not noise, built to see what others
          miss.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={`waitlist-shell ${ringClass}`}>
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Join waitlist</button>
      </form>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RefinedHero />);

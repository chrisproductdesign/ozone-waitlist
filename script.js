const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function BladeHero() {
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
    setTimeout(() => setStatus("idle"), 3600);
  };

  const shellClass = [
    "waitlist-shell",
    status === "success" ? "success" : "",
    status === "error" ? "error" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="scene">
      <div className="layer-glow" aria-hidden="true"></div>
      <div className="layer-grid" aria-hidden="true"></div>
      <div className="layer-waves" aria-hidden="true">
        <span className="iso-wave wave-one"></span>
        <span className="iso-wave wave-two"></span>
        <span className="iso-wave wave-three"></span>
      </div>
      <div className="layer-rail" aria-hidden="true"></div>
      <div className="layer-corner" aria-hidden="true"></div>

      <div className="center-stack">
        <div className="cursor-dot" aria-hidden="true"></div>
        <div className="copy-block">
          <h1>Performance, illuminated</h1>
          <p>The future of lending is almost here.</p>
        </div>

        <form onSubmit={handleSubmit} className={shellClass}>
          <label className="sr-only" htmlFor="waitlist-email">
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
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BladeHero />);

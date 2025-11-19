const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Animated background component for fintech lending theme
function AnimatedBackground() {
  const ribbons = React.useMemo(
    () =>
      Array.from({ length: 3 }, (_, index) => ({
        id: index,
        delay: -index * 6,
        duration: 18 + index * 5,
        rotation: -12 + index * 12,
        vertical: 20 + index * 25,
        hue: 215 + index * 8,
        glow: 0.35 + index * 0.15,
      })),
    []
  );

  const gradients = React.useMemo(
    () =>
      [
        { id: "north", rotate: "-25deg", opacity: 0.9, shiftX: "-320px", shiftY: "-180px", scale: 1.15 },
        { id: "south", rotate: "14deg", opacity: 0.75, shiftX: "340px", shiftY: "260px", scale: 1.2 },
        { id: "west", rotate: "-8deg", opacity: 0.6, shiftX: "-360px", shiftY: "240px", scale: 1.05 },
      ],
    []
  );

  return (
    <div className="animated-background lux-bg">
      <div className="grain-overlay" aria-hidden="true"></div>
      <div className="center-veil" aria-hidden="true"></div>
      <div className="core-glow" aria-hidden="true"></div>

      {gradients.map((gradient) => (
        <div
          key={gradient.id}
          className={`gradient gradient-${gradient.id}`}
          style={{
            "--gradient-rotate": gradient.rotate,
            "--gradient-shift-x": gradient.shiftX,
            "--gradient-shift-y": gradient.shiftY,
            "--gradient-scale": gradient.scale,
            opacity: gradient.opacity,
          }}
          aria-hidden="true"
        ></div>
      ))}

      <div className="ribbon-stack" aria-hidden="true">
        {ribbons.map((ribbon) => (
          <span
            key={ribbon.id}
            className="ribbon"
            style={{
              "--ribbon-y": `${ribbon.vertical}%`,
              "--ribbon-rotation": `${ribbon.rotation}deg`,
              "--ribbon-delay": `${ribbon.delay}s`,
              "--ribbon-duration": `${ribbon.duration}s`,
              "--ribbon-hue": ribbon.hue,
              "--ribbon-glow": ribbon.glow,
            }}
          ></span>
        ))}
      </div>

      <div
        className="focus-ring focus-ring-left"
        style={{ "--focus-shift-x": "90px", "--focus-shift-y": "-60px" }}
        aria-hidden="true"
      ></div>
      <div
        className="focus-ring focus-ring-right"
        style={{ "--focus-shift-x": "-120px", "--focus-shift-y": "80px" }}
        aria-hidden="true"
      ></div>
    </div>
  );
}

function RefinedHero() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailPattern.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
    setShowConfirmation(true);

    setTimeout(() => setStatus("idle"), 3200);
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  const ringClass =
    status === "success"
      ? "ring-2 ring-offset-2 ring-offset-white/70 ring-emerald-200"
      : status === "error"
      ? "ring-2 ring-offset-2 ring-offset-white/70 ring-rose-200"
      : "ring-1 ring-offset-2 ring-offset-white/80 ring-slate-200/70";

  return (
    <section className="canvas">
      <AnimatedBackground />
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

      <p className={`confirmation-message ${showConfirmation ? 'visible' : ''}`}>
        You're on the list. We'll be in touch soon.
      </p>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RefinedHero />);

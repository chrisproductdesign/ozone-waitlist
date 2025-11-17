const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ParallaxOrbHero() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  const fabricRef = React.useRef(null);

  React.useEffect(() => {
    const fabric = fabricRef.current;
    if (!fabric) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let rafId;

    const animate = () => {
      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;
      fabric.style.setProperty("--parallax-x", `${current.x}px`);
      fabric.style.setProperty("--parallax-y", `${current.y}px`);
      rafId = requestAnimationFrame(animate);
    };

    const handleMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const ratioX = event.clientX / innerWidth - 0.5;
      const ratioY = event.clientY / innerHeight - 0.5;
      target.x = ratioX * -55;
      target.y = ratioY * -55;
    };

    const reset = () => {
      target.x = 0;
      target.y = 0;
    };

    animate();
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", reset);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", reset);
    };
  }, []);

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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      <div className="fabric" aria-hidden="true" ref={fabricRef}>
        <div className="beam beam-one"></div>
        <div className="beam beam-two"></div>
        <div className="orb-field">
          <div className="focus-ring"></div>
          <div className="orb-core"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center space-y-10">
        <div className="space-y-4">
          <h1 className="font-display text-[clamp(2.8rem,6vw,4.6rem)] leading-[1.04] tracking-tight text-slate-900">
            Performance, illuminated
          </h1>
          <p className="text-base text-slate-500">The future of lending is almost here.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`waitlist-shell mx-auto flex max-w-xl flex-col gap-2 px-2 py-1 ${ringClass} sm:flex-row sm:items-center`}
        >
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-full border-0 bg-transparent px-5 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:ring-0"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white"
          >
            Join waitlist
          </button>
        </form>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ParallaxOrbHero />);

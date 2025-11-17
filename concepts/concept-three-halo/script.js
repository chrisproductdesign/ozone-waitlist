const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function MinimalHero() {
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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      <div className="fabric" aria-hidden="true">
        <div className="beam beam-one"></div>
        <div className="beam beam-two"></div>
        <div className="focus-ring"></div>
        <span className="pulse-dot" />
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center space-y-10">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/85 shadow-lg shadow-slate-200/50">
          <span className="h-4 w-4 rounded-full bg-gradient-to-br from-slate-200 via-slate-500 to-slate-800"></span>
        </div>

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
root.render(<MinimalHero />);

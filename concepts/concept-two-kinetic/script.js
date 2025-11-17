const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const stats = [
  { label: "Signals per loan", value: "340" },
  { label: "Blind spots removed", value: "83%" },
  { label: "Time to clarity", value: "< 4 min" },
];

const badges = ["Depth over noise", "Context-aware AI", "Human-in-the-loop"];

function WaitlistHero() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  const [helper, setHelper] = React.useState("Priority access invites go out soon.");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailPattern.test(email)) {
      setStatus("error");
      setHelper("Share a valid email to reserve your spot.");
      return;
    }

    setStatus("success");
    setHelper(`Thanks, ${email.split("@")[0]} — you're confirmed.`);
    setEmail("");

    setTimeout(() => {
      setStatus("idle");
      setHelper("Priority access invites go out soon.");
    }, 4200);
  };

  const ringClass =
    status === "success"
      ? "ring-2 ring-offset-2 ring-indigo-200"
      : status === "error"
      ? "ring-2 ring-offset-2 ring-rose-200"
      : "ring-1 ring-slate-200/80";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="bg-canvas" aria-hidden="true">
        <span className="orb orb-one"></span>
        <span className="orb orb-two"></span>
        <span className="orb orb-three"></span>
        <div className="line-grid"></div>
        <div className="loop-ring"></div>
        <div className="loop-ring secondary"></div>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex flex-col items-start gap-4 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 shadow-lg shadow-indigo-200/30">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-400 via-sky-300 to-violet-400"></span>
            </span>
            <div>
              <p className="font-display text-lg text-slate-900">Ogion</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Lending intelligence</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.4em] text-slate-500">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse-soft"></span>
            Waitlist live
          </div>
        </header>

        <main className="flex flex-1 items-center px-6 pb-16">
          <div className="mx-auto w-full max-w-4xl text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.6em] text-slate-500">Early access</p>
            <h1 className="mt-6 font-display text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Performance,
              <span className="mx-2 inline-flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                illuminated
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl">
              The future of lending is almost here. Ogion AI Intelligence brings depth, not noise—built to see what others miss.
            </p>

            <form
              onSubmit={handleSubmit}
              className={`mt-10 flex flex-col gap-3 rounded-full bg-white/80 p-2 shadow-glow backdrop-blur ${ringClass} sm:flex-row`}
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="flex-1 rounded-full border-0 bg-transparent px-5 py-4 text-base text-slate-900 placeholder:text-slate-400 focus:ring-0"
                required
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center rounded-full bg-ink px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5"
              >
                Join waitlist
                <span className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg transition group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>

            <p
              className={`mt-4 text-sm ${
                status === "error" ? "text-rose-500" : status === "success" ? "text-indigo-500" : "text-slate-500"
              }`}
            >
              {helper}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 sm:justify-start">
              {badges.map((item) => (
                <span key={item} className="rounded-full border border-white/50 bg-white/60 px-4 py-2 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{stat.label}</p>
                  <p className="mt-3 text-3xl font-display text-slate-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WaitlistHero />);

import Image from "next/image";
import Link from "next/link";


const filmRows = [
  { title: "Trending Now", items: [1, 2, 3, 4, 5, 6] },
  { title: "Top Picks for You", items: [1, 2, 3, 4, 5, 6] },
  { title: "New Releases", items: [1, 2, 3, 4, 5, 6] },
];

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="relative flex justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/movies.jpg"
            alt="CineNexus background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 z-5 bg-black/50" />
        <div className="absolute inset-0 z-10 opacity-40 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.5),transparent_50%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.35),transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-linear-to-b from-transparent to-black" />
        <div className="relative z-20 mx-auto flex min-h-[70vh] max-w-6xl flex-col gap-12 px-6 pb-20 pt-44 sm:px-10">
          <section className="flex flex-col items-center gap-10">
            <div className="mx-auto w-full max-w-3xl space-y-6 text-center">
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Welcome to CineNexus!
              </h1>
              <p className="text-xl font-semibold text-white/85 sm:text-2xl">
                Unlimited movies and series, personalized for you. Watch
                anywhere. Cancel anytime.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-white/70">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
                <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                  <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 backdrop-blur-sm focus-within:border-red-500/80">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
                    />
                  </div>
                  <Link
                    className="inline-flex h-12 items-center justify-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white transition hover:bg-red-500"
                    href="/signup"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-3 text-sm text-white/70">
                  <span>Already a member?</span>
                  <Link className="font-semibold text-white" href="/login">
                    Sign in now
                  </Link>
                </div>
              </div>
      
            </div>
          </section>
        </div>
      </div>

      <section className="mx-auto mt-10 max-w-6xl px-6 pb-20 sm:mt-16 sm:px-10">
        <div className="space-y-8">
          {filmRows.map((row) => (
            <div key={row.title}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{row.title}</h3>
                <Link className="text-sm font-semibold text-white/70" href="/browse">
                  See all
                </Link>
              </div>
              <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
                {row.items.map((item) => (
                  <div
                    key={`${row.title}-${item}`}
                    className="w-36 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-3 sm:w-40"
                  >
                    <div className="aspect-2/3 rounded-xl bg-white/10" />
                    <div className="mt-3 h-2 w-20 rounded-full bg-white/20" />
                    <div className="mt-2 h-2 w-12 rounded-full bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

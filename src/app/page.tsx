export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
          Frontend AI Engineering,
          <br />
          <span className="text-zinc-400">deliberately built.</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-500">
          FlyRank intern building production-grade, accessible web interfaces
          with an AI-first toolchain. Every pixel is intentional.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block rounded-md bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Book a coffee chat
        </a>
      </div>
    </main>
  )
}

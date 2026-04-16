const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 text-zinc-100 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="inline-block bg-amber-300 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-zinc-950">
            Work In Progress
          </span>
          <p className="mt-3 text-2xl font-black uppercase tracking-[0.1em]">Carharrt WIP</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-300">
            Streetwear essentials built with utility, grit, and clean silhouettes.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm font-medium">
            <li className="hover:text-amber-300 transition-colors">Home</li>
            <li className="hover:text-amber-300 transition-colors">Products</li>
            <li className="hover:text-amber-300 transition-colors">About</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Social</p>
          <ul className="mt-4 space-y-2 text-sm font-medium">
            <li className="hover:text-amber-300 transition-colors">Instagram</li>
            <li className="hover:text-amber-300 transition-colors">Facebook</li>
            <li className="hover:text-amber-300 transition-colors">TikTok</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Stay Updated</p>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-amber-300"
            />
            <button className="bg-amber-300 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-zinc-950 transition-colors hover:bg-amber-200">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-zinc-800 pt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Work in Progress</p>
        <p>Crafted for everyday wear</p>
      </div>
    </footer>
  )
}

export default Footer

import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 bg-zinc-100">
      <section className="border-y border-zinc-800 bg-zinc-950 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-4xl">
          <span className="inline-block bg-amber-300 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-zinc-950">
            Work In Progress
          </span>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Error Route
          </p>
          <h1 className="text-6xl font-black uppercase leading-tight text-zinc-100 sm:text-7xl">
            404
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-300">
            Page not found. The page you're looking for doesn't exist or has been moved.
          </p>
          
          
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.06em] text-zinc-900">Explore the Site</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="border border-zinc-900 bg-zinc-50 p-5">
              <h3 className="text-lg font-black uppercase tracking-[0.04em] text-zinc-900">Home</h3>
              <p className="mt-1 text-sm text-zinc-600">Return to the main page and latest drops.</p>
              <Button to="/" className="mt-4">
                Go Home
              </Button>
            </div>

            <div className="border border-zinc-900 bg-zinc-50 p-5">
              <h3 className="text-lg font-black uppercase tracking-[0.04em] text-zinc-900">Products</h3>
              <p className="mt-1 text-sm text-zinc-600">Browse all featured store items and collections.</p>
              <Button to="/products" className="mt-4">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage

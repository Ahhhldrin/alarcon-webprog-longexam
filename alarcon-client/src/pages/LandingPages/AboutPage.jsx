import Button from '../../components/Button';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y border-zinc-900 bg-zinc-100 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="border border-zinc-900 bg-zinc-50 p-6">
            <div className="flex min-h-72 items-center justify-center overflow-hidden bg-zinc-200 p-2">
              <img src="https://www.deconetwork.com/wp-content/uploads/2024/08/carhartt-workwear-trends-fashion-apparel-003-1024x576.jpg" alt="BulldogEx" className="h-full w-full rounded-xl object-contain" />
            </div>
          </div>

          <div>
            <p className="mb-3 inline-block bg-amber-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950">
              About Carharrt WIP
            </p>
            <h1 className="max-w-xl text-3xl font-black uppercase leading-tight tracking-[0.06em] text-zinc-900 sm:text-4xl">
              A modern streetwear brand that reimagines classic workwear with a clean, urban edge.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Carhartt WIP is a modern streetwear brand that reimagines classic Carhartt heritage with refined design, premium quality, and a strong urban influence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" className="border border-amber-300 bg-amber-300 text-zinc-950 hover:bg-amber-200">
                Back Home
              </Button>
              <Button to="/products" variant="primary" className="border border-zinc-900 bg-zinc-900 text-zinc-100 hover:bg-zinc-700">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-100 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.06em] text-zinc-900">Quick Store Blocks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border border-zinc-900 bg-zinc-50 p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Items
            </p>
          </div>
          <div className="border border-zinc-900 bg-zinc-50 p-5">
            <p className="text-2xl font-bold text-zinc-900">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Categories
            </p>
          </div>
          <div className="border border-zinc-900 bg-zinc-50 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pickup Slots
            </p>
          </div>
          <div className="border border-zinc-900 bg-zinc-50 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-100 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Cartharrt WIP 
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.06em] text-zinc-900">A modern streetwear brand that reimagines classic Carhartt heritage </h2>

            <div className="mt-6 space-y-4">
              <article className="border border-zinc-900 bg-zinc-50 p-5">
                <h3 className="text-lg font-black uppercase tracking-[0.03em] text-zinc-900">From Workwear to Streetwear Legacy</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                Born from the rugged durability of Carhartt’s American workwear roots,
                Carhartt WIP reinterprets classic utility pieces into modern streetwear, 
                blending function with contemporary culture.
                </p>
              </article>

              <article className="border border-zinc-900 bg-zinc-50 p-5">
                <h3 className="text-lg font-black uppercase tracking-[0.03em] text-zinc-900">Heritage Reinvented for the Streets</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                Carhartt WIP transforms the original Carhartt legacy—built for laborers in 1889—into a global streetwear identity, preserving authenticity while adapting to urban fashion.
                </p>
              </article>

              <article className="border border-zinc-900 bg-zinc-50 p-5">
                <h3 className="text-lg font-black uppercase tracking-[0.03em] text-zinc-900">Built on Tradition, Designed for Today</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                Grounded in Carhartt’s history of craftsmanship and resilience, Carhartt WIP evolves these foundations into stylish, everyday pieces that resonate with modern youth and creative communities.
                </p>
              </article>
            </div>
          </div>

          <div className="border border-zinc-900 bg-zinc-50 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img src="https://cdn.media.amplience.net/i/carhartt_wip/I036593_2XN_4L-ST-01?%24ST%24=&fmt=auto&w=640&qlt=default" alt="Category One" className="h-full w-full rounded-[1.25rem] object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img src="https://cdn.media.amplience.net/i/carhartt_wip/I036591_01_WU-ST-01?%24ST%24=&fmt=auto&w=640&qlt=default" alt="Category Two" className="h-full w-full rounded-[1.25rem] object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img src="https://cdn.media.amplience.net/i/carhartt_wip/I034820_3IT_4O-ST-01?%24ST%24=&fmt=auto&w=640&qlt=default" alt="Category Three" className="h-full w-full rounded-[1.25rem] object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img src='https://cdn.media.amplience.net/i/carhartt_wip/I035232_11_XX-ST-01?%24ST%24=&fmt=auto&w=640&qlt=default' alt="Category Four" className="h-full w-full rounded-[1.25rem] object-cover" />
              </div>
            </div>
            <Button to="/products" variant="primary" className="mt-5 border border-zinc-900 bg-zinc-900 text-zinc-100 hover:bg-zinc-700">View Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

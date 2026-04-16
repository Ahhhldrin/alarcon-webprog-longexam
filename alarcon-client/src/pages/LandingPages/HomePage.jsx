import Button from '../../components/Button';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y border-zinc-800 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src="https://img.businessoffashion.com/resizer/v2/LNX3FMMY45CZVMBYYCPU7JLCUY.jpg?auth=8bbcc01c5a2243f5b14bced115bd645ef0138b056ee78a7c2edc4380547fb8b1&width=1440"
                    alt=""
                    className="absolute inset-0 h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-900/45" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 inline-block bg-amber-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950">
                            Cartharrt Work in Progress
                        </p>
                        <h1 className="text-3xl font-black uppercase leading-tight tracking-[0.06em] text-zinc-50 sm:text-4xl">
                            Discover Cartharrt WIP
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-zinc-100 sm:text-base">
                         Blends rugged workwear heritage with modern street style—delivering durable,
                         high-quality pieces designed for everyday wear and urban life.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products" className="border border-amber-300 bg-amber-300 text-zinc-950 hover:bg-amber-200">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary" className="border border-zinc-100 bg-zinc-900 text-zinc-100 hover:border-amber-300 hover:text-amber-300">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-zinc-900 bg-zinc-100 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Store Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.06em] text-zinc-900">Quick Shopping Blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="border border-zinc-900 bg-zinc-50 p-5">
                        <p className="text-2xl font-black text-zinc-900">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Products
                        </p>
                    </div>
                    <div className="border border-zinc-900 bg-zinc-50 p-5">
                        <p className="text-2xl font-black text-zinc-900">06</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Categories
                        </p>
                    </div>
                    <div className="border border-zinc-900 bg-zinc-50 p-5">
                        <p className="text-2xl font-black text-zinc-900">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Orders
                        </p>
                    </div>
                    <div className="border border-zinc-900 bg-zinc-50 p-5">
                        <p className="text-2xl font-black text-zinc-900">03</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y border-zinc-900 bg-zinc-100 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.06em] text-zinc-900">Work in Progress Featured Collections</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="border border-zinc-900 bg-zinc-50 p-4">
                        <div className="flex aspect-4/3 items-center justify-center overflow-hidden bg-zinc-200">
                        <img src="https://cdn.media.amplience.net/i/carhartt_wip/I036136_01_XX-ST-01?%24ST%24=&fmt=auto&w=1920&qlt=default" alt="Featured Card One" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-4 text-lg font-black uppercase tracking-[0.03em] text-zinc-900">Jackets and Coats</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            A blend of form and function, our coats and jackets for men include signature Dearborn Canvas styles in an array of fits and washes, as well as seasonal outerwear options like coach jackets and parkas.
                        </p>
                        <Button to="/products" variant="primary" className="mt-4 border border-zinc-900 bg-zinc-900 text-zinc-100 hover:bg-zinc-700">View Products</Button>
                    </article>

                    <article className="border border-zinc-900 bg-zinc-50 p-4">
                        <div className="flex aspect-4/3 items-center justify-center overflow-hidden bg-zinc-200">
                         <img src="https://cdn.media.amplience.net/i/carhartt_wip/I036591_01_WU-ST-01?%24ST%24=&fmt=auto&w=1920&qlt=default" alt="Featured Card Two" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-4 text-lg font-black uppercase tracking-[0.03em] text-zinc-900">Pants</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            From classic workwear-inspired designs, such as the Double Knee Pant, to contemporary styles like chinos and joggers, our men's pants are offered a host of fits and hardwearing fabrics.
                        </p>
                        <Button to="/products" variant="primary" className="mt-4 border border-zinc-900 bg-zinc-900 text-zinc-100 hover:bg-zinc-700">Shop Supplies</Button>
                    </article>

                    <article className="border border-zinc-900 bg-zinc-50 p-4">
                        <div className="flex aspect-4/3 items-center justify-center overflow-hidden bg-zinc-200">
                         <img src="https://cdn.media.amplience.net/i/carhartt_wip/I035232_11_XX-ST-01?%24ST%24=&fmt=auto&w=640&qlt=default" alt="Featured Card Three" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-4 text-lg font-black uppercase tracking-[0.03em] text-zinc-900">Shirts</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Carhartt WIP shirts for men encompass short- and long-sleeve styles, crafted from fabrics such as chambray, poplin, and flannel. Explore utilitarian work shirts, alongside allover print pieces and refined button-down items.
                        </p>
                        <Button to="/products" variant="primary" className="mt-4 border border-zinc-900 bg-zinc-900 text-zinc-100 hover:bg-zinc-700">
                            View Apparel
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

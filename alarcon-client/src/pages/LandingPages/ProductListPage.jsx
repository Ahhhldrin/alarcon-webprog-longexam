import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Products
        </p>
        <h1 className="max-w-2xl text-3xl font-black uppercase leading-tight tracking-[0.06em] text-zinc-100 sm:text-4xl">
        Timeless workwear heritage meets contemporary design crafted by Carhartt WIP for everyday wear
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-300 sm:text-base">
        Heritage craftsmanship. Modern streetwear. Everyday essential.
        </p>
        <div className="mt-6">
          <Button to="/" className="border border-amber-300 bg-amber-300 text-zinc-950 hover:bg-amber-200">Back Home</Button>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-100 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Products
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.06em] text-zinc-900">Product Card Grid</h2>
        </div>

        <ProductList products={products} />
      </section>
    </div>
  );
}

export default ProductListPage

import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="border border-zinc-900 bg-zinc-50 p-4">
      <div className="flex aspect-4/3 items-center justify-center bg-zinc-200">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-2 text-lg font-black uppercase tracking-[0.03em] text-zinc-900">{product.title}</h3>
      <p className="mt-2 text-base font-black text-zinc-900">{product.price}</p>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        {product.content[0].substring(0, 120)}...
      </p>
      <Button to={`/products/${product.name}`} variant="primary" className="mt-4 border border-zinc-900 bg-zinc-900 text-zinc-100 hover:bg-zinc-700">
        View Product
      </Button>
    </article>
  );
};

export default ProductCard;

import { useLocation, useOutlet } from 'react-router-dom';
import lookOne from '../assets/img/2.png';
import lookTwo from '../assets/img/6.png';
import lookThree from '../assets/img/8.png';

const AuthLayout = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="border-b border-zinc-800 bg-zinc-950 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-16">
          <div className="mx-auto flex h-full w-full max-w-xl flex-col justify-center">
            <span className="inline-block w-fit bg-amber-300 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-zinc-950">
              Work In Progress
            </span>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.08em] text-zinc-100 sm:text-4xl">
              Carharrt WIP
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">
              Utility-driven pieces and clean silhouettes. Sign in to explore curated everyday staples.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="col-span-2 overflow-hidden border border-zinc-700 bg-zinc-900">
                <img src={lookOne} alt="Carharrt style lookbook model" className="h-56 w-full object-cover" />
              </div>
              <div className="overflow-hidden border border-zinc-700 bg-zinc-900">
                <img src={lookTwo} alt="Streetwear outerwear fit" className="h-40 w-full object-cover" />
              </div>
              <div className="overflow-hidden border border-zinc-700 bg-zinc-900">
                <img src={lookThree} alt="Workwear inspired casual look" className="h-40 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <div key={location.pathname} className="auth-route-enter">
              {outlet}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;

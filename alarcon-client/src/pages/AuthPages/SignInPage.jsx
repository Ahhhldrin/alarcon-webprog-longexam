import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-500 focus:border-amber-300 focus:bg-zinc-50';

const actionButtonClassName = 'w-full py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <>
      <span className="inline-block bg-amber-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950">
        Work In Progress
      </span>
      <h1 className="mt-4 text-3xl font-black uppercase tracking-[0.08em] text-zinc-900 sm:text-4xl">Log In</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Access your store account to review orders, saved items, and pickup details.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label htmlFor="signin-email" className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-700">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-700">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-600">
            <input type="checkbox" className="h-4 w-4 border-zinc-300 accent-amber-300" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-semibold uppercase tracking-[0.08em] text-zinc-700 transition hover:text-zinc-900">
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          className={`border border-amber-300 bg-amber-300 text-zinc-950 hover:bg-amber-200 ${actionButtonClassName}`}
        >
          Log In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="primary"
            className={`border border-zinc-900 ${actionButtonClassName}`}
          >
            Log In with Google
          </Button>
          <Button
            type="button"
            variant="primary"
            className={`border border-zinc-900 ${actionButtonClassName}`}
          >
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-bold uppercase tracking-[0.08em] text-zinc-900 transition hover:text-zinc-600">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;

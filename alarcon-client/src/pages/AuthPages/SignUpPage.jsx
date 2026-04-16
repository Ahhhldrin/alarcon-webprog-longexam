import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-500 focus:border-amber-300 focus:bg-zinc-50';

const actionButtonClassName = 'w-full py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <>
      <span className="inline-block bg-amber-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950">
        Work In Progress
      </span>
      <h1 className="mt-4 text-3xl font-black uppercase tracking-[0.08em] text-zinc-900 sm:text-4xl">Sign Up</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Create a store account for faster checkout, order updates, and pickup details.
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-700">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-700">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-700">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-700">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <Button
          type="submit"
          className={`border border-amber-300 bg-amber-300 text-zinc-950 hover:bg-amber-200 ${actionButtonClassName}`}
        >
          Create Account
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="primary"
            className={`border border-zinc-900 ${actionButtonClassName}`}
          >
            Sign Up with Google
          </Button>
          <Button
            type="button"
            variant="primary"
            className={`border border-zinc-900 ${actionButtonClassName}`}
          >
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-bold uppercase tracking-[0.08em] text-zinc-900 transition hover:text-zinc-600">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;

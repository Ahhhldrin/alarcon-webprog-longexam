import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition',
    isActive
      ? 'border-amber-300 bg-amber-300 text-zinc-950'
      : 'border-transparent text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-100',
  ].join(' ');

const dropdownLinkClass = ({ isActive }) =>
  [
    'block px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition',
    isActive ? 'bg-amber-300 text-zinc-950' : 'text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100',
  ].join(' ');

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src= "https://1000logos.net/wp-content/uploads/2020/03/Carhartt-Logo.jpg" alt="BulldogEx" className="h-9 w-9 border border-zinc-700 bg-zinc-50 object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-black uppercase tracking-[0.08em] text-zinc-100">Carhartt WIP</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>  

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center border border-zinc-700 bg-zinc-900 p-2 text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
            aria-label="Open account menu"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.5-3.5 4.6-5 8-5s6.5 1.5 8 5" />
            </svg>
          </button>

          {isMenuOpen ? (
            <div
              role="menu"
              className="absolute right-0 mt-2 w-44 border border-zinc-800 bg-zinc-950 p-2 shadow-lg"
            >
              <NavLink
                to="/auth/signin"
                className={dropdownLinkClass}
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </NavLink>
              <NavLink
                to="/auth/signup"
                className={dropdownLinkClass}
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </NavLink>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default NavBar;

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, PhoneCall, Plus } from 'lucide-react';
import { navItems, contactInfo } from '../data/siteData';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 backdrop-blur-xl ${
        hasShadow ? 'border-slate-200/70 bg-white/90 shadow-soft' : 'border-transparent bg-white/75'
      }`}
    >
      <div className="page-container flex items-center justify-between gap-4 py-5">
        <NavLink to="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
          <Plus size={22} className="text-primary-600" />
          <span>Harihar Medical Store</span>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition hover:bg-primary-50 hover:text-primary-700 ${
                  isActive ? 'bg-primary-50 text-primary-700 shadow-sm' : 'text-slate-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${contactInfo.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary-200 hover:text-primary-700"
          >
            <PhoneCall size={18} />
            Call us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-primary-200 hover:text-primary-900 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-soft md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;

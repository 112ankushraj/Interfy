import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";

function Logo({ closeMenu }) {
  return (
    <Link to="/" onClick={closeMenu} className="flex items-center space-x-2">
      <img
        id="home"
        src="/image/logo_header.webp"
        alt="logo"
        className="h-15 w-auto"
      />
    </Link>
  );
}

function EnrollButton({ className }) {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSetbDpB0M2hyM6ZXDnFvR8iJ8Iwuu614uKIzG_bJ9uDMeeshA/viewform?usp=preview"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      ENROLL →
    </a>
  );
}

function ToggleButton({ toggleMenu, menuOpen }) {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden text-3xl text-gray-800 "
      aria-label="Toggle Menu"
    >
      {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
    </button>
  );
}
function NavMenu({ closeMenu, classname, children }) {
  return (
    <ul className={classname}>
      {[
        { to: "/", label: "Home" },
        { to: "/internship", label: "Internship" },
        { to: "/verification", label: "Verification" },
        { to: "/contactus", label: "Contact Us" },
        { to: "/about", label: "About" },
      ].map(({ to, label }) => (
        <NavButton to={to} label={label} closeMenu={closeMenu} key={label} />
      ))}
      {children}
    </ul>
  );
}
function NavButton({ to, label, closeMenu }) {
  return (
    <li key={to}>
      <Link
        to={to}
        onClick={closeMenu}
        className="text-gray-800 hover:text-blue-600 font-small"
      >
        {label}
      </Link>
    </li>
  );
}
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Helmet>
        <title>Navbar - Internfy</title>
        <meta
          name="description"
          content="Navigate through Internfy's platform seamlessly. Access internship listings, company profiles, and your dashboard all from one place."
        />
      </Helmet>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo closeMenu={closeMenu} />
          <NavMenu
            closeMenu={closeMenu}
            classname="hidden lg:flex space-x-20 text-2xl"
          />
          <EnrollButton className="hidden lg:flex items-center gap-2 bg-[#0062FF] text-white font-semibold text-lg px-5 py-2 rounded-lg max-w-max overflow-hidden hover:brightness-110 transition hover:bg-green-500" />
          <ToggleButton toggleMenu={toggleMenu} setMenuOpen={setMenuOpen} />
        </div>

        {menuOpen && (
          <NavMenu
            closeMenu={closeMenu}
            classname="lg:hidden bg-white shadow-md px-6 py-4 space-y-4"
          >
            <EnrollButton className="bg-blue-600  text-black text-center px-4 py-2 rounded-md hover:bg-green-500" />
          </NavMenu>
        )}
      </nav>
    </>
  );
}
export default Navbar;

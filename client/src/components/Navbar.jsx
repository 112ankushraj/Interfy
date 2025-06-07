import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center space-x-2"
        >
          <img
          id="home"
              
            src="/image/final logo.png"
            alt="logo"
            className="h-25 w-auto"
          /> 
          
        </Link>

        {/* Center: Nav links (hidden on mobile) */}
        <ul className="hidden lg:flex space-x-20 text-2xl">
          {[
            { to: "/", label: "Home" },
            { to: "/internship", label: "Internship" },
            { to: "/verification", label: "Verification" },
            { to: "/contactus", label: "Contact Us" },
            { to: "/about", label: "About" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={closeMenu}
                className="text-gray-800 hover:text-blue-600 font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Enroll Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSetbDpB0M2hyM6ZXDnFvR8iJ8Iwuu614uKIzG_bJ9uDMeeshA/viewform?usp=preview"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-[#0062FF] text-white font-semibold text-lg px-5 py-2 rounded-lg max-w-max overflow-hidden hover:brightness-110 transition"
        >
          ENROLL →
        </a>

        {/* Mobile: Toggle Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-3xl text-gray-800"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {[
            { to: "/", label: "Home" },
            { to: "/internship", label: "Internship" },
            { to: "/verification", label: "Verification" },
            { to: "/contactus", label: "Contact Us" },
            { to: "/about", label: "About" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMenu}
              className="block text-gray-800 hover:text-blue-600 font-medium"
            >
              {label}
            </Link>
          ))}

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSetbDpB0M2hyM6ZXDnFvR8iJ8Iwuu614uKIzG_bJ9uDMeeshA/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700"
          >
            ENROLL →
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

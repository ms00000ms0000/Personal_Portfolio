import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      id: "about",
      label: "About",
    },
    {
      id: "projects",
      label: "Projects",
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold gradient-text">
          MS
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                className="
                  cursor-pointer
                  font-medium
                  hover:text-cyan-400
                  transition
                "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#050816]">

          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="
                block
                p-4
                border-b
                border-gray-700
                cursor-pointer
                font-medium
              "
            >
              {item.label}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}

export default Navbar;
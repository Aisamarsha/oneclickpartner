import { useState } from "react";
import { NavLink } from "react-router-dom";

import { HiMenu } from "react-icons/hi";
import ResponsiveHeader from "./responsiveHeader";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center ">
        <NavLink to="/">
          <h1 className="text-3xl font-semibold leading-none">
            1 Click Partner <span className="text-violet-700 text-4xl">.</span>
          </h1>
        </NavLink>

        <div
          onClick={showMenu}
          className="md:hidden cursor-pointer bg-violet-700 rounded-md p-2.5"
        >
          <HiMenu className="scale-150 text-white hover:text-purple-500 " />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-violet-700 hover:bg-violet-800 text-white p-2 rounded-lg transition"
                : "p-2 hover:text-violet-900 transition "
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-violet-700 hover:bg-violet-800 text-white p-2 rounded-lg transition"
                : "p-2 hover:text-violet-900 transition "
            }
            to="/sales-lettings"
          >
            Sales Lettings
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-violet-700 hover:bg-violet-800 text-white p-2 rounded-lg transition"
                : "p-2 hover:text-violet-900 transition "
            }
            to="/mortgage"
          >
            Mortgage
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-violet-700 hover:bg-violet-800 text-white p-2 rounded-lg transition"
                : "p-2 hover:text-violet-900 transition "
            }
            to="/insuarance"
          >
            Insuarance
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-violet-700 hover:bg-violet-800 text-white p-2 rounded-lg transition"
                : "p-2 hover:text-violet-900 transition "
            }
            to="/solicitor"
          >
            Solicitor
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-violet-700 hover:bg-violet-800 text-white p-2 rounded-lg transition"
                : "p-2 hover:text-violet-900 transition "
            }
            to="/calculator"
          >
            Calculator
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-violet-700 hover:bg-violet-800 text-white p-2 rounded-lg transition"
                : "p-2 hover:text-violet-900 transition "
            }
            to="/valuation"
          >
            Valuation
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-violet-700 hover:bg-violet-800 text-white p-2 rounded-lg transition"
                : "p-2 hover:text-violet-900 transition "
            }
            to="/contact-us"
          >
            Contact us
          </NavLink>
        </div>
        <ResponsiveHeader active={active} showMenu={showMenu} />
      </div>
    </header>
  );
};

export default Header;

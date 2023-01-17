import { useState } from "react";
import { NavLink } from "react-router-dom";

import { HiMenu } from "react-icons/hi";
import ResponsiveHeader from "./responsiveHeader";

const Header = () => {
  const [active, setActive] = useState(false);
  const [mortgageActive, setMortgageActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <header className="py-6 border-b bg-violet-200">
      <div className="container mx-auto flex justify-between items-center ">
        <NavLink to="/">
          <h1 className="text-3xl font-bold leading-none   p-2 text-violet-700 rounded-xl ">
            1 Click Partner <span className="text-white text-4xl">.</span>
          </h1>
        </NavLink>

        <div
          onClick={showMenu}
          className="md:hidden cursor-pointer bg-violet-700 rounded-md p-2.5"
        >
          <HiMenu className="scale-150 text-white hover:text-purple-500 " />
        </div>

        <div className="hidden md:flex items-center gap-2 bg-violet-500 rounded-xl text-white p-2">
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

          {/* <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-violet-700 hover:bg-violet-800 text-white p-2 rounded-lg transition"
                : "p-2 hover:text-violet-900 transition "
            }
            to="/sales-lettings"
          >
            Sales Lettings
          </NavLink> */}

          <div className="relative">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-violet-700 hover:bg-violet-800 text-white p-2 rounded-lg transition"
                  : "p-2 hover:text-violet-900 transition "
              }
              to="/mortgage"
              onMouseEnter={() => setMortgageActive(true)}
              onMouseLeave={() => setMortgageActive(false)}
            >
              Mortgage
            </NavLink>
            {mortgageActive && (
              <div
                className="absolute w-auto gap-2 w-32 bg-white rounded-xl text-violet-700 border-violet-700 border p-2 flex flex-col "
                style={{ position: "absolute", top: "130%" }}
                onMouseEnter={() => setMortgageActive(true)}
                onMouseLeave={() => setMortgageActive(false)}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 rounded-md text-white bg-violet-700 transition"
                      : "p-2 rounded-md hover:text-white hover:bg-violet-700 transition"
                  }
                  to="/mortgage/first-time-buyer"
                >
                  First Time Buyer
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 rounded-md text-white bg-violet-700 transition"
                      : "p-2 rounded-md hover:text-white hover:bg-violet-700 transition"
                  }
                  to="/mortgage/home-movers"
                >
                  Home Movers
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 rounded-md text-white bg-violet-700 transition"
                      : "p-2 rounded-md hover:text-white hover:bg-violet-700 transition"
                  }
                  to="/mortgage/remortgage"
                >
                  Remortgage
                </NavLink>
              </div>
            )}
          </div>

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

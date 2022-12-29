import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
const ResponsiveHeader = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed inset-0  left-1/3 bg-purple-500 backdrop-blur-lg gap-0 p-10 rounded-lg md:hidden"
          : "hidden"
      }
    >
      <ImCross
        onClick={showMenu}
        className="cursor-pointer mb-10 text-white hover:text-violet-700"
      />

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-violet-700 w-full hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            : "w-full px-4 py-3 text-white hover:text-violet-900 transition"
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-violet-700 w-full hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            : "w-full px-4 py-3 text-white hover:text-violet-900 transition"
        }
        to="/sales-lettings"
      >
        Sales Lettings
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-violet-700 w-full hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            : "w-full px-4 py-3 text-white hover:text-violet-900 transition"
        }
        to="/mortgage"
      >
        Mortgage
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-violet-700 w-full hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            : "w-full px-4 py-3 text-white hover:text-violet-900 transition"
        }
        to="/insuarance"
      >
        Insuarance
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-violet-700 w-full hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            : "w-full px-4 py-3 text-white hover:text-violet-900 transition"
        }
        to="/solicitor"
      >
        Solicitor
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-violet-700 w-full hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            : "w-full px-4 py-3 text-white hover:text-violet-900 transition"
        }
        to="/calculator"
      >
        Calculator
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-violet-700 w-full hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            : "w-full px-4 py-3 text-white hover:text-violet-900 transition"
        }
        to="/valuation"
      >
        Valuation
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-violet-700 w-full hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            : "w-full px-4 py-3 text-white hover:text-violet-900 transition"
        }
        to="/contact-us"
      >
        Contact Us
      </NavLink>
    </ul>
  );
};

export default ResponsiveHeader;

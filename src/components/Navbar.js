import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="border-2 flex justify-around bg-stone-500 text-white ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-300 font-bold" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "text-blue-300 font-bold" : ""
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-300 font-bold" : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive ? "text-blue-300 font-bold" : ""
        }
      >
        Search
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-300 font-bold" : ""
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};
export default Navbar;

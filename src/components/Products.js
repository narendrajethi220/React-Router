import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold underline text-center">
        My Products Page
      </h2>
      <nav className="border-t-2 border-zinc-500 mt-4 py-4 bg-teal-300 text-center">
        <Link
          className="border-2 border-white-600 m-2 p-1 text-stone-900 font-[500] "
          to="shirt"
        >
          Shirts
        </Link>
        <Link
          className="border-2 border-white-600 m-2 p-1 text-stone-900 font-[500]"
          to="jeans"
        >
          Jeans
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;

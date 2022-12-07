import React, { useContext, useEffect, useState } from 'react';
import { FaShopify, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Context } from '../context/ContextProvider';

const Navbar = () => {
  const { search, setSearch } = useContext(Context);
  return (
    <nav className="flex flex-col gap-5 md:flex-row md:gap-0 items-center justify-between my-5 px-10 rounded py-1">
      <Link to="/">
        <div className="flex items-center gap-2">
          <FaShopify className="text-danger text-3xl" />
          <h3 className="text-heading text-xl font-semibold">E-commerce</h3>
        </div>
      </Link>
      <div className="flex flex-wrap items-center">
        <div className="relative mr-10">
          <FaShoppingCart className="mr-5 text-2xl text-heading" />
          <small className="absolute bg-danger right-[5px] rounded-full text-primary text-xs px-1 top-[-4px]">
            10
          </small>
        </div>
        <div className="flex items-center border w-60 p-2 rounded gap-3 border-heading">
          <FaSearch className="text-heading" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="outline-none w-44 bg-transparent"
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

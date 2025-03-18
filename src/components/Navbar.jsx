import { useState } from "react";
import React from "react";
import firebase from "../firebase/Firebase";

const Navbar = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="bg-gray-800 text-white shadow-md p-25 flex flex-col md:flex-row justify-between items-center h-16">
      
      <h1 className="text-2xl font-bold">
        F<span className="text-red-500">oo</span>dy Z
        <span className="text-red-500">o</span>ne
      </h1>


      <div className="flex gap-4 mt-2 md:mt-0">
        {["All", "Breakfast", "Lunch", "Dinner"].map((category) => (
          <button
            key={category}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={() => onFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>


      <div className="mt-6 md:mt-0">
        <input
          type="text"
          placeholder="Search food..."
          className="border border-red-300 p-2 rounded-lg outline-none w-60 text-gray-800 bg-white"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            onSearch(e.target.value);
          }}
        />
      </div>
    </nav>
  );
};


export default Navbar;

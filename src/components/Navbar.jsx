import React from "react";
import { Link } from "react-router-dom";
import { ClipboardCheck, Community, Book, Shop } from "iconoir-react";


function Navbar() {
    return (
        <nav className="navbar flex flex-col items-center w-24 h-screen p-10 bg-[#1d1d1d] text-white">
            <Link className="mb-4 p-3 hover:bg-[#9a9a9a] hover:rounded-full hover:text-blue-500 hover:bg-opacity-30 transition-inherit duration-200" to="/"><Book width={28} height={28} /> </Link>
            <Link className="mb-4 p-3 hover:bg-[#9a9a9a] hover:rounded-full hover:text-blue-500 hover:bg-opacity-30 transition-inherit duration-200" to="/users"><Community width={28} height={28} /></Link>
            <Link className="mb-4 p-3 hover:bg-[#9a9a9a] hover:rounded-full hover:text-blue-500 hover:bg-opacity-30 transition-inherit duration-200" to="/orders"><ClipboardCheck width={28} height={28} /></Link>
            <Link className="mb-6 p-3 hover:bg-[#9a9a9a] hover:rounded-full hover:text-blue-500 hover:bg-opacity-30 transition-inherit duration-200" to="/products"><Shop width={28} height={28} /></Link>
        </nav>
    );
}

export default Navbar;
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center rounded bg-indigo-800 px-8 py-3">
      <Link href={"/"} className="text-white font-bold">Task CRUD</Link>
      <Link href={"/task/add"} className="bg-white rounded p-2">Add Task</Link>
    </nav>
  );
};

export default Navbar;

"use client";

import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 pt-8 md:justify-normal">
        <div className="">logo</div>
        <h1 className="text-2xl font-extrabold">Ztocks</h1>

        <button
          className="rounded-full bg-gray-100 px-3 py-3 hover:bg-blue-100 md:hidden"
          onClick={() => {}}
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="mt-8 flex-grow">{/* LINKS HERE */}</div>

      {/* FOOTER */}
      <div className="">
        <p className="text-center text-xs text-gray-500">&copy; 2024 Ztocks</p>
      </div>
    </div>
  );
};
export default Sidebar;

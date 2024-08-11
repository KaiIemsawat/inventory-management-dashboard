"use client";

import { useAppDiapatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const dispatch = useAppDiapatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col bg-white transition-all
                            duration-300 overflow-hidden h-full shadow-md z-40
                            ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"}`;

  return (
    <div className={sidebarClassNames}>
      <div className="flex items-center justify-between gap-3 pt-8 md:justify-normal">
        <div className="">logo</div>
        <h1 className="text-2xl font-extrabold">Ztocks</h1>

        <button
          className="rounded-full bg-gray-100 px-3 py-3 hover:bg-blue-100 md:hidden"
          onClick={toggleSidebar}
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

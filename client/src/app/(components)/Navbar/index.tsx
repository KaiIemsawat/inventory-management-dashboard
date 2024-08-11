"use client";

import { useAppDiapatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useAppDiapatch();

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="mb-7 flex w-full items-center justify-between">
      {/* LEFT SIDE */}
      <div className="flex items-center justify-between gap-5">
        <button
          className="rounded-full bg-gray-100 px-3 py-3 hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="h-4 w-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Start type to search groups & products"
            className="w-50 rounded-lg border-2 border-gray-300 bg-white py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none md:w-60 lg:w-80"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-between gap-5">
        <div className="hidden items-center justify-between gap-5 md:flex">
          <div className="">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" />
            <span className="absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-red-400 px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100">
              3
            </span>
          </div>
          <hr className="mx-3 h-7 w-0 border border-l border-solid border-gray-300" />
          <div className="flex cursor-pointer items-center gap-3">
            <div className="h-9 w-9">image</div>
            <span className="font-semibold">Titann Zukkii</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

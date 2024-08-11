"use client";

import { useAppDiapatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`flex cursor-pointer items-center gap-3 py-4 transition-colors hover:bg-blue-100 hover:text-blue-500 ${
          isCollapsed ? "justify-center" : "justify-start px-8"
        } ${isActive ? "bg-blue-200 text-white" : ""}`}
      >
        <Icon className="h-6 w-6 !text-gray-700" />

        <span
          className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

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
      <div
        className={`flex items-center justify-between gap-3 pt-8 md:justify-normal ${isSidebarCollapsed ? "px-5" : "px-8"}`}
      >
        <div className="">logo</div>
        <h1
          className={`text-2xl font-extrabold ${isSidebarCollapsed ? "hidden" : "block"}`}
        >
          Ztocks
        </h1>

        <button
          className="rounded-full bg-gray-100 px-3 py-3 hover:bg-blue-100 md:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="mt-8 flex-grow">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* FOOTER */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">&copy; 2024 Ztocks</p>
      </div>
    </div>
  );
};
export default Sidebar;

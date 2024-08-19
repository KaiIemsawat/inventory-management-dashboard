"use client";

import { useGetProductsQuery } from "@/state/api";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery(searchTerm);

  if (isLoading) {
    return <div className="py-4 text-center">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="py-4 text-center text-red-500">Failed to fetch...</div>
    );
  }

  return (
    <div className="mx-auto w-full pb-5">
      {/* SEARCH BAR */}
      <div className="mb-6">
        <div className="flex items-center rounded border-2 border-gray-200">
          <SearchIcon className="m-2 h-5 w-5 text-gray-500" />
          <input
            className="w-full rounded bg-white px-4 py-2"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
export default Products;

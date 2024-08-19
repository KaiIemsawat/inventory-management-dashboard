"use client";

import { PlusCircleIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import Rating from "@/app/(components)/Rating";

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

      {/* HEADER BAR */}
      <div className="mb-6 flex items-center justify-between">
        <Header name="Products" />
        <button
          className="hover:bg.blue-700 flex items-center rounded bg-blue-500 px-4 py-2 font-bold text-gray-200"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircleIcon className="mr-2 h-5 w-5 !text-gray-200" /> Create
          Product
        </button>
      </div>

      {/* BODY PRODUCTS LIST */}
      <div className="sm:gird-cols-2 lg:gird-cols-3 grid grid-cols-1 justify-between gap-10">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          products?.map((product) => (
            <div
              key={product.productId}
              className="mx-auto w-full max-w-full rounded-md border p-4 shadow"
            >
              <div className="flex flex-col items-center">
                img
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-800">${product.price.toFixed(2)}</p>
                <div className="mt-1 text-sm text-gray-600">
                  Stock: {product.stockQuantity}
                </div>
                {product.rating && (
                  <div className="mt-2 flex items-center">
                    <Rating rating={product.rating} />
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Products;

"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(components)/Header";

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div className="py-4 text-center">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="py-4 text-center text-red-500">
        Failed to fetch products
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
    </div>
  );
};
export default Inventory;

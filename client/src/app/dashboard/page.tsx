"use client";

import CardPopularProducts from "./CardPopularProducts";

const Dashboard = () => {
  return (
    <div className="custom-grid-rows grid grid-cols-1 gap-10 pb-4 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto">
      <CardPopularProducts />
      <div className="row-span-3 bg-gray-500 xl:row-span-6" />
      <div className="col-span-1 row-span-2 bg-gray-500 md:col-span-2 xl:col-span-1 xl:row-span-3" />
      <div className="row-span-3 bg-gray-500" />
      <div className="bg-gray-500 md:row-span-1 xl:row-span-2" />
      <div className="bg-gray-500 md:row-span-1 xl:row-span-2" />
      <div className="bg-gray-500 md:row-span-1 xl:row-span-2" />
    </div>
  );
};
export default Dashboard;

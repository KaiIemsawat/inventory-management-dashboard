"use client";

import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";

const Dashboard = () => {
  return (
    <div className="custom-grid-rows grid grid-cols-1 gap-10 pb-4 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <div className="bg-gray-500 md:row-span-1 xl:row-span-2" />
      <div className="bg-gray-500 md:row-span-1 xl:row-span-2" />
      <div className="bg-gray-500 md:row-span-1 xl:row-span-2" />
    </div>
  );
};
export default Dashboard;

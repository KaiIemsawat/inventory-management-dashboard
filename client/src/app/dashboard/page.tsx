"use client";

import { Package, TrendingDown, TrendingUp } from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className="custom-grid-rows grid grid-cols-1 gap-10 pb-4 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Customer & Expense"
        primaryIcon={<Package className="h-6 w-6 text-blue-600" />}
        dateRange="22 - 29 October 2023"
        details={[
          {
            title: "Customer Growth",
            amount: "175.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Expenses",
            amount: "10.00",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <div className="bg-gray-500 md:row-span-1 xl:row-span-2" />
      <div className="bg-gray-500 md:row-span-1 xl:row-span-2" />
    </div>
  );
};
export default Dashboard;

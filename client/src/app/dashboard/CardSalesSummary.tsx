import { useGetDashboardMetricsQuery } from "@/state/api";
import { TrendingUp } from "lucide-react";
import { useState } from "react";

type Props = {};
const CardSalesSummary = () => {
  const { data, isLoading, isError } = useGetDashboardMetricsQuery();
  const saleData = data?.salesSummary || [];

  const [timeframe, setTimeframe] = useState("weekly");

  const totalValueSum =
    saleData.reduce((acc, curr) => acc + curr.totalValue, 0) || 0;

  const averageChangePercentage =
    saleData.reduce((acc, curr, _, array) => {
      return acc + curr.changePercentage! / array.length;
    }, 0) || 0;

  if (isError) {
    return <div className="m-5">Failed to fetch data</div>;
  }

  return (
    <div className="row-span-3 flex flex-col justify-between rounded-2xl bg-white shadow-md xl:row-span-6">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <div>
            <h2 className="mb-2 px-7 pt-5 text-lg font-semibold">
              Sales Summary
            </h2>
          </div>

          {/* BODY */}
          <div>
            {/* BODY HEADER */}
            <div className="mb-6 flex items-center justify-between px-7">
              <div className="text-lg font-medium">
                <p className="text-xs text-gray-400">Value</p>
                <span className="text-2xl font-extrabold">
                  {(totalValueSum / 1000000).toLocaleString("en", {
                    maximumFractionDigits: 2,
                  })}
                  m
                </span>
                <span className="ml-2 text-sm text-green-500">
                  <TrendingUp className="mr-1 inline h-4 w-4" />
                  {averageChangePercentage.toFixed(2)}
                </span>
              </div>
              <select
                className="rounded border border-gray-300 bg-white p-2 shadow-sm"
                value={timeframe}
                onChange={(e) => {
                  setTimeframe(e.target.value);
                }}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default CardSalesSummary;

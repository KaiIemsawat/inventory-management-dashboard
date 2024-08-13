import { useGetDashboardMetricsQuery } from "@/state/api";
import { TrendingDown, TrendingUp } from "lucide-react";
import numeral from "numeral";

const CardPurchaseSummary = () => {
  const { data, isLoading } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary || [];

  const lastDataPoint = purchaseData[purchaseData.length - 1] || null;
  return (
    <div className="col-span-1 row-span-2 flex flex-col justify-between rounded-2xl bg-white shadow-md md:col-span-2 xl:col-span-1 xl:row-span-3">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <div>
            <h2 className="mb-2 px-7 pt-5 text-lg font-semibold">
              Purchase Summary
            </h2>
          </div>

          {/* BODY HEADER */}
          <div>
            <div className="mb-4 mt-7 px-7">
              <div className="flex items-center">
                <p className="text-2xl font-bold">
                  {lastDataPoint
                    ? numeral(lastDataPoint.totalPurchased).format("$0.00a")
                    : "0"}
                </p>
                {lastDataPoint && (
                  <p
                    className={`ml-3 flex text-sm ${
                      lastDataPoint.changePercentage! >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {lastDataPoint.changePercentage! >= 0 ? (
                      <TrendingUp className="mr-1 h-5 w-5" />
                    ) : (
                      <TrendingDown className="mr-1 h-5 w-5" />
                    )}
                    {Math.abs(lastDataPoint.changePercentage!)}%
                  </p>
                )}
              </div>
            </div>

            {/* CHART */}
          </div>
        </>
      )}
    </div>
  );
};
export default CardPurchaseSummary;

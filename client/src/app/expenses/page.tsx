"use client";

import { useMemo, useState } from "react";

import { useGetExpensesByCategoryQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { ClassNames } from "@emotion/react";

const Expenses = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const {
    data: expensesData,
    isLoading,
    isError,
  } = useGetExpensesByCategoryQuery();

  const expenses = useMemo(() => expensesData ?? [], [expensesData]);

  const ClassNames = {
    label: "block text-sm font-medium text-gray-700",
    selectInput:
      "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",
  };

  if (isLoading) {
    return <div className="py-4 text-center">Loading...</div>;
  }

  if (isError || !expensesData) {
    return (
      <div className="py-4 text-center text-red-500">
        Fail to fetch expenses data
      </div>
    );
  }

  return (
    <div>
      {/* HEADER */}
      <div className="mb-5">
        <Header name="Expenses" />
        <p className="text-sm text-gray-500">Expenses over time</p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="w-full rounded-lg bg-white p-6 shadow md:w-1/3">
          <h3 className="mb-4 text-lg font-semibold">
            Filter by Category and Date
          </h3>
          <div className="space-y-4">
            {/* CATEGORY */}
            <div>
              <label htmlFor="category" className={ClassNames.label}>
                Category
              </label>
              <select
                name="category"
                id="category"
                className={ClassNames.selectInput}
                defaultValue="all"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>All</option>
                <option>Office</option>
                <option>Professional</option>
                <option>Salaries</option>
              </select>
            </div>

            {/* START DATE */}
            <div>
              <label htmlFor="start-date" className={ClassNames.label}>
                Start Date
              </label>
              <input
                type="date"
                name="start-date"
                id="start-date"
                className={ClassNames.selectInput}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* END DATE */}
            <div>
              <label htmlFor="end-date" className={ClassNames.label}>
                End Date
              </label>
              <input
                type="date"
                name="end-date"
                id="end-date"
                className={ClassNames.selectInput}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Expenses;

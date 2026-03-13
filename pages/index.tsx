import SalesTarget from "@/components/Dashboard/SalesTarget";
import TopProduct from "@/components/Dashboard/TopProduct";
import HeaderTitle from "@/components/HeaderTitle";
import useDashboard from "@/hooks/useDashboard";
import { NextPageWithAuth } from "@/types";
import { useRef } from "react";

const DashboardPage: NextPageWithAuth = () => {
  const monthlyRef = useRef<HTMLDivElement | null>(null);

  const {
    saleTargetTime,
    isMonthlyToggle,
    isOverviewMonthlyToggle,
    handleMonthlyToggle,
    handleOverviewMonthlyToggle,
  } = useDashboard();

  return (
    <>
      <div className="text-black w-full lg:w-[74%] bg-amber-200 rounded-2xl p-4">
        <HeaderTitle
          label='Overview'
          handleMonthlyToggle={handleOverviewMonthlyToggle}
          saleTargetTime={saleTargetTime}
          isMonthlyToggle={isOverviewMonthlyToggle}
          monthlyRef={monthlyRef}
          isDropdow={true}
        />
      </div>

      <div className="text-black w-full lg:w-[26%] rounded-2xl flex flex-col gap-4">
        <SalesTarget
          label='Sales target'
          handleMonthlyToggle={handleMonthlyToggle}
          saleTargetTime={saleTargetTime}
          isMonthlyToggle={isMonthlyToggle}
          monthlyRef={monthlyRef}
        />
        <TopProduct
          label='Top product'
          handleMonthlyToggle={handleMonthlyToggle}
          saleTargetTime={saleTargetTime}
          isMonthlyToggle={isMonthlyToggle}
          monthlyRef={monthlyRef}
        />
      </div>
    </>
  );
};

DashboardPage.requiresAuth = true;
export default DashboardPage;

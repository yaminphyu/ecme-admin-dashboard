import { NextPageWithAuth } from "@/types";

const DashboardPage: NextPageWithAuth = () => {
  return (
    <div className="w-full min-h-screen flex">
      <div className="flex justify-evenly w-full h-full p-10">
        <h2 className="text-red-600">Dashboard</h2>
      </div>
    </div>
  )
};

DashboardPage.requiresAuth = true;

export default DashboardPage;

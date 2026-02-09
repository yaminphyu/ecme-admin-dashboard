import { logout } from "@/modules/auth/auth.service";
import { NextPageWithAuth } from "@/types";

const DashboardPage: NextPageWithAuth = () => {
  return (
    <div className="w-full min-h-screen flex">
      <div className="flex justify-evenly w-full h-full p-10">
        <h2 className="text-red-600">Dashboard</h2>
        <button
          onClick={logout}
          className="px-2 py-1 rounded-md bg-gray-600 text-white flex justify-center items-center cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  )
};

DashboardPage.requiresAuth = true;

export default DashboardPage;

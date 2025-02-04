import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";
import DashboardPage from "./page";

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <h1 className="gradient-title text-6xl font-bold mb-5"> Dashboard</h1>

      {/* Dashboard */}
      <Suspense
        fallback={<BarLoader className="mt-4 width={100} color={#9333ea}" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;

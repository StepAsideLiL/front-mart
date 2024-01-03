import DashboardSidenav from "@/components/templates/dashboard-sidenav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex container gap-10">
      <DashboardSidenav />

      {children}
    </div>
  );
};

export default DashboardLayout;

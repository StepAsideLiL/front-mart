import DashboardSidenav from "@/components/templates/dashboard-sidenav";
import { Separator } from "@/components/ui/separator";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex container gap-10">
      <div className="">
        <DashboardSidenav />
      </div>

      {children}
    </div>
  );
};

export default DashboardLayout;

import DashboardSidenav from "@/components/templates/dashboard-sidenav";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/uis/logo";
import ResizableSidebar from "@/components/uis/resizable-sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border m-2 rounded-xl">
      <ResizableSidebar
        sidebar={
          <div>
            <div className="h-14">
              <Logo variant="name-link" />
            </div>

            <Separator />

            <DashboardSidenav />
          </div>
        }
      >
        {children}
      </ResizableSidebar>
    </div>
  );
};

export default DashboardLayout;

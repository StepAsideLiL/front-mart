import Breadcrumbs from "@/components/templates/breadcrumbs";
import DashboardSidenav from "@/components/templates/dashboard-sidenav";
import Main from "@/components/uis/main";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex md:flex-row flex-col container md:gap-10 gap-1">
      <div className="flex items-center gap-5 md:block">
        <DashboardSidenav />

        <div className="block md:hidden">
          <Breadcrumbs />
        </div>
      </div>

      <Main variant={"dashboard"} className="flex-1 pb-10">
        <div className="md:block hidden">
          <Breadcrumbs />
        </div>

        {children}
      </Main>
    </div>
  );
};

export default DashboardLayout;

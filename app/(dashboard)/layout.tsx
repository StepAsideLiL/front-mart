import Breadcrumbs from "@/components/templates/breadcrumbs";
import DashboardSidenav from "@/components/templates/dashboard-sidenav";
import Main from "@/components/uis/main";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardSidenav />

      <Main variant={"dashboard"} className="px-10 ml-16">
        <div className="md:block hidden">
          <Breadcrumbs />
        </div>

        {children}
      </Main>
    </div>
  );
};

export default DashboardLayout;

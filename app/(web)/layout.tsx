import Footer from "@/components/common-layout/footer";
import Navbar from "@/components/common-layout/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
};

export default Layout;

import Footer from "@/components/common-layout/footer";
import Navbar from "@/components/common-layout/navbar";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
};

export default ProfileLayout;

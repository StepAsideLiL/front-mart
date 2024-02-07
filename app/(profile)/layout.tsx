import Footer from "@/components/templates/footer";
import Navbar from "@/components/templates/navbar";

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

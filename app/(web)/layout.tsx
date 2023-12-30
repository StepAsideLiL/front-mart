import Footer from "@/components/templates/footer";
import Navbar from "@/components/templates/navbar";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};

export default WebLayout;

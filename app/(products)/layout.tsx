import Footer from "@/components/common-layout/footer";
import Navbar from "@/components/common-layout/navbar";
import { Cd } from "@/lib/types";

const ProductsLayout = ({ children }: Cd) => {
  return (
    <div>
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};

export default ProductsLayout;

import Footer from "@/components/templates/footer";
import Navbar from "@/components/templates/navbar";
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

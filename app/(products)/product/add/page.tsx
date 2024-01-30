import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import AddProductForm from "./_parts/add-product-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Product",
};

const AddNewProductPage = () => {
  return (
    <Main variant={"xl"}>
      <section>
        <Title>Add New Product</Title>
      </section>

      <section>
        <AddProductForm />
      </section>
    </Main>
  );
};

export default AddNewProductPage;

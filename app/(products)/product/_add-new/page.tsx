import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import AddProductForm from "./_parts/add-product-form";

const AddNewProductPage = () => {
  return (
    <Main variant={"xl"}>
      <section>
        <Title>Add New</Title>
      </section>

      <section>
        <AddProductForm />
      </section>
    </Main>
  );
};

export default AddNewProductPage;

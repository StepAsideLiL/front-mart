import AddProductForm from "@/components/forms/add-product";
import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import React from "react";

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

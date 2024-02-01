import Title from "@/components/uis/title";
import CreateDummyProductBtns from "./_parts/create-dummy-product-btns";

const DevPage = () => {
  return (
    <>
      <section>
        <Title variant={"xl"}>Dev Environment</Title>
      </section>

      <section className="space-y-5">
        <section className="p-3 border space-y-5">
          <h1 className="text-lg font-semibold">Create Dummy Product</h1>

          <CreateDummyProductBtns />
        </section>
      </section>
    </>
  );
};

export default DevPage;

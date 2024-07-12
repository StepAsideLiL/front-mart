import Title from "@/components/uis/title";
import CreateDummyProductBtns from "./_parts/create-dummy-product-btns";
import CreateDummyOrderBtns from "./_parts/create-dummy-order-btns";
import DummyProductAmount from "./_parts/dummy-product-amount";
import DummyOrderAmount from "./_parts/dummy-order-amount";

const DevPage = () => {
  return (
    <>
      <section>
        <Title variant={"xl"}>Dev Environment</Title>
      </section>

      <section className="space-y-5">
        <section className="p-3 border space-y-5">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">Create Dummy Products</h1>
            <DummyProductAmount />
          </div>

          <CreateDummyProductBtns />
        </section>

        <section className="p-3 border space-y-5">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">Create Dummy Orders</h1>
            <DummyOrderAmount />
          </div>

          <CreateDummyOrderBtns />
        </section>
      </section>
    </>
  );
};

export default DevPage;

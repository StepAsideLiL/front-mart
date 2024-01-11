import Main from "@/components/uis/main";

const CheckoutPage = ({ searchParams }: { searchParams: { cart: string } }) => {
  return <Main variant={"container"}>CheckoutPage {searchParams.cart}</Main>;
};

export default CheckoutPage;

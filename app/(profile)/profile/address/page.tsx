import Main from "@/components/uis/main";
import { Metadata } from "next";
import UpdateUserAddressFrom from "./_parts/update-user-address-form";
import { user } from "@/lib/data/user";
import Title from "@/components/uis/title";

export const metadata: Metadata = {
  title: "Edit Address",
};

const UserAddressPage = async () => {
  const addressInfo = await user.getUserAddress();

  return (
    <Main variant={"container"} className="max-w-2xl mx-auto">
      <Title variant={"xl2"}>Add & Edit Address</Title>

      <UpdateUserAddressFrom
        address={addressInfo?.address || ""}
        zipCode={addressInfo?.zipCode || ""}
        city={addressInfo?.city || ""}
        country={addressInfo?.country || ""}
      />
    </Main>
  );
};

export default UserAddressPage;

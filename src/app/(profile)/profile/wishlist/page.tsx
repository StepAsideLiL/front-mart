import Main from "@/components/uis/main";
import Title from "@/components/uis/title";
import { Metadata } from "next";
import { Suspense } from "react";
import UserWishlistTable from "./_parts/user-wishlist-table";

export const metadata: Metadata = {
  title: "User's Wish List",
};

const UserWishlistPage = () => {
  return (
    <Main variant={"profile"}>
      <Title variant={"xl2"}>Your Wish List</Title>

      <Suspense fallback={"loading..."}>
        <UserWishlistTable />
      </Suspense>
    </Main>
  );
};

export default UserWishlistPage;

import Title from "@/components/uis/title";
import { Suspense } from "react";
import UserList from "./_parts/user-list";

const UsersPage = () => {
  return (
    <>
      <Title variant={"xl"}>Users</Title>

      <Suspense fallback={"loading..."}>
        <UserList />
      </Suspense>
    </>
  );
};

export default UsersPage;

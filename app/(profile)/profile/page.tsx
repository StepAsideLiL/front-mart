import { Button } from "@/components/ui/button";
import Main from "@/components/uis/main";
import { Edit } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import UserAddress from "./_parts/user-address";
import { Separator } from "@/components/ui/separator";
import UserOrder from "./_parts/user-order";
import UserWishlist from "./_parts/user-wishlist";
import { getCurrentUser } from "@/components/app-components/lucia-authentication/auth";
import UserAvatar from "@/components/app-components/lucia-authentication/ui-components/user-avatar";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "User Profile",
};

const Page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/");
  }

  return (
    <Main variant={"profile"}>
      <section className="flex justify-between items-center gap-2">
        <section className="flex items-center gap-2">
          <UserAvatar />

          <div>
            <h1 className="font-medium">{currentUser.username}</h1>
          </div>
        </section>

        <section>
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link href={"/profile/edit"} className="inline-block">
              <span className="sr-only">Edit Profile</span>
              <Edit />
            </Link>
          </Button>
        </section>
      </section>

      <Separator orientation="horizontal" />

      <section className="space-y-4">
        <h1 className="font-semibold">Your Address</h1>

        <Suspense fallback={"loading..."}>
          <UserAddress />
        </Suspense>
      </section>

      <Separator orientation="horizontal" />

      <section className="space-y-4">
        <h1 className="font-semibold">Your Orders</h1>

        <Suspense fallback={"loading..."}>
          <UserOrder />
        </Suspense>
      </section>

      <Separator orientation="horizontal" />

      <section className="space-y-4">
        <h1 className="font-semibold">Your Wish List</h1>

        <Suspense fallback={"loading..."}>
          <UserWishlist />
        </Suspense>
      </section>
    </Main>
  );
};

export default Page;

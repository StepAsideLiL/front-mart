import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Main from "@/components/uis/main";
import { currentUser } from "@clerk/nextjs";
import { Edit } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import UserAddress from "./_parts/user-address";
import { Separator } from "@/components/ui/separator";
import UserOrder from "./_parts/user-order";
import UserWishlist from "./_parts/user-wishlist";

export const metadata: Metadata = {
  title: "User Profile",
};

const UserProfilePage = async () => {
  const user = await currentUser();

  return (
    <Main variant={"profile"}>
      <section className="flex justify-between items-center gap-2">
        <section className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>{user?.firstName || "U"}</AvatarFallback>
          </Avatar>

          <div>
            <h1 className="font-medium">
              {user?.firstName && user?.lastName
                ? `${user?.firstName} ${user?.lastName}`
                : "(No Name)"}
            </h1>
            <p className="text-muted-foreground">{user?.username}</p>
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

export default UserProfilePage;

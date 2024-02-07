"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import UserAvatar from "@/components/uis/user-avatar";
import {
  BookHeart,
  CircleUser,
  Gift,
  LayoutDashboard,
  ListOrdered,
  PackagePlus,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const dashboardMenu1 = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard strokeWidth={"1px"} width={"20px"} />,
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: <Gift strokeWidth={"1px"} width={"20px"} />,
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: <ListOrdered strokeWidth={"1px"} width={"20px"} />,
  },
];

const dashboardMenu2 = [
  {
    title: "Add Product",
    href: "/product/add-new",
    icon: <PackagePlus strokeWidth={"1px"} width={"20px"} />,
  },
];

const userMenu1 = [
  {
    title: "Profile",
    href: "/profile",
    icon: <CircleUser strokeWidth={"1px"} width={"20px"} />,
  },
  {
    title: "Orders",
    href: "/profile/orders",
    icon: <ListOrdered strokeWidth={"1px"} width={"20px"} />,
  },
  {
    title: "Wishlist",
    href: "/profile/wishlist",
    icon: <BookHeart strokeWidth={"1px"} width={"20px"} />,
  },
];

const AvatarMenu = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <UserAvatar src={user?.imageUrl || ""} name={user?.fullName || "U"} />
      </SheetTrigger>

      <SheetContent className="space-y-2">
        <SheetHeader>
          <div className="flex gap-1">
            <UserAvatar
              src={user?.imageUrl || ""}
              name={user?.fullName || "U"}
            />

            <div className="text-sm">
              <h1 className="font-semibold">
                {user?.firstName && user?.lastName
                  ? `${user?.firstName} ${user?.lastName}`
                  : "(No Name)"}
              </h1>
              <p className="text-foreground">{user?.username}</p>
            </div>
          </div>
        </SheetHeader>

        <div>
          {/* Admin Menu */}
          {user?.publicMetadata?.role === "admin" && (
            <div className="p-1">
              <h1 className="p-2 text-lg font-semibold">Dashboard Menu</h1>

              <nav className="flex-col gap-1 flex">
                {dashboardMenu1.map((menu) => (
                  <Link
                    key={menu.href}
                    href={menu.href}
                    className={cn(
                      "flex gap-2 p-2 hover:bg-accent rounded items-center"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <span>{menu.icon}</span>
                    <span>{menu.title}</span>
                  </Link>
                ))}
              </nav>

              <div className="py-1">
                <Separator orientation="horizontal" />
              </div>

              <nav className="flex-col gap-1 flex">
                {dashboardMenu2.map((menu) => (
                  <Link
                    key={menu.href}
                    href={menu.href}
                    className={cn(
                      "flex gap-2 p-2 hover:bg-accent rounded items-center"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <span>{menu.icon}</span>
                    <span>{menu.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          )}

          {/* User Menu */}
          <div className="p-1">
            <h1 className="p-2 text-lg font-semibold">User Menu</h1>

            <nav className="flex-col gap-1 flex">
              {userMenu1.map((menu) => (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className={cn(
                    "flex gap-2 p-2 hover:bg-accent rounded items-center"
                  )}
                  onClick={() => setOpen(false)}
                >
                  <span>{menu.icon}</span>
                  <span>{menu.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <SignOutButton>
          <Button className="w-full" onClick={() => setOpen(false)}>
            Sign Out
          </Button>
        </SignOutButton>
      </SheetContent>
    </Sheet>
  );
};

const ActiveLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={cn("flex gap-2 p-2 hover:bg-accent rounded items-center")}
    >
      {children}
    </Link>
  );
};

export default AvatarMenu;

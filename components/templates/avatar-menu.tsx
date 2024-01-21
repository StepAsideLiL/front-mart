"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
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
import { UserInfo } from "@/lib/user";

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
    href: "/user",
    icon: <CircleUser strokeWidth={"1px"} width={"20px"} />,
  },
  {
    title: "Orders",
    href: "/user/orders",
    icon: <ListOrdered strokeWidth={"1px"} width={"20px"} />,
  },
  {
    title: "Wishlist",
    href: "/user/wishlist",
    icon: <BookHeart strokeWidth={"1px"} width={"20px"} />,
  },
];

const AvatarMenu = ({ user }: { user: UserInfo }) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <UserAvatar src={user?.imageUrl || ""} name={user!.name} />
      </SheetTrigger>

      <SheetContent className="space-y-2">
        <SheetHeader>
          <div className="flex gap-1">
            <UserAvatar src={user?.imageUrl || ""} name={user!.name} />

            <div className="text-sm">
              <h1 className="font-semibold">{user?.name}</h1>
              <p className="text-foreground">{user?.username}</p>
            </div>
          </div>

          <SheetDescription>{user?.bio}</SheetDescription>
        </SheetHeader>

        <div>
          {/* Admin Menu */}
          {user?.role === "admin" && (
            <div className="p-1">
              <h1 className="p-2 text-lg font-semibold">Dashboard Menu</h1>

              <nav className="flex-col gap-1 flex">
                {dashboardMenu1.map((menu) => (
                  <ActiveLink key={menu.href} href={menu.href}>
                    <span>{menu.icon}</span>
                    <span>{menu.title}</span>
                  </ActiveLink>
                ))}
              </nav>

              <div className="py-1">
                <Separator orientation="horizontal" />
              </div>

              <nav className="flex-col gap-1 flex">
                {dashboardMenu2.map((menu) => (
                  <ActiveLink key={menu.href} href={menu.href}>
                    <span>{menu.icon}</span>
                    <span>{menu.title}</span>
                  </ActiveLink>
                ))}
              </nav>
            </div>
          )}

          {/* User Menu */}
          <div className="p-1">
            <h1 className="p-2 text-lg font-semibold">User Menu</h1>

            <nav className="flex-col gap-1 flex">
              {userMenu1.map((menu) => (
                <ActiveLink key={menu.href} href={menu.href}>
                  <span>{menu.icon}</span>
                  <span>{menu.title}</span>
                </ActiveLink>
              ))}
            </nav>
          </div>
        </div>
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

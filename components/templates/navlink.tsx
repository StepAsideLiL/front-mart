"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "hello",
    href: "/hello",
  },
];

const Navlink = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <ActiveLink
          key={link.href}
          href={link.href}
          active={pathname === link.href ? true : false}
        >
          {link.title}
        </ActiveLink>
      ))}
    </>
  );
};

const ActiveLink = ({
  children,
  href,
  active = false,
}: {
  children: string;
  href: string;
  active?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "hover:text-primary text-muted-foreground font-medium",
        active && "text-primary"
      )}
    >
      {children}
    </Link>
  );
};

export default Navlink;

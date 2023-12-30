import React from "react";
import { ModeToggle } from "@/components/templates/mode-toggle";
import LinkingLogo from "@/components/uis/linking-logo";
import Navlink from "./navlink";
import { Separator } from "../ui/separator";

const Navbar = () => {
  return (
    <header className="container py-5 flex justify-between items-center">
      <nav className="flex items-center gap-3 h-8">
        <LinkingLogo />

        <Separator orientation="vertical" />

        <Navlink />
      </nav>

      <ModeToggle />
    </header>
  );
};

export default Navbar;

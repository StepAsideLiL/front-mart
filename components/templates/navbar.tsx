import React from "react";
import { ModeToggle } from "@/components/templates/mode-toggle";
import LinkingLogo from "@/components/uis/linking-logo";

const Navbar = () => {
  return (
    <header className="container py-5 flex justify-between items-center">
      <LinkingLogo />

      <ModeToggle />
    </header>
  );
};

export default Navbar;

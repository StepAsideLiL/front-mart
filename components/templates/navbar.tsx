import React from "react";
import { ModeToggle } from "@/components/templates/mode-toggle";
import Navlink from "./navlink";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import AvatarMenu from "./avatar-menu";
import Logo from "@/components/uis/logo";
import SigninMenu from "./signin-menu";

const Navbar = () => {
  return (
    <header className="container py-5 flex justify-between items-center">
      <nav className="flex items-center gap-3 h-8">
        <Logo variant="link" />

        <Separator orientation="vertical" />

        <Navlink />
      </nav>

      <div className="flex items-center gap-3 h-8">
        <ModeToggle />

        <Separator orientation="vertical" />

        <SigninMenu />

        <AvatarMenu />
      </div>
    </header>
  );
};

export default Navbar;

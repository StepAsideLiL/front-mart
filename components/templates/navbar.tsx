import { ModeToggle } from "@/components/templates/mode-toggle";
import Navlink from "./navlink";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/uis/logo";
import Cart from "./cart";
import LoginAndUserAvatar from "./login-avatar";

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

        <Cart />

        <LoginAndUserAvatar />
      </div>
    </header>
  );
};

export default Navbar;

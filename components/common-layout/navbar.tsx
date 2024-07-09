import AuthMenu from "../app-components/lucia-authentication/ui-components/auth-menu";
import Cart from "../templates/cart";
import { ModeToggle } from "../templates/mode-toggle";
import Navlink from "../templates/navlink";
import { Separator } from "../ui/separator";
import Logo from "../uis/logo";

export default function Navbar() {
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

        <AuthMenu />
      </div>
    </header>
  );
}

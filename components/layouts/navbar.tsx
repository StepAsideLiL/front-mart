import Cart from "@/components/templates/cart";
import Navlink from "@/components/templates/navlink";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/uis/logo";
import { ModeToggle } from "@/src/features/dark-mode/ui/mode-toggle";
import AuthMenu from "@/src/features/lucia-auth/ui/auth-menu";

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

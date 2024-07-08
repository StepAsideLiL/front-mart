import Cart from "@/components/templates/cart";
import { ModeToggle } from "@/components/templates/mode-toggle";
import Navlink from "@/components/templates/navlink";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/uis/logo";
import Link from "next/link";

const date = new Date();
const year = date.getFullYear();

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
        </div>
      </header>

      {children}

      <footer>
        <div className="flex items-center justify-center px-6 py-10 text-sm">
          <span className="dark:text-gray-400">
            © Copyright {year}. All Rights Reserved{" "}
            <Link
              href={"https://github.com/stepasidelil"}
              target="_blank"
              className="underline"
            >
              Rifat Khan
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Layout;

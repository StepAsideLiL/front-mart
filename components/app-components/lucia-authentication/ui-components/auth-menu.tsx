import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUser } from "../auth";
import { Pen, User } from "lucide-react";
import Link from "next/link";
import LogoutBtn from "./logout-btn";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default async function AuthMenu() {
  const user = await getUser();

  if (!user) {
    return (
      <div>
        <Menu />
      </div>
    );
  }

  return (
    <div>
      <ProfileMenu />
    </div>
  );
}

function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <User />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem className="hover:cursor-pointer" asChild>
          <Link href={"/auth/sign-in"}>Sign In</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer" asChild>
          <Link href={"/auth/sign-up"}>Sign Up</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ProfileMenu() {
  return (
    <Popover>
      <PopoverTrigger>
        <Pen />
      </PopoverTrigger>

      <PopoverContent>
        <LogoutBtn />
      </PopoverContent>
    </Popover>
  );
}

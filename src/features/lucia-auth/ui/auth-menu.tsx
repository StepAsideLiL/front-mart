import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCurrentUser } from "../auth";
import { Pen, User } from "lucide-react";
import Link from "next/link";
import LogoutBtn from "./logout-btn";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import UserAvatar from "./user-avatar";

export default async function AuthMenu() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
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
        <UserAvatar />
      </PopoverTrigger>

      <PopoverContent className="space-y-4">
        <div className="flex w-full gap-1">
          <Button className="w-full" asChild>
            <Link href={"/profile"}>View Profile</Link>
          </Button>

          <Button variant={"outline"} className="w-full" asChild>
            <Link href={"/profile/edit"}>Edit Profile</Link>
          </Button>
        </div>

        <LogoutBtn className="w-full" />
      </PopoverContent>
    </Popover>
  );
}

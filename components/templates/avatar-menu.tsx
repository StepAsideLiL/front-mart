"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import UserAvatar from "../uis/user-avatar";

const AvatarMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <UserAvatar />
      </SheetTrigger>

      <SheetContent className="space-y-2">
        <SheetHeader>
          <div className="flex gap-1">
            <UserAvatar />

            <div className="text-sm">
              <h1 className="font-semibold">name</h1>
              <p className="text-foreground">username</p>
            </div>
          </div>

          <SheetDescription>bio</SheetDescription>
        </SheetHeader>

        <div></div>
      </SheetContent>
    </Sheet>
  );
};

export default AvatarMenu;

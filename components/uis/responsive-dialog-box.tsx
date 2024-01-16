"use client";

import { Button } from "@/components/ui/button";
import { useMedia } from "react-use";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

const ResponsiveDialogBox = ({
  triggerBtn,
  title,
  description,
  content,
  cancelBtn = <Button variant="outline">Cancel</Button>,
}: {
  triggerBtn: React.ReactNode;
  title?: string;
  description?: string;
  content: React.ReactNode;
  cancelBtn?: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMedia("(min-width: 640px)");

  console.log(isDesktop);

  // return <Button variant={"destructive"}>Remove Product</Button>;
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{triggerBtn}</DialogTrigger>

        <DialogContent>
          {(title || description) && (
            <DialogHeader>
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
            </DialogHeader>
          )}

          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{triggerBtn}</DrawerTrigger>
      <DrawerContent>
        {(title || description) && (
          <DrawerHeader className="text-left">
            {title && <DrawerTitle>{title}</DrawerTitle>}
            {description && (
              <DrawerDescription>{description}</DrawerDescription>
            )}
          </DrawerHeader>
        )}

        {content}

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>{cancelBtn}</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ResponsiveDialogBox;

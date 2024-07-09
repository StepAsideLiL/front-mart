"use client";

import { Button } from "@/components/ui/button";
import { logoutUser } from "../actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LogoutBtn({ className }: { className?: string }) {
  const router = useRouter();

  async function handleLogout() {
    const res = await logoutUser();
    if (res.success) {
      toast.success(res.message);
      router.push("/auth/sign-in");
    }
  }

  return (
    <Button
      variant={"outline"}
      onClick={handleLogout}
      className={cn(className)}
    >
      Logout
    </Button>
  );
}

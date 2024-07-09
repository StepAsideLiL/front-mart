"use client";

import { Button } from "@/components/ui/button";
import { logoutUser } from "../actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LogoutBtn() {
  const router = useRouter();

  async function handleLogout() {
    const res = await logoutUser();
    if (res.success) {
      toast.success(res.message);
      router.push("/auth/sign-in");
    }
  }

  return (
    <Button variant={"outline"} onClick={handleLogout}>
      Logout
    </Button>
  );
}

import { Button } from "@/components/ui/button";
import { logout } from "../actions";

export default function Logout() {
  return (
    <form onClick={logout}>
      <Button variant={"outline"}>Logout</Button>
    </form>
  );
}

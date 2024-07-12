import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCurrentUser } from "../auth";

const UserAvatar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Avatar>
      <AvatarImage src={""} />
      <AvatarFallback>
        {currentUser ? currentUser.username[0].toUpperCase() : "n"}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;

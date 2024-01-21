import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = ({ src, name }: { src: string; name: string }) => {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;

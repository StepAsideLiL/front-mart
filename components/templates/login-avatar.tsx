import AvatarMenu from "./avatar-menu";
import SigninMenu from "./signin-menu";
import { currentUser } from "@clerk/nextjs";

const LoginAndUserAvatar = () => {
  const user = currentUser();

  return <>{user !== null ? <AvatarMenu /> : <SigninMenu />}</>;
};

export default LoginAndUserAvatar;

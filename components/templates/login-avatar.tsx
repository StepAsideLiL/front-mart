import AvatarMenu from "./avatar-menu";
import SigninMenu from "./signin-menu";
import { currentUser } from "@clerk/nextjs/server";

const LoginAndUserAvatar = async () => {
  const user = await currentUser();

  return <>{user !== null ? <AvatarMenu /> : <SigninMenu />}</>;
};

export default LoginAndUserAvatar;

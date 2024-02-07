import AvatarMenu from "./avatar-menu";
import SigninMenu from "./signin-menu";
import { currentUser } from "@clerk/nextjs";

const LoginAndUserAvatar = async () => {
  const user = await currentUser();

  return <>{user !== null ? <AvatarMenu /> : <SigninMenu />}</>;
};

export default LoginAndUserAvatar;

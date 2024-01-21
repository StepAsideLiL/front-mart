import AvatarMenu from "./avatar-menu";
import SigninMenu from "./signin-menu";

const LoginAndUserAvatar = () => {
  const user = true;

  return <>{user ? <AvatarMenu /> : <SigninMenu />}</>;
};

export default LoginAndUserAvatar;

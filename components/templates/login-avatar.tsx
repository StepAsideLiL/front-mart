import { userInfo } from "@/lib/user";
import AvatarMenu from "./avatar-menu";
import SigninMenu from "./signin-menu";

const LoginAndUserAvatar = async () => {
  const user = await userInfo();

  return (
    <>
      {user?.username !== "" && user !== null ? (
        <AvatarMenu user={user} />
      ) : (
        <SigninMenu />
      )}
    </>
  );
};

export default LoginAndUserAvatar;

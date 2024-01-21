export type UserInfo = {
  username: string;
  name: string;
  role: string;
  bio: string;
} | null;

// Dummy user info
export const userInfo = async (): Promise<UserInfo> => {
  const user = {
    username: "thisisusername",
    name: "This Is Name",
    role: "admin",
    bio: "This is a bio...read and read.",
  };

  return user;
};

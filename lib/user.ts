export type UserInfo = {
  username: string;
  name: string;
  role: string;
  bio: string;
  imageId: string;
  imageUrl: string;
} | null;

// Dummy user info
export const userInfo = async (): Promise<UserInfo> => {
  const user = {
    username: "thisisusername",
    name: "This Is Name",
    role: "admin",
    bio: "This is a bio...read and read.",
    imageId: "qvu0kxpacsvpfxrxfgqo",
    imageUrl:
      "https://res.cloudinary.com/dni3ahk5v/image/upload/v1703049972/qvu0kxpacsvpfxrxfgqo.jpg",
  };

  return user;
};

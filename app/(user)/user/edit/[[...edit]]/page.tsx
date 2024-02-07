import { UserProfile } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile",
};

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <UserProfile path="/user/edit" routing="path" />
    </main>
  );
}

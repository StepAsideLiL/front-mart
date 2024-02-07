import { UserProfile } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <UserProfile path="/user/profile" routing="path" />
    </main>
  );
}

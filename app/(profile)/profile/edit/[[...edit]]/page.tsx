import EditProfileForm from "@/components/app-components/profile/forms/edit-profile";
import Title from "@/components/uis/title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile",
};

export default function Page() {
  return (
    <main className="min-h-screen container py-5 space-y-10">
      <section>
        <Title variant={"xl2"}>Edit Profile</Title>
      </section>

      <EditProfileForm />
    </main>
  );
}

import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";

const SignInSignUpButton = () => {
  const { userId } = auth();

  if (!userId) {
    return (
      <div className="px-10">
        <SignInButton mode="modal">
          <Button className="w-full">Sign In</Button>
        </SignInButton>
      </div>
    );
  }

  return null;
};

export default SignInSignUpButton;

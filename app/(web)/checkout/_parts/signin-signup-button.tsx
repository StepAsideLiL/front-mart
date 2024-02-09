import { SignInButton, auth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const SignInSignUpButton = () => {
  const { userId } = auth();

  if (!userId) {
    return (
      <div className="px-10">
        <SignInButton mode="modal" redirectUrl="">
          <Button className="w-full">Sign In</Button>
        </SignInButton>
      </div>
    );
  }

  return null;
};

export default SignInSignUpButton;

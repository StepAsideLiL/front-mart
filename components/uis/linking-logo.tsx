import Link from "next/link";
import Logo from "@/components/uis/logo";

const LinkingLogo = () => {
  return (
    <Link href={"/"}>
      <Logo />
    </Link>
  );
};

export default LinkingLogo;

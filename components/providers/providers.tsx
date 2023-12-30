import { ThemeProvider } from "./theme-provider";
import { Cd } from "@/lib/types";

const Providers = ({ children }: Cd) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;

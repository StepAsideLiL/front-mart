import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import Navbar from "@/components/templates/navbar";
import Providers from "@/components/providers/providers";

export const metadata: Metadata = {
  title: {
    template: "%s | Front Mart",
    default: "Front Mart",
  },
  description: "An e-commerce webservice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />

          {children}
        </Providers>
      </body>
    </html>
  );
}

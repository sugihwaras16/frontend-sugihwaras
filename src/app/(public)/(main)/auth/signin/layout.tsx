import type { Metadata } from "next";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "SignIn",
  description: "-",
};

export default function RootLayoutSign({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={mulish.className}>
        {children}
    </main>
  );
}

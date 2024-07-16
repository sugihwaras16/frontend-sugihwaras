import { authConfig } from "@/app/api/auth/[...nextauth]/auth";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "Sugih Waras",
    description: "-",
};

const AuthProvider = dynamic(() => import('@/app/components/authProvider'))
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authConfig)
    return (
        <main>
            <AuthProvider session={session!}>
                {children}
            </AuthProvider>
        </main>
    );
}

import type { Metadata } from "next";
import dynamic from "next/dynamic";

const DrawerSide = dynamic(() => import('@/app/components/admin/drawerside'))
const NavbarComponents = dynamic(() => import('@/app/components/admin/navbar'))

export const metadata: Metadata = {
    title: "Admin | Produk",
    description: "-",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <NavbarComponents />
                {children}
            </div>
            <DrawerSide />
        </div>
    );
}

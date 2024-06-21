import type { Metadata } from "next";
import dynamic from "next/dynamic";

const DrawerSide = dynamic(() => import('@/app/components/drawerside'))
const NavbarComponents = dynamic(() => import('@/app/components/navbar'))

export const metadata: Metadata = {
    title: "Sugih Waras",
    description: "-",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <NavbarComponents />
                {children}
                <footer className="footer footer-center mt-20 p-10 bg-blue-500 text-white rounded">
                    <aside>
                        <div className="py-5">
                            <h1 className="text-white uppercase font-bold">Prioritas Kami
                            </h1>
                            <p className="text-xs">Kami berfokus pada kepuasan pelanggan dan komitmen terhadap kualitas. Hubungi kami untuk memulai kerjasama yang sukses dan mendapatkan pakaian kustom berkualitas tinggi.</p>
                        </div>
                        <p>Sukamandi Mekar No. 17 Lembang - Bandung Barat</p>
                        <p>Copyright © 2024 - Sugih Waras</p>
                    </aside>
                </footer>
            </div>
            <DrawerSide />
        </div>
    );
}

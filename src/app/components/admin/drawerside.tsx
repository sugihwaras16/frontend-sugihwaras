import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"

const ButtonSignOut = dynamic (()=> import ("@/app/components/admin/signoutbutton"))

const DrawerSideAdmin = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-blue-500 text-white">
                <li><Link className="py-2 text-xl mt-10" href="/admin/produk">Produk</Link></li>
                <li><Link className="py-2 text-xl" href="/admin/kategori">Kategori</Link></li>
                <li><Link className="py-2 text-xl" href="/admin/pengguna">Pengguna</Link></li>
                <ButtonSignOut />
            </ul>
        </div>
    )
}
export default DrawerSideAdmin
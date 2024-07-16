import Image from "next/image"
import Link from "next/link"

const DrawerSide = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-white text-black">
                <li>
                    <a className="btn font-semibold uppercase text-black bg-transparent my-10 shadow-none border-none hover:border-none rounded-full">
                        <Image
                            src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718564304/IMG_0003_a39pei.png"
                            alt="logo"
                            width={40}
                            height={40}
                        />
                        Sugih Waras
                    </a>
                </li>
                <li><Link className="py-2 text-xl" href="/">Beranda</Link></li>
                <li><Link className="py-2 text-xl" href="/katalog">Katalog</Link></li>
                <li><Link className="py-2 text-xl" href="/kostum">Kostum</Link></li>
                <li><Link className="py-2 text-xl" href="/tentang">Tentang</Link></li>
            </ul>
        </div>
    )
}
export default DrawerSide
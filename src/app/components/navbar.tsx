import Image from "next/image"
import Link from "next/link"

const NavbarComponents = () => {
    return (
        <div className="navbar py-5 md:px-48 max-md:px-8 bg-white">
            <div className="navbar-start">
                <label htmlFor="my-drawer">
                    <a className="btn lg:hidden bg-transparent shadow-none border-none hover:border-none rounded-full">
                        <Image
                            src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718565964/menu_tvp5y5.png"
                            alt="menu"
                            width={25}
                            height={25}
                        />
                    </a>
                </label>
                <Link href="/beranda" className="btn bg-transparent max-lg:hidden shadow-none border-none hover:border-none rounded-full">
                    <Image
                        src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718564304/IMG_0003_a39pei.png"
                        alt="logo"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
            <div className="navbar-center lg:hidden">
                <Link href="/beranda" className="btn bg-transparent shadow-none border-none hover:border-none rounded-full">
                    <Image
                        src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718564304/IMG_0003_a39pei.png"
                        alt="logo"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Beranda</Link></li>
                    <li><Link href="/katalog">Katalog</Link></li>
                    <li><Link href="/kostum">Kostum</Link></li>
                    <li><Link href="/tentang">Tentang</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="/cari" className="btn bg-transparent shadow-none border-none hover:border-none rounded-full">
                    <Image
                        src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718565023/search-interface-symbol_bgjquk.png"
                        alt="search"
                        width={20}
                        height={20}
                    />
                </Link>
            </div>
        </div>
    )
}
export default NavbarComponents
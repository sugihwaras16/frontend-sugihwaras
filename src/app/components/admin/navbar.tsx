import Image from "next/image"
import Link from "next/link"

const NavbarAdminComponents = () => {
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
                <a className="btn bg-transparent max-lg:hidden shadow-none border-none hover:border-none rounded-full">
                    <Image
                        src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718564304/IMG_0003_a39pei.png"
                        alt="logo"
                        width={40}
                        height={40}
                    />
                </a>
            </div>
            <div className="navbar-center lg:hidden">
                <a className="btn bg-transparent shadow-none border-none hover:border-none rounded-full">
                    <Image
                        src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718564304/IMG_0003_a39pei.png"
                        alt="logo"
                        width={40}
                        height={40}
                    />
                </a>
            </div>
        </div>
    )
}
export default NavbarAdminComponents
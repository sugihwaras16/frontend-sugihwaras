import Image from "next/image"

const CardProduct = () => {
    return (
        <div className="card max-w-full mx-1 my-2 bg-white text-black border shadow-none">
            <figure><img src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718568704/id-11134207-7r98o-lmyf38i3ej7800_plodpl.jpg" alt="product" /></figure>
            <div className="card-body px-4">
                <h2 className="card-title font-bold text-sm line-clamp-2">
                    JERSEY SATPAM / KAOS DRI-FIT SATPAM TANGAN PENDEK / JERSEY SATPAM / KAOS SATPAM
                </h2>
                <div className="flex items-center space-x-1">
                    <Image 
                        src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718569552/star_w85rri.png"
                        alt="star"
                        width={20}
                        height={50}
                    />
                    <p className="text-black text-xs">4.5/5.0</p>
                </div>
                <p>Rp 89.000</p>
            </div>
        </div>
    )
}
export default CardProduct
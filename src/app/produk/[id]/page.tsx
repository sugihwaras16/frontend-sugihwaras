import Image from "next/image"

const DetailProduct = () => {
    return (
        <main className="w-full flex justify-center">
            <div>
                <div className="carousel carousel-center max-w-xl p-4 space-x-4 bg-white rounded-box">
                    <div className="carousel-item">
                        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                    </div>
                </div>
            </div>
            <div className="p-10 max-w-xl">
                <h1 className="font-bold text-xl line-clamp-2">
                    JERSEY SATPAM / KAOS DRI-FIT SATPAM TANGAN PENDEK / JERSEY SATPAM / KAOS SATPAM</h1>
                <p className="py-5 text-2xl">Rp 120.000</p>
                <div className="flex items-center space-x-1">
                    <Image
                        src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718569552/star_w85rri.png"
                        alt="star"
                        width={30}
                        height={50}
                    />
                    <p className="text-black text-md">4.5/5.0</p>
                </div>
                <div className="py-5">
                    <h1 className="font-bold text-md pb-2">Size</h1>
                    <div className="flex space-x-2">
                        <button className="btn px-8 rounded-3xl bg-blue-500 text-white">S</button>
                        <button className="btn px-8 rounded-3xl bg-white border-blue-500 border-2">M</button>
                        <button className="btn px-8 rounded-3xl bg-white border-blue-500 border-2">L</button>
                        <button className="btn px-8 rounded-3xl bg-white border-blue-500 border-2">XL</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default DetailProduct
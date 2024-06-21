import Image from "next/image"

const DetailProduct = () => {
    return (
        <main className="w-full md:flex justify-center">
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
            <div className="p-10 max-md:p-5 max-w-xl">
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
                    <h1 className="font-bold text-md pb-2">Size :</h1>
                    <div className="w-full md:flex md:space-x-2 max-md:space-x-2 max-md:space-y-2">
                        <button className="btn px-8 rounded-3xl bg-blue-500 text-white">S</button>
                        <button className="btn px-8 rounded-3xl bg-white border-blue-500 border-2">M</button>
                        <button className="btn px-8 rounded-3xl bg-white border-blue-500 border-2">L</button>
                        <button className="btn px-8 rounded-3xl bg-white border-blue-500 border-2">XL</button>
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="font-bold text-md pb-2">Pesan Melalui :</h1>
                    <div className="w-full md:flex md:space-x-2 max-md:space-y-2 max-md:space-x-1">
                        <button className="btn px-5 rounded-3xl bg-white border-green-600">
                            <Image
                                src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718875328/tokopedia_idwudl.png"
                                alt="shop"
                                height={20}
                                width={20}
                            />
                            <p className="text-green-600 font-semibold">Tokopedia</p>
                        </button>
                        <button className="btn px-5 rounded-3xl bg-white border-orange-600">
                            <Image
                                src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718875328/shopee_t6qr91.png"
                                alt="shop"
                                height={20}
                                width={20}
                            />
                            <p className="text-orange-600 font-semibold">Shopee</p>
                        </button>
                        <button className="btn px-5 rounded-3xl bg-white border-purple-800">
                            <Image
                                src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718875054/lazada_yrla1f.webp"
                                alt="shop"
                                height={20}
                                width={20}
                            />
                            <p className="text-purple-800 font-semibold">Lazada</p>
                        </button>
                    </div>
                </div>
                <div className="py-5">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi incidunt similique repellendus quaerat quidem, perspiciatis in omnis hic doloribus eligendi autem voluptates esse sapiente dolorum eos iste nulla voluptatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ipsam libero optio ratione autem illo dicta minus expedita enim error nulla laboriosam earum vel cupiditate at placeat itaque. Repudiandae, eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, illum cum. Cum quibusdam minima eaque. Quam nobis perferendis ut quae, architecto quis deleniti atque similique explicabo, laudantium voluptatum tempora delectus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores neque velit laboriosam labore error at consequuntur sequi, enim ipsam. Exercitationem amet vitae beatae ipsum? Aliquam, omnis! Nesciunt ipsum nisi cumque.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi incidunt similique repellendus quaerat quidem, perspiciatis in omnis hic doloribus eligendi autem voluptates esse sapiente dolorum eos iste nulla voluptatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ipsam libero optio ratione autem illo dicta minus expedita enim error nulla laboriosam earum vel cupiditate at placeat itaque. Repudiandae, eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, illum cum. Cum quibusdam minima eaque. Quam nobis perferendis ut quae, architecto quis deleniti atque similique explicabo, laudantium voluptatum tempora delectus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores neque velit laboriosam labore error at consequuntur sequi, enim ipsam. Exercitationem amet vitae beatae ipsum? Aliquam, omnis! Nesciunt ipsum nisi cumque.</p>
                </div>
            </div>
        </main>
    )
}
export default DetailProduct
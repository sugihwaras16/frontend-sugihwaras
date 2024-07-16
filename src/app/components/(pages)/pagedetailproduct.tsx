"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getDataProducts } from '@/app/(public)/(main)/produk/[id]/action';
import Decimal from 'decimal.js';

interface ProductData {
  imageProduct: {
    path: string;
  }[];
  title: string;
  rating: number;
  sizeProduct: {
    harga: number;
    size: string;
  }[];
  deskripsi: string;
  tokopediaPath: string;
  shopeePath: string;
  lazadaPath: string;
  tiktokPath: string;
  create_at: Date;
}


const DetailProductComponent = ({ id }: { id: string }) => {
  const [data, setData] = useState<ProductData | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number | Decimal>(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSizeClick = (size: string, price: number | Decimal) => {
    setSelectedPrice(price);
    setSelectedSize(size);
  };
  const handleImageClick = (path: string) => {
    setSelectedImage(path);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getDataProducts(id)
      if (data) {
        const convertedSizeProduct = data.sizeProduct.map((sizeProd: any) => ({
          ...sizeProd,
          harga: Number(sizeProd.harga)
        }));
        setData({ ...data, sizeProduct: convertedSizeProduct } as ProductData);
        setSelectedPrice(data?.sizeProduct[0].harga ?? 0)
        setSelectedSize(data?.sizeProduct[0].size ?? null)
        setSelectedImage(data?.imageProduct[0].path ?? null)
      }
    };

    getData()
  }, [id])

  try {
    return (
      <main className="w-full lg:flex max-lg:grid justify-center">
        <div className='max-lg:w-full px-5 justify-center'>
          <div className="w-64 h-64 mb-4">
            <img src={selectedImage ?? "https://res.cloudinary.com/dsqgejrzn/image/upload/v1721123650/sugih_waras_pzkg7y.webp"} alt="main" className="w-full rounded-lg h-full object-cover" />
          </div>
          <div className='flex space-x-2'>
            {data?.imageProduct.map((img, idx) => (
              <button
                key={idx}
                className={`w-16 h-16 border-2 ${selectedImage === img.path ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => handleImageClick(img.path)}
              >
                <img src={img.path} alt={`image-${idx}`} className="w-full rounded-lg h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="p-10 max-md:p-5 max-w-xl">
          <h1 className="font-bold text-xl line-clamp-2">{data?.title}</h1>
          <p className="py-5 text-2xl">Rp {Number(selectedPrice).toLocaleString('id-ID')}</p>
          <div className="flex items-center space-x-1">
            <Image
              src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718569552/star_w85rri.png"
              alt="star"
              width={30}
              height={50}
            />
            <p className="text-black text-md">{data?.rating}/5.0</p>
          </div>
          <div className="py-5">
            <h1 className="font-bold text-md pb-2">Size :</h1>
            <div className="w-full md:flex md:space-x-2 max-md:space-x-2 max-md:space-y-2">
              {data?.sizeProduct.map((sizeObj, idx) => (
                <button
                  key={idx}
                  className={`btn px-8 rounded-3xl ${selectedSize === sizeObj.size ? 'bg-blue-500 text-white' : 'bg-white border-blue-500 border-2'}`}
                  onClick={() => handleSizeClick(sizeObj.size, sizeObj.harga)}
                >
                  {sizeObj.size}
                </button>
              ))}
            </div>
          </div>
          <div className="py-5">
            <h1 className="font-bold text-md pb-2">Pesan Melalui :</h1>
            <div className="w-full md:flex md:space-x-2 max-md:space-y-2 max-md:space-x-1">
              {data?.tokopediaPath && (
                <a href={data?.tokopediaPath} className="btn px-5 rounded-3xl bg-white border-green-600">
                  <Image
                    src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718875328/tokopedia_idwudl.png"
                    alt="shop"
                    height={20}
                    width={20}
                  />
                  <p className="text-green-600 font-semibold">Tokopedia</p>
                </a>
              )}
              {data?.shopeePath && (
                <a href={data?.shopeePath} className="btn px-5 rounded-3xl bg-white border-orange-600">
                  <Image
                    src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718875328/shopee_t6qr91.png"
                    alt="shop"
                    height={20}
                    width={20}
                  />
                  <p className="text-orange-600 font-semibold">Shopee</p>
                </a>
              )}
              {data?.lazadaPath && (
                <a href={data?.lazadaPath} className="btn px-5 rounded-3xl bg-white border-purple-800">
                  <Image
                    src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718875054/lazada_yrla1f.webp"
                    alt="shop"
                    height={20}
                    width={20}
                  />
                  <p className="text-purple-800 font-semibold">Lazada</p>
                </a>
              )}
              {data?.tiktokPath && (
                <a href={data?.tiktokPath} className="btn px-5 rounded-3xl bg-white border-black">
                  <Image
                    src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718874771/tiktok_tburka.png"
                    alt="shop"
                    height={20}
                    width={20}
                  />
                  <p className="text-black font-semibold">TiktokShop</p>
                </a>
              )}
            </div>
          </div>
          <div className="py-5">
            <h1 className="font-bold text-md pb-2">Deskripsi :</h1>
            <p>{data?.deskripsi}</p>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <div>Terjadi Kesalahan Pada Server</div>
    )
  }
};

export default DetailProductComponent;

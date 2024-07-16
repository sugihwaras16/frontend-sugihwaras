"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProductsCard } from '@/app/components/(card)/action';

interface ImageProduct {
    path: string;
}

interface SizeProduct {
    harga: number;
    size: string;
}

interface Product {
    id: string;
    imageProduct: ImageProduct[];
    title: string;
    rating: number;
    sizeProduct: SizeProduct[];
    [key: string]: any;
}

const CardProduct = ({ id }: { id: string }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductsCard(id);
                if (data) {
                    const convertedSizeProduct = data.sizeProduct.map((sizeProd: any) => ({
                        ...sizeProd,
                        harga: Number(sizeProd.harga)
                    }));
                    setProduct({ ...data, sizeProduct: convertedSizeProduct } as unknown as Product);
                }
            } catch (error) {
                setError((error as Error).message);
            }
        };

        fetchProduct();
    }, [id]);

    if (error) {
        return <div>Terjadi kesalahan: {error}</div>;
    }

    if (!product) {
        return <div className="skeleton h-32 w-32"></div>;
    }

    const { imageProduct, title, rating, sizeProduct } = product;

    return (
        <Link href={`/produk/${id}`} className="card max-w-full mx-1 my-2 bg-white text-black border shadow-none">
            <figure>
                <img src={imageProduct[0]?.path || 'https://via.placeholder.com/150'} alt="product" />
            </figure>
            <div className="card-body px-4">
                <h2 className="card-title font-bold text-sm line-clamp-2">
                    {title}
                </h2>
                <div className="flex items-center space-x-1">
                    <Image
                        src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718569552/star_w85rri.png"
                        alt="star"
                        width={20}
                        height={20}
                    />
                    <p className="text-black text-xs">{rating}/5.0</p>
                </div>
                <p>Rp {sizeProduct[0]?.harga.toLocaleString('id-ID')}</p>
            </div>
        </Link>
    );
};

export default CardProduct;

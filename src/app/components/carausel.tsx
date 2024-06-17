"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

const banners = [
    "https://res.cloudinary.com/dsqgejrzn/image/upload/v1718618788/1_dpab15.jpg",
    "https://res.cloudinary.com/dsqgejrzn/image/upload/v1718618786/4_k3aqrw.jpg",
];

const Carausel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel w-full lg:max-w-3xl">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`carousel-item relative w-full ${currentSlide === index ? 'block' : 'hidden'}`}
                >
                    <Image alt='bannner' width={1000} height={1000} src={banner} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button onClick={() => setCurrentSlide((index - 1 + banners.length) % banners.length)} className="btn hidden btn-circle">❮</button>
                        <button onClick={() => setCurrentSlide((index + 1) % banners.length)} className="btn hidden btn-circle">❯</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Carausel
import Image from "next/image";
import Link from "next/link";

export default function Tentang() {

  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-full justify-start px-5 md:px-32 lg:px-48 py-3">
        <h1 className="text-black uppercase font-semibold">Komitmen Kami</h1>
        <p>Untuk memenuhi kebutuhan pelanggan yang semakin bersaing, kami terus meningkatkan kualitas produk. Kami memperhatikan bahan baku yang memenuhi standar tertinggi, tenaga kerja berpengalaman, peralatan modern, dan menerapkan quality control yang ketat. Hasilnya adalah produk-produk yang sesuai dengan perjanjian yang telah disepakati dan memenuhi standar kualitas terbaik.</p>
      </div>
      <div className="w-full justify-start px-5 md:px-32 lg:px-48 py-3">
        <h1 className="text-black uppercase font-semibold">Prioritas Kami
        </h1>
        <p>Kami berfokus pada kepuasan pelanggan dan komitmen terhadap kualitas. Hubungi kami untuk memulai kerjasama yang sukses dan mendapatkan pakaian kustom berkualitas tinggi.</p>
      </div>
      <div className="w-full justify-start px-5 md:px-32 lg:px-48 py-3">
        <p>Terimakasih Telah Memilih Sugih Waras!
          Kami menghargai kepercayaan Anda kepada kami. Dengan cinta dan dedikasi, kami berkomitmen untuk memberikan yang terbaik untuk Anda. Terimakasih telah memilih Sugih Waras sebagai mitra Anda. Semoga pakaian kustom kami selalu membuat Anda bangga.
        </p>
        <p>Kepuasan Anda adalah prioritas kami. Jika Anda memiliki pertanyaan, saran, atau butuh bantuan, jangan ragu untuk menghubungi tim kami. Kami selalu siap membantu Anda.</p>
      </div>
      <div className="w-full justify-start px-5 md:px-32 lg:px-48 py-3">
        <h1 className="text-black uppercase font-semibold">Kontak Kami
        </h1>
        <div className="lg:flex lg:space-x-2 max-md:grid max-md:space-y-2 py-5">
          <Link href="https://api.whatsapp.com/send/?phone=62895404951069&text=Hai+Sugih+Waras" className="btn rounded-xl border-0 bg-green-500">
            <Image 
              src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718876801/whatsapp_kbs2zl.png"
              alt="sosial media"
              height={20}
              width={20}
            />
            <p className="text-white font-bold">WhatsApp</p>
          </Link>
        </div>
      </div>
      <div className="w-full justify-start px-5 md:px-32 lg:px-48 py-3">
        <h1 className="text-black uppercase font-semibold">Medial Sosial Kami
        </h1>
        <div className="lg:flex lg:space-x-2 max-md:grid max-md:space-y-2 py-5">
          <Link href="https://www.instagram.com/sugihwarasshop?igsh=MXB6bGpzZXBsOGR2ZA%3D%3D&utm_source=qr" className="btn rounded-xl bg-white border-black">
            <Image 
              src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718874630/instagram_1_x66xvf.png"
              alt="sosial media"
              height={20}
              width={20}
            />
            <p className="text-black font-bold">Instagram</p>
          </Link>
          <Link href="https://www.tiktok.com/@sugihwarasshop?_t=8nH6XNMI7BH&_r=1" className="btn rounded-xl bg-white border-black">
            <Image 
              src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718874723/facebook_2_oeokwg.png"
              alt="sosial media"
              height={20}
              width={20}
            />
            <p className="text-black font-bold">Facebook</p>
          </Link>
          <Link href="https://www.facebook.com/share/THRwmWEzZBxGdf7s/?mibextid=LQQJ4d" className="btn rounded-xl bg-white border-black">
            <Image 
              src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718874771/tiktok_tburka.png"
              alt="sosial media"
              height={20}
              width={20}
            />
            <p className="text-black font-bold">Tiktok</p>
          </Link>
        </div>
      </div>
      <div className="w-full justify-start px-5 md:px-32 lg:px-48 py-3">
        <h1 className="text-black uppercase font-semibold">Akun Shop Kami
        </h1>
        <div className="lg:flex lg:space-x-2 max-md:grid max-md:space-y-2 py-5">
          <Link href="https://tokopedia.link/zBJgYqbcvKb" className="btn rounded-xl bg-white border-black">
            <Image 
              src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718875328/tokopedia_idwudl.png"
              alt="sosial media"
              height={20}
              width={20}
            />
            <p className="text-black font-bold">Tokopedia</p>
          </Link>
          <Link href="http://shopee.co.id/sugihwarasshopp" className="btn rounded-xl bg-white border-black">
            <Image 
              src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718875328/shopee_t6qr91.png"
              alt="sosial media"
              height={20}
              width={20}
            />
            <p className="text-black font-bold">Shopee</p>
          </Link>
          <Link href="https://s.lazada.co.id/s.rOKI3" className="btn rounded-xl bg-white border-black">
            <Image 
              src="https://res.cloudinary.com/dsqgejrzn/image/upload/v1718875054/lazada_yrla1f.webp"
              alt="sosial media"
              height={20}
              width={20}
            />
            <p className="text-black font-bold">Lazada</p>
          </Link>
        </div>
      </div>
      <div className="w-full justify-start px-5 md:px-32 lg:px-48 py-3">
        <h1 className="text-black uppercase font-semibold">Alamat
        </h1>
        <p>Jln. Sukamandi Mekar No. 17 Lembang - Bandung Barat</p>
      </div>
    </main>
  );
}

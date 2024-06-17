import dynamic from 'next/dynamic';
import CardProduct from '@/app/components/cardproduct';

const Carausel = dynamic(()=> import("@/app/components/carausel"))

export default function Home() {

  return (
    <main className="w-full flex flex-col items-center">
      <Carausel />
      <div className="w-full flex justify-start px-5 md:px-32 lg:px-48 py-10">
        <h1 className="text-white uppercase font-semibold">Semua Produk</h1>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-1 md:px-32 lg:px-48">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </main>
  );
}

import dynamic from "next/dynamic"
import Link from "next/link"

const TableComponentsAdmin = dynamic (()=> import("@/app/components/admin/produk/table"))

export default function AdminProduk(){
    return(
        <main className="w-full flex justify-center bg-gray-50 px-5">
            <div className="lg:p-20 max-lg:p-5 w-full justify-center m-10 rounded-xl bg-white">
                <div className="space-x-2">
                    <Link href="/admin/produk/tambah" className="btn bg-blue-500 text-white font-bold border-0">+ Tambah Produk</Link>
                </div>
                <div className="py-5">
                    <TableComponentsAdmin />
                </div>
            </div>
        </main>
    )
}
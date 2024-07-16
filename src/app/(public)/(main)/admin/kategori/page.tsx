import dynamic from "next/dynamic"
import Link from "next/link"

const TableComponentsKategori= dynamic (()=> import("@/app/components/admin/kategori/table"))

export default function AdminKategori(){
    return(
        <main className="w-full flex justify-center bg-gray-50 px-5">
            <div className="lg:p-20 max-lg:p-5 w-full justify-center lg:m-10 max-lg:m-3 rounded-xl bg-white">
                <div className="space-x-2">
                    <Link href="/admin/kategori/tambah" className="btn bg-blue-500 text-white font-bold border-0">+ Tambah Kategori</Link>
                </div>
                <div className="py-5">
                    <TableComponentsKategori />
                </div>
            </div>
        </main>
    )
}
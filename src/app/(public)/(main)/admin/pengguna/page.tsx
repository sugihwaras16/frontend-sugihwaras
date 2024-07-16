import dynamic from "next/dynamic"
import Link from "next/link"

const TableComponentsPengguna = dynamic (()=> import("@/app/components/admin/pengguna/table"))

export default function AdminPengguna(){
    return(
        <main className="w-full flex justify-center bg-gray-50 px-5">
            <div className="lg:p-20 max-lg:p-5 w-full justify-center m-10 rounded-xl bg-white">
                <div className="space-x-2">
                    <Link href="/admin/pengguna/tambah" className="btn bg-blue-500 text-white font-bold border-0">+ Tambah Pengguna</Link>
                </div>
                <div className="py-5">
                    <TableComponentsPengguna />
                </div>
            </div>
        </main>
    )
}
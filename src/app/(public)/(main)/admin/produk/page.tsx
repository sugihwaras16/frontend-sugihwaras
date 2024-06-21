export default function AdminProduk(){
    return(
        <main className="w-full flex justify-center h-screen bg-gray-50 px-5">
            <div className="p-20 w-full justify-center m-10 rounded-xl bg-white">
                <div className="space-x-2">
                    <button className="btn bg-blue-500 text-white font-bold border-0">+ Tambah Produk</button>
                    <button className="btn bg-white text-blue-500 border-2 border-blue-500">Hapus</button>
                </div>
            </div>
        </main>
    )
}
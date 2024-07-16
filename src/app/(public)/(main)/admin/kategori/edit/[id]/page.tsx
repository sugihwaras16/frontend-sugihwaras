import dynamic from "next/dynamic"
import { findOneKategori } from "@/app/(public)/(main)/admin/kategori/edit/[id]/action"

const FormEditKategori = dynamic(() => import("@/app/components/admin/kategori/(edit)/form"))

const UpdateKategori = async ({ params }: { params: { id: string } }) => {
    try {
        const data = await findOneKategori(params.id)
        if (data) {
            return (
                <main className="w-full flex justify-center bg-gray-50 px-5">
                    <FormEditKategori 
                        data={data}
                        id={params.id}
                    />
                </main>
            )
        } else {
            return <h1>Kategori Tidak Ditemukan</h1>
        }
    } catch (error) {
        console.error("Error fetching product:", error);
        return <div>Terjadi Kesalahan Saat Load Produk</div>;
    }
}
export default UpdateKategori
import dynamic from "next/dynamic"
import { findOneProduk } from "./action"

const FormEditProduk = dynamic(() => import("@/app/components/admin/produk/(edit)/form"))

const EditProduk = async ({ params }: { params: { id: string } }) => {
    try {
        const data = await findOneProduk(params.id)

        if (data) {
            return (
                <main className="w-full flex justify-center bg-gray-50 px-5">
                    <FormEditProduk
                        data={data}
                        id={params.id} />
                </main>
            )
        }else{
            return <h1>Produk tidak ditemukan!</h1>
        }
    } catch (error) {
        console.error("Error fetching product:", error);
        return <div>Terjadi Kesalahan Saat Load Produk</div>;
    }
}
export default EditProduk
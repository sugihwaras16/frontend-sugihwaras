import dynamic from "next/dynamic"
import { findOnePengguna } from "./action"

const FormEditPengguna = dynamic(() => import("@/app/components/admin/pengguna/(edit)/form"))

const UpdatePengguna = async ({ params }: { params: { id: string } }) => {
    try {
        const data = await findOnePengguna(params.id)
        if (data) {
            return (
                <main className="w-full flex justify-center bg-gray-50 px-5">
                    <FormEditPengguna
                        data={data}
                        id={params.id} />
                </main>
            )
        } else {
            return <h1>Pengguna tidak ditemukan!</h1>
        }
    } catch (error) {
        console.error("Error fetching Pengguna:", error);
        return <div>Terjadi Kesalahan Saat Load Pengguna</div>;
    }
}
export default UpdatePengguna
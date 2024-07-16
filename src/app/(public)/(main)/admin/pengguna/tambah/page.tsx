import dynamic from "next/dynamic"

const FormPengguna = dynamic(() => import("@/app/components/admin/pengguna/form"))

const TambahPengguna = () => {
    return (
        <main className="w-full flex justify-center bg-gray-50 px-5">
            <FormPengguna />
        </main>
    )
}
export default TambahPengguna
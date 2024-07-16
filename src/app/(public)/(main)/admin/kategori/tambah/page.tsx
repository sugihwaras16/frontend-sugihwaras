import dynamic from "next/dynamic"

const FormKategori = dynamic(() => import("@/app/components/admin/kategori/form"))

const TambahKategori = () => {
    return (
        <main className="w-full flex justify-center bg-gray-50 px-5">
            <FormKategori />
        </main>
    )
}
export default TambahKategori
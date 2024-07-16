import dynamic from "next/dynamic"

const FormProduk = dynamic(() => import("@/app/components/admin/produk/form"))

const TambahProduk = () => {
    return (
        <main className="w-full flex justify-center bg-gray-50 px-5">
            <FormProduk />
        </main>
    )
}
export default TambahProduk
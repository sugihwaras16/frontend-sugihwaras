"use client"
import Link from "next/link"
import { useFormik } from "formik"
import { object, string } from "yup";
import { useRouter } from "next/navigation";
import { updateKategori, GetCategoryPayload } from "@/app/(public)/(main)/admin/kategori/edit/[id]/action";

export interface FormValue {
    title: string
}

const FormKategori = ({data, id} : {data : GetCategoryPayload, id : string}) => {
    const router = useRouter()

    const formSchema = object().shape({
        title: string().required("Nama Kategori Tidak Boleh Kosong")
    })

    const form = useFormik<FormValue>({
        validationSchema: formSchema,
        initialValues: {
            title: data.title ?? '',
        },
        onSubmit: async (e) => {
            try {
                await updateKategori(e, id)
                router.push("/admin/kategori")
            } catch (e) {
                console.log(e)
                alert("Ada Kesalahan Pada Server")
            }
        }
    })

    const { handleChange, handleSubmit, values, errors, isSubmitting } = form
    return (
        <>
            <form onSubmit={handleSubmit} className="lg:p-14 max-lg:p-5 w-full justify-center lg:m-10 max-lg:m-5 rounded-xl bg-white">
                <Link href="/admin/kategori" className="btn bg-white">Kembali</Link>
                <h1 className="py-6 text-black font-bold text-xl">Update Kategori</h1>
                <div className="grid grid-cols-2">
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Nama Kategori</span>
                            </div>
                            <input type="text" placeholder="Kategori" value={values.title} className="input input-bordered w-full max-w-xs" name="title" onChange={handleChange} />
                        </label>
                        {
                            errors.title ? <label htmlFor="" className="label">
                                <span className="label-text-alt text-error">{errors.title}</span>
                            </label> : null
                        }
                    </div>
                </div>
                <button type="submit" className="btn bg-blue-500 my-5 text-white" disabled={isSubmitting}>
                    {isSubmitting ? <div className="loading"></div> : null}
                    Simpan
                </button>
            </form>
        </>
    )
}
export default FormKategori
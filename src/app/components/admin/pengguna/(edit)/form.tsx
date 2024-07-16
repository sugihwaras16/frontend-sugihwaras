"use client"

import Link from "next/link"
import { useFormik } from "formik"
import { string, object } from "yup"
import { useRouter } from "next/navigation"
import { GetUserPayload, updatePengguna } from "@/app/(public)/(main)/admin/pengguna/edit/[id]/action"

export interface FormValue {
    email: string,
    username: string,
    password: string
}

const FormProduk = ({data, id} : {data : GetUserPayload, id : string}) => {
    const router = useRouter()

    const formSchema = object().shape({
        email: string().required("Email tidak boleh kosong"),
        username: string().required("Username tidak boleh kosong"),
        password: string().required("Password tidak boleh kosong")
    })

    const form = useFormik<FormValue>({
        validationSchema: formSchema,
        initialValues: {
            email: data.email ?? '',
            username: data.username ?? '',
            password: data.password ?? ''
        },
        onSubmit: async (e) => {
            try {
                await updatePengguna(e, id)
                return router.push("/admin/pengguna")
            } catch (a) {
                console.log(a)
                alert("Terjadi Kesalahan Pada Server")
            }
        }
    })

    const { handleChange, handleSubmit, errors,values, isSubmitting } = form

    return (
        <>
            <form onSubmit={handleSubmit} className="lg:p-14 max-lg:p-5 w-full justify-center lg:m-10 max-lg:m-5 rounded-xl bg-white">
                <Link href="/admin/pengguna" className="btn bg-white">Kembali</Link>
                <h1 className="py-6 text-black font-bold text-xl">Update Pengguna</h1>
                <div className="grid lg:grid-cols-2">
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email Pengguna</span>
                            </div>
                            <input type="text" placeholder="Type here" value={values.email} className="input input-bordered w-full max-w-xs" name="email" onChange={handleChange} />
                        </label>
                        {
                            errors.email ? <label htmlFor="" className="label">
                                <span className="label-text-alt text-error">{errors.email}</span>
                            </label> : null
                        }
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Username Pengguna</span>
                            </div>
                            <input type="text" placeholder="Type here" value={values.username} className="input input-bordered w-full max-w-xs" name="username" onChange={handleChange} />
                        </label>
                        {
                            errors.username ? <label htmlFor="" className="label">
                                <span className="label-text-alt text-error">{errors.username}</span>
                            </label> : null
                        }
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Password Pengguna</span>
                            </div>
                            <input type="password" placeholder="Type here" value={values.password} className="input input-bordered w-full max-w-xs" name="password" onChange={handleChange} />
                        </label>
                        {
                            errors.password ? <label htmlFor="" className="label">
                                <span className="label-text-alt text-error">{errors.password}</span>
                            </label> : null
                        }
                    </div>

                </div>
                <button type="submit" disabled={isSubmitting} className="btn bg-blue-500 my-5 text-white">
                    {isSubmitting ? <div className="loading"></div> : null}
                    Simpan
                </button>
            </form>
        </>
    )
}
export default FormProduk
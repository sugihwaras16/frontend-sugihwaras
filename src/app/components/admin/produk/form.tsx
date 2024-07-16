"use client"

import { useFormik } from "formik";
import { CldUploadWidget } from "next-cloudinary";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { array, number, object, string } from "yup";
import MyCombobox from "@/app/components/admin/kategori/(combobox)/combobox"
import createProduct from "@/app/(public)/(main)/admin/produk/tambah/action";

interface Size {
    size: string,
    price: number
}

export interface FormValue {
    image: string[],
    size: Size[],
    title: string,
    rating: number,
    deskripsi: string,
    tokopediaPath: string,
    shopeePath: string,
    lazadaPath: string,
    tiktokPath: string
    category: string
}

const FormProduk = () => {
    const router = useRouter()

    const formSchema = object().shape({
        image: array().min(1, "Gambar tidak boleh kosong!"),
        size: array().of(
            object().shape({
                size: string().required('Ukuran tidak boleh kosong!'),
                price: number().required('Harga tidak boleh kosong!')
            })
        ).min(1, "Ukuran tidak boleh kosong!"),
        title: string().required('Nama tidak boleh kosong!'),
        rating: number().required('Rating tidak boleh kosong!'),
        deskripsi: string().required('Deskripsi tidak boleh kosong!'),
        tokopediaPath: string().url('Alamat URL tidak valid!').nullable(),
        shopeePath: string().url('Alamat URL tidak valid!').nullable(),
        lazadaPath: string().url('Alamat URL tidak valid!').nullable(),
        tiktokPath: string().url('Alamat URL tidak valid!').nullable(),
        category: string().required()
    })

    const form = useFormik<FormValue>({
        validationSchema: formSchema,
        initialValues: {
            image: [],
            deskripsi: '',
            lazadaPath: '',
            title: '',
            rating: 0,
            shopeePath: '',
            size: [],
            tiktokPath: '',
            tokopediaPath: '',
            category: ''
        },
        onSubmit: async (e) => {
            console.log(e)
            try{
                await createProduct(e)
                router.push("/admin/produk")
            }catch (e){
                console.log(e)
                alert("Ada Kesalahan Pada Server")
            }
        }
    })
    const { handleChange, handleSubmit, values, errors, isSubmitting, setFieldValue } = form

    return (
        <>
            <form onSubmit={handleSubmit} className="lg:p-14 max-lg:p-5 w-full justify-center lg:m-10 max-lg:m-5 rounded-xl bg-white">
                <Link href="/admin/produk" className="btn bg-white">Kembali</Link>
                <h1 className="py-6 text-black font-bold text-xl">Tambah Produk</h1>

                <div>
                    {
                        errors.image ? <label htmlFor="" className="label">
                            <span className="label-text-alt text-error">{errors.image}</span>
                        </label> : null
                    }
                    <CldUploadWidget uploadPreset="product"
                        options={{
                            clientAllowedFormats: ['webp', 'jpg', 'png', 'jpeg']
                        }}
                        onQueuesEnd={(result) => {
                            console.log(result)
                            if (result) {
                                const data = result.info as unknown as {
                                    files: Array<{
                                        uploadInfo: {
                                            url: string
                                        }
                                    }>
                                }

                                const temp = values.image
                                data.files.forEach(e => {
                                    temp.push(e.uploadInfo.url)
                                })
                                setFieldValue("image", temp)
                            }
                        }}>
                        {
                            ({ open }) => {
                                function handleOnClick() {
                                    open();
                                }

                                return <button type="button" className="btn bg-blue-500 text-white mb-4" onClick={handleOnClick}>
                                    Tambah Foto
                                </button>
                            }
                        }
                    </CldUploadWidget>
                </div>

                <div className="items-center">
                    {values.size.map((_, index) => (
                        <div key={index} className="grid grid-cols-2">
                            <label key={index} className="form-control w-full max-w-xs mb-4">
                                <div className="label">
                                    <span className="label-text">Ukuran Produk {index + 1}</span>
                                </div>
                                <input type="text" placeholder="Ukuran Produk" className="input input-bordered w-full max-w-xs" name={`size[${index}].size`} onChange={handleChange} />
                            </label>

                            <label key={index} className="form-control w-full max-w-xs mb-4">
                                <div className="label">
                                    <span className="label-text">Harga Produk {index + 1}</span>
                                </div>
                                <input type="number" placeholder="Ukuran Produk" className="input input-bordered w-full max-w-xs" name={`size[${index}].price`} onChange={handleChange} />
                            </label>
                        </div>
                    ))}
                    <button type="button" className="btn bg-blue-500 text-white mb-4" onClick={() => setFieldValue("size", [...values.size, { size: 0, price: 0 }])}>
                        Tambah Ukuran
                    </button>
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Nama Produk</span>
                            </div>
                            <input type="text" placeholder="Produk" className="input input-bordered w-full max-w-xs" name="title" onChange={handleChange} />
                        </label>
                        {
                            errors.title ? <label htmlFor="" className="label">
                                <span className="label-text-alt text-error">{errors.title}</span>
                            </label> : null
                        }
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Rating</span>
                            </div>
                            <input type="text" placeholder="1-5" className="input input-bordered w-full max-w-xs" name="rating" onChange={handleChange} />
                        </label>
                        {
                            errors.rating ? <label htmlFor="" className="label">
                                <span className="label-text-alt text-error">{errors.rating}</span>
                            </label> : null
                        }
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Deskripsi</span>
                            </div>
                            <input type="text" placeholder="Deskripsi" className="input input-bordered w-full max-w-xs" name="deskripsi" onChange={handleChange} />
                        </label>
                        {
                            errors.deskripsi ? <label htmlFor="" className="label">
                                <span className="label-text-alt text-error">{errors.deskripsi}</span>
                            </label> : null
                        }
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Link Produk Tokopedia</span>
                            </div>
                            <input type="text" placeholder="Tokopedia" className="input input-bordered w-full max-w-xs" name="tokopediaPath" onChange={handleChange} />
                        </label>
                        {
                            errors.tokopediaPath ? <label htmlFor="" className="label">
                                <span className="label-text-alt text-error">{errors.tokopediaPath}</span>
                            </label> : null
                        }
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Link Produk Shopee</span>
                            </div>
                            <input type="text" placeholder="Shopee" className="input input-bordered w-full max-w-xs" name="shopeePath" onChange={handleChange} />
                        </label>
                        {
                            errors.shopeePath ? <label htmlFor="" className="label">
                                <span className="label-text-alt text-error">{errors.shopeePath}</span>
                            </label> : null
                        }
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Link Produk Lazada</span>
                            </div>
                            <input type="text" placeholder="Lazada" className="input input-bordered w-full max-w-xs" name="lazadaPath" onChange={handleChange} />
                        </label>
                        {
                            errors.lazadaPath ? <label htmlFor="" className="label">
                                <span className="label-text-alt text-error">{errors.lazadaPath}</span>
                            </label> : null
                        }
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Link Produk Tiktok Shop</span>
                            </div>
                            <input type="text" placeholder="Tiktok Shop" className="input input-bordered w-full max-w-xs" name="tiktokPath" onChange={handleChange} />
                        </label>
                        {
                            errors.tiktokPath ? <label htmlFor="" className="label">
                                <span className="label-text-alt text-error">{errors.tiktokPath}</span>
                            </label> : null
                        }

                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Pilih Kategori Produk</span>
                            </div>
                            <MyCombobox 
                                onChange={e => setFieldValue('category', e?.id)}/>
                        </label>

                        {
                            errors.category ? <label htmlFor="" className="label">
                                <span className="label-text-alt text-error">{errors.category}</span>
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
    );
};

export default FormProduk;

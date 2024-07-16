"use client"

import Link from "next/link"

const UpdateButtonCategory =({id}: {id : string})=>{
    return(
        <Link href={`/admin/kategori/edit/${id}`} className="btn bg-blue-500 text-white">edit</Link>
    )
}
export default UpdateButtonCategory
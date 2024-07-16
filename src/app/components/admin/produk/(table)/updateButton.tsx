"use client"

import Link from "next/link"

const UpdateButtonProducts =({id}: {id : string})=>{
    return(
        <Link href={`/admin/produk/edit/${id}`} className="btn bg-blue-500 text-white">edit</Link>
    )
}
export default UpdateButtonProducts
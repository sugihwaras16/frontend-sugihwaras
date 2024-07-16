"use client"

import Link from "next/link"

const UpdateButtonUsers =({id}: {id : string})=>{
    return(
        <Link href={`/admin/pengguna/edit/${id}`} className="btn bg-blue-500 text-white">edit</Link>
    )
}
export default UpdateButtonUsers
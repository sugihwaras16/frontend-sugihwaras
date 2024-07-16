"use client"

import { deleteProduct } from "@/app/(public)/(main)/admin/produk/action"

const DeleteButtonProducts =({id}: {id : string})=>{

    const onClick = async ()=>{
        try{
            await deleteProduct(id)
        }catch{
            alert("Kesalahan Pada Server")
        }
    }

    return(
        <button onClick={onClick} className="btn bg-white border-blue-500">Hapus</button>
    )
}
export default DeleteButtonProducts
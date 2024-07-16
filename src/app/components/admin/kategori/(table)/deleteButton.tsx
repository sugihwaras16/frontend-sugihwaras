"use client"

import { deleteCategory } from "@/app/(public)/(main)/admin/kategori/action"

const DeleteButton =({id}: {id : string})=>{

    const onClick = async ()=>{
        try{
            await deleteCategory(id)
        }catch{
            alert("Kesalahan Pada Server")
        }
    }

    return(
        <button onClick={onClick} className="btn bg-white border-blue-500">Hapus</button>
    )
}
export default DeleteButton
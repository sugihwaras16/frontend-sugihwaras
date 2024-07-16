"use client"

import { deleteUsers } from "@/app/(public)/(main)/admin/pengguna/action"

const DeleteButtonUsers =({id}: {id : string})=>{

    const onClick = async ()=>{
        try{
            await deleteUsers(id)
        }catch{
            alert("Kesalahan Pada Server")
        }
    }

    return(
        <button onClick={onClick} className="btn bg-white border-blue-500">Hapus</button>
    )
}
export default DeleteButtonUsers
import dynamic from "next/dynamic"

const DetailProductComponent = dynamic (()=> import("@/app/components/(pages)/pagedetailproduct"))

export default function DetailProduct({params}:{params : {id : string}}){
    console.log(DetailProduct)
    return(
        <DetailProductComponent id={params.id}/>
    )
}
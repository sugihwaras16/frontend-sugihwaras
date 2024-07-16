import dynamic from "next/dynamic";

const Katalogpage = dynamic (()=> import("@/app/components/(pages)/pagekatalog"))

export default function Katalog(){
    return(
        <Katalogpage />
    )
}
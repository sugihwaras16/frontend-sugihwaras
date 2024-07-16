import dynamic from "next/dynamic";

const KostumPage = dynamic (() => import("@/app/components/(pages)/pagekostum"))
export default function Kostum(){
    return (
      <KostumPage />
    )
}
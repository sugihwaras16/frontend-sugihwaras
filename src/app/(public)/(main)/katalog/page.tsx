import CardProduct from "@/app/components/cardproduct";
import ComboboxComponents from "../../../components/combobox";

export default function Katalog() {

  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-full flex justify-start px-5 md:px-32 lg:px-48 py-3">
        <h1 className="text-black uppercase font-semibold">Katalog</h1>
      </div>
      <div className="w-full flex justify-start px-5 md:px-32 lg:px-48 pb-5">
      <ComboboxComponents />
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-1 md:px-32 lg:px-48">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </main>
  );
}

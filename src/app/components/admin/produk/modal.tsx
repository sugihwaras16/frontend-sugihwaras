"use client"
import { useState } from "react"
import { getAllProduct } from "@/app/(public)/(main)/admin/produk/action"
import DeleteButtonProducts from "./(table)/deleteButton"

const ModalProduct = async () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };
    try {
        const getData = await getAllProduct()
        return (
            <>
                <button className="btn bg-white border-blue-500" onClick={() => setIsOpen(true)}>
                    Hapus
                </button>
                {
                    getData.map((e, index) => {
                        <div key={index}></div>
                        {
                            isOpen && (
                                <dialog id="my_modal_1" className="modal" open>
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click the button below to close</p>
                                        <div className="modal-action">

                                            <DeleteButtonProducts id={e.product.id} />
                                            <button className="btn" onClick={handleClose}>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </dialog>
                            )
                        }
                    })
                }
            </>
        )

    } catch (error) {

    }

}
export default ModalProduct
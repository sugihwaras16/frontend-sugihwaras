"use client"
import { getAllCategory } from "@/app/(public)/(main)/admin/kategori/action";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const DeleteButtonComponent = dynamic(() => import("@/app/components/admin/kategori/(table)/deleteButton"));
const UpdateButtonCategory = dynamic(() => import("@/app/components/admin/kategori/(table)/updateButtonKategori"));

interface Category {
    id: string;
    title: string;
}

const TableComponentsAdmin: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const result = await getAllCategory();
                setCategories(result);
            } catch (error) {
                setError("Kesalahan Pada Server");
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <div className="flex w-full flex-col gap-4">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div className="overflow-x-auto overflow-y-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Nama Kategori</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((e, index) =>
                            <tr key={index}>
                                <td>
                                    {e.title}
                                </td>
                                <th></th>
                                <th></th>
                                <th></th>

                                <th className="lg:space-x-2 max-lg:space-y-2">
                                    <UpdateButtonCategory id={e.id} />
                                    <button className="btn bg-white border-blue-500" onClick={() => setIsOpen(true)}>
                                        Hapus
                                    </button>
                                </th>
                                {
                                    isOpen && (
                                        <dialog id="my_modal_1" className="modal z-50" open>
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg text-center">Apakah Kamu Ingin Menghapus Kategori ini ?</h3>
                                                <div className="modal-action justify-center">
                                                    <DeleteButtonComponent id={e.id} />
                                                    <button className="btn" onClick={handleClose}>
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </dialog>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th className="text-black">Total Kategori</th>
                        <th className="text-black">{categories.length}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default TableComponentsAdmin;

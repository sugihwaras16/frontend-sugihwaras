"use client"
import { getAllProduct } from "@/app/(public)/(main)/admin/produk/action";
import UpdateButtonProducts from "./(table)/updateButton";
import { useState, useEffect } from "react";
import DeleteButtonProducts from "./(table)/deleteButton";

interface Product {
    id: string;
    title: string;
    imageProduct: { path: string }[];
}

interface Category {
    title: string;
}

interface ProductData {
    product: Product;
    category: Category;
}

const TableComponentsAdmin: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<ProductData[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await getAllProduct();
                setProducts(result);
            } catch (error) {
                setError("Maaf Kesalahan Saat mengambil data");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
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
        <>
            <div className="overflow-x-auto overflow-y-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image Produk</th>
                            <th>Nama Produk</th>
                            <th>Kategori</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((e, index) =>
                            <tr key={index}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={e.product.imageProduct[0].path} alt="Image Product" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{e.product.title}</td>
                                <td>{e.category.title}</td>
                                <td className="lg:space-x-2 max-lg:space-y-2">
                                    <UpdateButtonProducts id={e.product.id} />
                                    <button className="btn bg-white border-blue-500" onClick={() => setIsOpen(true)}>
                                        Hapus
                                    </button>
                                </td>
                                {isOpen && (
                                    <dialog id="my_modal_1" className="modal z-50" open>
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg text-center">Apakah Kamu Ingin Menghapus Produk ini ?</h3>
                                            <div className="modal-action justify-center">
                                                <DeleteButtonProducts id={e.product.id} />
                                                <button className="btn" onClick={handleClose}>Close</button>
                                            </div>
                                        </div>
                                    </dialog>
                                )}
                            </tr>
                        )}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th className="text-black">Total Produk</th>
                            <th className="text-black">{products.length}</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default TableComponentsAdmin;

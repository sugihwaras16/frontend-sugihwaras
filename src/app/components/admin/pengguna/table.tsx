"use client"
import { getAllUsers } from "@/app/(public)/(main)/admin/pengguna/action";
import DeleteButtonUsers from "./(table)/deleteButton";
import UpdateButtonUsers from "./(table)/updateButton";
import { useState, useEffect } from "react";

interface User {
    id: string;
    email: string;
    username: string;
}

const TableComponentsAdmin: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await getAllUsers();
                setUsers(result);
            } catch (error) {
                setError("Maaf Terjadi Kesalahan Pada Server");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
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
                        <th>Email</th>
                        <th>Username</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((e, index) =>
                            <tr key={index}>
                                <td>{e.email}</td>
                                <td>{e.username}</td>
                                <td className="lg:space-x-2 max-lg:space-y-2">
                                    <UpdateButtonUsers id={e.id} />
                                    <button className="btn bg-white border-blue-500" onClick={() => setIsOpen(true)}>
                                        Hapus
                                    </button>
                                </td>
                                {
                                    isOpen && (
                                        <dialog id="my_modal_1" className="modal z-50" open>
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg text-center">Apakah Kamu Ingin Menghapus Pengguna ini ?</h3>
                                                <div className="modal-action justify-center">
                                                    <DeleteButtonUsers id={e.id} />
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
            </table>
        </div>
    );
};

export default TableComponentsAdmin;

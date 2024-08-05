import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import Modal from "./Modal";

export default function Dashboard({ auth, books }) {
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    };

    return (
        <>
            {modal && <Modal setModal={setModal} />}
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Books
                    </h2>
                }
            >
                <Head title="Dashboard" />
                <button onClick={showModal}>登録</button>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div>
                            <table className="w-full bg-gray-100 mt-2">
                                <thead className="bg-blue-100">
                                    <tr className="text-green-600">
                                        <th className="px-2 py-2 border border-gray-400">
                                            #
                                        </th>
                                        <th className="px-2 py-2 border border-gray-400">
                                            タイトル
                                        </th>
                                        <th className="px-2 py-2 border border-gray-400">
                                            内容
                                        </th>
                                        <th className="px-2 py-2 border border-gray-400">
                                            カテゴリー
                                        </th>
                                        <th className="px-2 py-2 border border-gray-400"></th>
                                        <th className="px-2 py-2 border border-gray-400"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {books.map((book) => (
                                        <tr key={book.id}>
                                            <td className="border border-gray-400 px-2 py-2 text-center">
                                                {book.id}
                                            </td>
                                            <td className="border border-gray-400 px-2 py-2">
                                                {book.title}
                                            </td>
                                            <td className="border border-gray-400 px-2 py-2">
                                                {book.content}
                                            </td>
                                            <td className="border border-gray-400 px-2 py-2">
                                                {book.category}
                                            </td>
                                            <td className="border border-gray-400 px-2 py-2"></td>
                                            <td className="border border-gray-400 px-2 py-2"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

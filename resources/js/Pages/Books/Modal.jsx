import React from "react";
import { useForm } from "@inertiajs/react";
import "./Modal.css";

const Modal = ({ setModal }) => {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        content: "",
        category: "",
    });

    const closeModal = () => {
        setModal(false);
    };

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("books.store"), {
            onSuccess: () => closeModal(), // 成功時にモーダルを閉じる
        });
    };

    return (
        <div className="modal-background" onClick={handleBackgroundClick}>
            <div className="modal-content">
                <form onSubmit={handleSubmit} className="modalForm">
                    <label>タイトル</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    {errors.title && (
                        <div className="text-red-600">{errors.title}</div>
                    )}

                    <label>内容</label>
                    <textarea
                        value={data.content}
                        onChange={(e) => setData("content", e.target.value)}
                    />
                    {errors.content && (
                        <div className="text-red-600">{errors.content}</div>
                    )}

                    <label>カテゴリ</label>
                    <select
                        value={data.category}
                        onChange={(e) => setData("category", e.target.value)}
                    >
                        <option value="React">
                            カテゴリを選択してください。
                        </option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Laravel">Laravel</option>
                    </select>
                    {errors.category && (
                        <div className="text-red-600">{errors.category}</div>
                    )}

                    <div className="modalBt">
                        <button type="submit" disabled={processing}>
                            登録
                        </button>
                        <button type="button" onClick={closeModal}>
                            閉じる
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;

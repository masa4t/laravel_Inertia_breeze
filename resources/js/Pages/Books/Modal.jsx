import React from "react";
import "./Modal.css";

const Modal = ({ setModal }) => {
    const closeModal = () => {
        setModal(false);
    };

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="modal-background" onClick={handleBackgroundClick}>
            <div className="modal-content">
                <button onClick={closeModal}>閉じる</button>
                {/* モーダルのコンテンツをここに追加 */}
            </div>
        </div>
    );
};

export default Modal;

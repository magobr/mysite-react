import React from 'react';

import './style.css';

function Modal(props) {

    const {closeModal, modalTitle, modalContent} = props;
    
    return (
        <>
            <div id="modal-promocao" className="modal-container mostrar">
                <div className="modal">
                    <button className="fechar" onClick={closeModal}>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                    <h3 className="subtitulo">{modalTitle}</h3>
                    {modalContent}
                </div>
            </div>
        </>
    )
        
}
export default Modal;
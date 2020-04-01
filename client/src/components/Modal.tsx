import * as React from "react"

interface ModalProps {
    handleClose: any
    show: boolean
    card: any
}

export const Modal: React.FC<ModalProps> = ({ handleClose, show, card }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"
    return (
        <div className={showHideClassName}>
            <section className={"modal-main"}>
                <button className="modal-button" onClick={handleClose}>X</button>
                {card}
            </section>
        </div>
    )

}
import { IoClose } from "react-icons/io5";

const Modal = ({ children, isOpen = true, onClose }) => {
    return (
        <div
            className="modal fade"
            id="modal"
            tabindex="-1"
            aria-labelledby="modal"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-sm modal-dialog-centered">
                <div className="modal-content border position-relative">
                    <button
                        type="button"
                        className="position-absolute top-0 end-0 z-2 btn"
                        data-bs-dismiss="modal"
                        data-bs-target="#modal"
                    >
                        <IoClose size={20} />
                    </button>

                    {/* <button
                            data-bs-dismiss="modal"
                            data-bs-target="#modal"
                        >
                            close
                        </button> */}
                    <div className="modal-body d-flex flex-column align-items-center justify-content-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

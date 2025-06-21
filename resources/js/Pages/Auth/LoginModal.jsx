import { Head } from "@inertiajs/react"

const LoginModal = ({ children, isOpen, onClose }) => {


    return (
        (isOpen && (
            <div className="bg-dark bg-opacity-50 position-fixed top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center p-2">
                <div className="bg-white shadow p-2 rounded position-relative">
                    <button 
                        onClick={onClose}
                        className="position-absolute top-0 end-0 btn"
                    >
                        <span>X</span>
                    </button>
                    <div className="mt-5">
                        { children }
                    </div>
                </div>
            </div>
        ))
        
    )
}


export default LoginModal
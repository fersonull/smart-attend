import { blueToViolet } from '@/modules/styles'
import { useState } from 'react'
import { Link } from '@inertiajs/react'
import LoginModal from '@/Pages/Auth/LoginModal'

const Nav = () => {

    const [open, setModal] = useState(false)

    return (
        <div>
            <nav className='py-4'>
                <div className="container-lg d-flex align-items-center justif-content-center">
                    <div className="d-flex align-items-center justify-content-between w-100 h-100">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="text-white">
                                <a href="/" className="fs-4 poppins-bold me-4 d-flex align-items-center" style={blueToViolet}>
                                    SmartAttend
                                </a>
                            </div>
                        </div>
                        <div className="d-flex h-100 align-items-center justify-content-center">
                            <button
                                onClick={() => setModal(!open)}
                                className="px-3 py-1 rounded-pill bg-dark text-white poppins-semibold"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <LoginModal isOpen={open} onClose={() => setModal(false)}>
                Login Modal
            </LoginModal>
        </div>
    )
}

export default Nav
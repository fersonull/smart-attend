import { blueToViolet } from '@/modules/styles'
import { useState } from 'react'
import { Link, usePage } from '@inertiajs/react'
import { RiLoginCircleLine } from "react-icons/ri";
import { LayoutDashboard } from 'lucide-react';

const Nav = () => {

    const { auth } = usePage().props

    return (
        <div>
            <nav className='py-md-4 py-3'>
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
                            {auth.user ? (
                                <>
                                    <a
                                        href="/dashboard"
                                        className="px-3 py-2 rounded-pill bg-dark text-white d-none d-md-flex align-items-center"
                                    >
                                        Dashboard
                                    </a>
                                    <a
                                        href="/dashboard"
                                        className="p-2 rounded-circle bg-dark text-white d-md-none d-flex align-items-center"
                                    >
                                        <LayoutDashboard size={18} />
                                    </a>
                                </>
                            ) : (
                                <>
                                    <a
                                        href="/login"
                                        className="px-3 py-2 rounded-pill bg-dark text-white d-none d-md-flex align-items-center justify-content-center"
                                    >
                                        <span className="">Login</span>
                                        {/* <RiLoginCircleLine className="ms-2" color='#1A53E4' /> */}
                                    </a>
                                    <a
                                        href="/login"
                                        className="p-2 rounded-circle bg-dark text-white d-flex d-md-none align-items-center justify-content-center"
                                    >
                                        <RiLoginCircleLine color='white' />
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav
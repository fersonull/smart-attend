// import { Link } from '@inertiajs/react'
import { blueToViolet, linearBg } from '@/modules/styles'
import Nav from '@/Components/Nav'

const Layout = ({ children }) => {

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center just overflow-hidden">
            { children }
        </div>
    )
}

export default Layout
// import { Link } from '@inertiajs/react'
import { blueToViolet, linearBg } from '@/modules/styles'
import Nav from '@/Components/Nav'

const Layout = ({ children }) => {

    return (
        <div className="vh-100 d-flex flex-column gradient overflow-hidden">
            <Nav />

            <main className="container-lg flex-grow-1">
                { children }
            </main>
        </div>
    )
}

export default Layout
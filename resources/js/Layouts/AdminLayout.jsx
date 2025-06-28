// import { Link } from '@inertiajs/react'
import { blueToViolet, linearBg } from "@/modules/styles";
import Nav from "@/Components/Nav";
import AdminNav from "../Components/AdminNav";

const Layout = ({ children }) => {
    return (
        <div className="min-vh-100 d-flex overflow-hidden">
            <AdminNav />

            <main className="container-lg flex-grow-1 p-3">{children}</main>
        </div>
    );
};

export default Layout;

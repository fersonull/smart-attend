// import { Link } from '@inertiajs/react'
import { blueToViolet, linearBg } from "@/modules/styles";
import Nav from "@/Components/Nav";
import UserNav from "../Components/UserNav";

const Layout = ({ children }) => {
    return (
        <div className="min-vh-100 d-flex flex-column overflow-hidden">
            <UserNav />

            <main className="container-lg flex-grow-1">{children}</main>
        </div>
    );
};

export default Layout;

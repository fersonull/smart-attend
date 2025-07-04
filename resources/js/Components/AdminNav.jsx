import React, { useState } from "react";
import { usePage, Link } from "@inertiajs/react";
import { blueToViolet } from "@/modules/styles";
import { isActive } from "@/modules/checkCurrentURL";
import { MdSpaceDashboard } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";

const AdminNav = () => {
    const page = usePage();

    const { url } = page;
    const { auth } = page.props;
    const [iconColor, setColor] = useState("");

    const navs = [
        {
            label: "Dashboard",
            link: "/admin-dashboard",
            icon: <MdSpaceDashboard color={iconColor} />,
        },
        { label: "Students", link: "/students", icon: <FaChildren /> },
    ];

    // console.log(url);
    // console.log(auth);

    // console.log(navs[0].link);
    // console.log(isActive(url, navs[0].link));

    return (
        <div className="w-25 p-3 shadow-sm border">
            <div className="h-100 d-flex flex-column">
                <div className="w-100 text-center mb-3">
                    <a
                        href="/"
                        className="fs-3 poppins-bold"
                        style={blueToViolet}
                    >
                        SmartAttend
                    </a>
                </div>

                <div className="flex-grow-1 d-flex flex-column">
                    {navs.map(({ label, link, icon }) => {
                        const active = isActive(url, link);

                        return (
                            <div
                                key={label}
                                className={`d-flex align-items-center justify-content-center gap-2 p-2 ${
                                    active ? "fw-bold" : ""
                                }`}
                            >
                                {icon}
                                <Link href={link} className="w-100 text-body">
                                    {label}
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <div className="shadow-sm p-2 d-flex align-items-center justify-content-start gap-2 rounded border">
                    <div className="rounded-circle p-3 bg-warning"></div>
                    <div className="d-flex flex-column align-items-start w-100">
                        <span className="nunito-extrab">{auth.user.name}</span>
                        <p className="text-muted fs-6 nunito">
                            {auth.user.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNav;

import { blueToViolet } from "@/modules/styles";
import { MdLogout } from "react-icons/md";

const UserNav = () => {
    return (
        <div>
            <nav className="py-md-4 py-3">
                <div className="container-lg d-flex align-items-center justif-content-center">
                    <div className="d-flex align-items-center justify-content-between w-100 h-100">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="text-white">
                                <a
                                    href="/"
                                    className="fs-4 poppins-bold me-4 d-flex align-items-center"
                                    style={blueToViolet}
                                >
                                    SmartAttend
                                </a>
                            </div>
                        </div>
                        <div className="d-flex h-100 align-items-center justify-content-center">
                            <button
                                className="px-2 py-1 border rounded shadow-sm text-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#modal"
                            >
                                <MdLogout />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default UserNav;

import React from "react";
import { IoMdPrint } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { blueToViolet } from "@/modules/styles";

const QrCode = ({ auth }) => {
    return (
        <div className="mt-3 mb-5 d-flex flex-column h-100 p-2 d-flex align-items-center justify-content-center">
            <div>
                <div className="my-2">
                    <h5 className="">
                        Welcome,
                        <div className="fs-4" style={blueToViolet}>
                            {auth.user.name}
                        </div>
                    </h5>
                </div>
                <div
                    className="shadow-sm p-3 rounded border"
                    dangerouslySetInnerHTML={{ __html: auth.qrCode }}
                ></div>
                <div className="d-flex gap-3">
                    <button className="flex-grow-1 mt-3 border px-2 py-1 rounded text-bg-primary">
                        <MdFileDownload /> Download
                    </button>
                    <button className="flex-grow-1 mt-3 border px-2 py-1 rounded">
                        <IoMdPrint color="blue" /> Print
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QrCode;

import { usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Scanner } from "@yudiel/react-qr-scanner";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { useState, useEffect } from "react";
// import axios from "axios";

const Dashboard = () => {
    const page = usePage();
    const { auth } = page.props;
    const [paused, setPaused] = useState(false);
    const [scannedIDs, setScannedID] = useState([]);

    const handleScan = async ([{ rawValue }]) => {
        const newScanned = { id: rawValue };

        try {
            const res = await fetch("http://localhost:8000/verify-scan", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newScanned),
            });

            const data = await res.json();
            setScannedID((prev) => [...prev, newScanned]);

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleScanError = (err) => {
        console.log(err);
    };

    console.log(scannedIDs);

    const pauseScan = () => setPaused(!paused);

    return (
        <div className="h-100">
            <div className="w-100 mt-5">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="flex-grow-1">
                        <div className=" mx-auto p-3 border w-50 overflow-hidden rounded shadow-sm">
                            <div className="rounded overflow-hidden">
                                <Scanner
                                    onScan={handleScan}
                                    onError={handleScanError}
                                    allowMultiple={false}
                                    paused={paused}
                                    classNames={`rounded`}
                                />
                            </div>
                            <button
                                onClick={pauseScan}
                                className="mt-2 border rounded"
                            >
                                {paused ? (
                                    <MdPlayArrow color="blue" />
                                ) : (
                                    <MdPause color="red" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100">
                {/* <div className="mx-auto">Scanned ID: {scannedID}</div> */}
            </div>
        </div>
    );
};

Dashboard.layout = (dashboard) => <AdminLayout children={dashboard} />;

export default Dashboard;

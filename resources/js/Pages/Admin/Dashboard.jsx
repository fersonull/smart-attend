import { usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Scanner } from "@yudiel/react-qr-scanner";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { useState } from "react";

const Dashboard = () => {
    const page = usePage();
    const { auth } = page.props;
    const [paused, setPaused] = useState(false);
    const [scannedID, setScannedID] = useState(null);

    // console.log(auth.user);

    const handleScan = ([{ rawValue }]) => {
        setScannedID(rawValue);
        // console.log(text);
    };

    const pauseScan = () => setPaused(!paused);

    return (
        <div className="h-100">
            <div>
                <h2>Dashboard</h2>
            </div>

            <div className="w-100">
                <div className="mx-auto p-3 border w-25 overflow-hidden rounded shadow-sm">
                    <div className="rounded overflow-hidden">
                        <Scanner
                            onScan={handleScan}
                            paused={paused}
                            classNames={`rounded`}
                        />
                    </div>
                    <button onClick={pauseScan} className="mt-2 border rounded">
                        {paused ? (
                            <MdPlayArrow color="blue" />
                        ) : (
                            <MdPause color="red" />
                        )}
                    </button>
                </div>
            </div>

            <div className="w-100">
                <div className="mx-auto">Scanned ID: {scannedID}</div>
            </div>
        </div>
    );
};

Dashboard.layout = (dashboard) => <AdminLayout children={dashboard} />;

export default Dashboard;

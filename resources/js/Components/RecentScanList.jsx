import React, { useEffect, useState } from "react";

const RecentScanList = () => {
    const [scannedIDs, setScannedID] = useState([]);

    

    return (
        <div className="card w-100">
            <div className="card-body">
                <h4>Recent scans</h4>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Data</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scannedIDs.map(([{ id, name }]) => (
                            <tr key={id}>{name}</tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentScanList;

import React from "react";

const RecordTable = () => {
    return (
        <div className="">
            <div className="card">
                <div className="card-body table-responsive">
                    <h2 className="mb-2">Recent Records</h2>
                    <table className="table table-striped table-hover table-borderless">
                        <thead>
                            <tr>
                                <th>Mode</th>
                                <th>Time</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td>Attend</td>
                                <td>8:00 am</td>
                                <td>Apr 24, 2003</td>
                            </tr>
                            <tr>
                                <td>Depart</td>
                                <td>4:00 pm</td>
                                <td>Apr 24, 2003</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecordTable;

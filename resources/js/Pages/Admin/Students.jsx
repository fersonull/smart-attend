import { usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

const Dashboard = () => {
    const page = usePage();
    const { auth } = page.props;

    // console.log(auth.user);

    return (
        <div className="h-100">
            <div>
                <h2>Students</h2>
            </div>
        </div>
    );
};

Dashboard.layout = (dashboard) => <AdminLayout children={dashboard} />;

export default Dashboard;

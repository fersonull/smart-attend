import { usePage } from "@inertiajs/react";

const Dashboard = () => {
    const page = usePage();
    const { auth } = page.props;

    console.log(auth.user);

    return (
        <div>
            <div>
                <h2>Welcome, {auth.user.name}</h2>
            </div>
        </div>
    );
};

export default Dashboard;

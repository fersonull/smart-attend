import { Head, usePage, router } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RecordTable from "../../Components/RecordTable";
import QrCode from "../../Components/QrCode";
import UserLayout from "@/Layouts/UserLayout";

const Dashboard = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    console.log(router);

    const page = usePage();
    const { auth } = page.props;

    const pageName = page.component.includes("/")
        ? page.component.split("/").pop()
        : page.component;

    return (
        <div className="h-100">
            <Head title={pageName} />

            <QrCode auth={auth} />

            <RecordTable />
        </div>
    );
};

Dashboard.layout = (page) => <UserLayout children={page} />;

export default Dashboard;

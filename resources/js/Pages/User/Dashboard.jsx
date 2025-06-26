import { Head, usePage, router } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RecordTable from "../../Components/RecordTable";
import QrCode from "../../Components/QrCode";
import UserLayout from "@/Layouts/UserLayout";
import Modal from "../../Components/Modal";
import { PiWarningCircleBold } from "react-icons/pi";

const Dashboard = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // console.log(router);

    const page = usePage();
    const { auth } = page.props;

    const pageName = page.component.includes("/")
        ? page.component.split("/").pop()
        : page.component;

    return (
        <div className="h-100">
            <Head title={pageName} />

            <Modal>
                <PiWarningCircleBold size={60} color="red" />
                <p className="fs-4 nunito-extrab">Logout</p>
                <p>Are you sure?</p>
                <button
                    onClick={() => router.post("/logout")}
                    className="mt-2 px-2 py-1 border text-bg-danger rounded"
                >
                    Confirm
                </button>
            </Modal>

            <QrCode auth={auth} />

            <RecordTable />
        </div>
    );
};

Dashboard.layout = (page) => <UserLayout children={page} />;

export default Dashboard;

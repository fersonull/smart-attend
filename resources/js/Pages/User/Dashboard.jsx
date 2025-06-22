import { Head, usePage, router } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import UserLayout from "@/Layouts/UserLayout";

const Dashboard = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const page = usePage();
    const { auth } = page.props;

    const pageName = page.component.includes("/")
        ? page.component.split("/").pop()
        : page.component;

    return (
        <div>
            <Head title={pageName} />

            <h2 className="display-4 nunito-bold">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    Welcome,
                </motion.div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {auth.user.name}.
                </motion.div>
            </h2>

            <div className="p-2 d-flex align-items-center justify-content-start">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    dangerouslySetInnerHTML={{ __html: auth.qrCode }}
                ></motion.div>
            </div>

            <button
                onClick={() => router.post("/logout")}
                className="btn btn-danger"
            >
                Logout
            </button>
        </div>
    );
};

Dashboard.layout = (page) => <UserLayout children={page} />;

export default Dashboard;

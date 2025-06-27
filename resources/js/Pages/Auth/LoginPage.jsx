import { Head } from "@inertiajs/react";
import { bgGradientButton } from "@/modules/styles";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const LoginPage = () => {
    const { data, setData, errors, processing, post } = useForm({
        email: "",
        password: "",
    });

    const { flash } = usePage().props;

    const { email, password } = errors;

    // console.log(errors)

    function submit(e) {
        e.preventDefault();
        post("/login");
    }

    console.log(flash);

    useEffect(() => {
        if (flash.logOutMessage) toast.success(flash.logOutMessage);
    }, [flash.logOutMessage]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="p-4 bg-white shadow rounded-4"
        >
            <Toaster position="top-right" />
            <form onSubmit={submit}>
                <h3 className="mb-4 display-5">Login</h3>
                <div className=" d-flex flex-column gap-3">
                    <div className="d-flex flex-column gap-1">
                        <label>Email</label>
                        <input
                            type="text"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="form-control"
                        />
                        {email && (
                            <span className="text-danger form-text m-0">
                                {email}
                            </span>
                        )}
                    </div>
                    <div className="d-flex flex-column gap-1">
                        <label>Password</label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="form-control"
                        />
                        {password && (
                            <span className="text-danger form-text m-0">
                                {password}
                            </span>
                        )}
                    </div>

                    <div className="d-flex"></div>

                    <button
                        disabled={processing}
                        type="submit"
                        className="rounded-4 py-1 border poppins-semibold"
                        style={bgGradientButton}
                    >
                        {processing ? "..." : "Login"}
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

LoginPage.layout = (page) => <AuthLayout children={page} />;

export default LoginPage;

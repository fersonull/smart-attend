import { Head } from "@inertiajs/react";
import { bgGradientButton } from "@/modules/styles";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import LoginForm from "../../Components/LoginForm";

const LoginPage = () => {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.logOutMessage) toast.success(flash.logOutMessage);
    }, [flash.logOutMessage]);

    // const sample = (email) => {
    //     console.log(email);
    // };

    return (
        <>
            <Toaster position="top-right" />
            <LoginForm />
        </>
    );
};

LoginPage.layout = (page) => <AuthLayout children={page} />;

export default LoginPage;

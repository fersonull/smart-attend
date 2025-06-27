import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { blueToViolet } from "@/modules/styles";

const LoginForm = () => {
    const { data, setData, errors, processing, post } = useForm({
        email: "",
        password: "",
    });

    const { email, password } = errors;

    console.log(errors);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <div className="container w-75 rounded-4 overflow-hidden shadow-sm border">
            <div className="row">
                <div className="col">
                    <div className="p-5 d-flex flex-column align-items-center justify-content-center">
                        <div className="mb-5 text-start w-100">
                            <p
                                href="/"
                                className="fs-5 poppins-bold"
                                style={blueToViolet}
                            >
                                SmartAttend
                            </p>
                            <h2 className="nunito-extrab">
                                Login with your account
                            </h2>
                        </div>
                        <div className="w-100 ">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group w-100 mb-4">
                                    <label htmlFor="" className="form-label">
                                        Email Address
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="johndoe@gmail.com"
                                        className="form-control"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group w-100 mb-4">
                                    <label htmlFor="" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                </div>

                                <button
                                    className="border text-bg-primary px-2 py-2 rounded-pill w-100 nunito-extrab"
                                    // onClick={}
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col gradient overflow-hidden position-relative">
                    {/* <img
                        src="/assets/img/laptop.svg"
                        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                        alt="Laptop"
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default LoginForm;

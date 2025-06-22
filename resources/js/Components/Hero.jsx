import React from "react";
import { blueToViolet } from "@/modules/styles";
import { usePage } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CircleArrowRight } from "lucide-react";

const Hero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-5 mt-md-5">
            <div className="d-flex align-items-md-center align-items-start flex-column text-center lg-w-md">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="poppins-extrabold display-5 text-start text-md-center d-none d-md-block"
                >
                    Seamlessly <span style={blueToViolet}>track</span> and{" "}
                    <span style={blueToViolet}>manage</span> your students'
                    attendance
                </motion.h2>

                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="poppins-extrabold display-3 text-start text-md-center d-md-none"
                >
                    Seamlessly <span style={blueToViolet}>track</span> and{" "}
                    <span style={blueToViolet}>manage</span> your students'
                    attendance
                </motion.h2>

                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="fs-6 d-none d-md-block nunito-semib w-75 text-start text-md-center"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate culpa quo dicta enim cupiditate necessitatibus.
                </motion.p>

                <motion.button
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="px-3 py-2 bg-black text-white mt-3 rounded-pill d-none d-md-flex align-items-center justify-content-center"
                >
                    <p className="">Get started</p>
                    <CircleArrowRight size={20} color="red" className="ms-2" />
                </motion.button>

                <motion.button
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="px-3 py-2 bg-black text-white mt-3 rounded-pill d-md-none d-flex align-items-center justify-content-center"
                >
                    <span className="fs-8">Get started</span>
                    {/* <CircleArrowRight size={15} color='red' className="ms-1"/>s */}
                </motion.button>
            </div>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-100 text-end text-md-center"
            >
                <img src="/assets/img/laptop.svg" className="w-100" />
            </motion.div>
        </div>
    );
};

export default Hero;

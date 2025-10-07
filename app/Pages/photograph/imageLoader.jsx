"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
    "/Images/amblent/img1.jpg",
    "/Images/amblent/img2.jpg",
    "/Images/amblent/img3.jpg",
    "/Images/amblent/img4.jpg",
    "/Images/amblent/img5.jpg",
    "/Images/amblent/img6.jpg",
    "/Images/amblent/img7.jpg",
    "/Images/amblent/img8.jpg",
    "/Images/amblent/img9.jpg",
    "/Images/amblent/img10.jpg",
    "/Images/amblent/img11.jpg",
    "/Images/amblent/img12.jpg",
    "/Images/amblent/img16.jpg",
    "/Images/amblent/img17.jpg",
    "/Images/amblent/img18.jpg",
];

const Skiper30 = () => {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ["start end", "end start"],
    });

    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
    const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);

    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", resize);
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <main className="w-full bg-[#eee] text-black">
            <div className="font-geist flex h-screen items-center justify-center gap-2">
                <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
                    <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
                        scroll down to see
                    </span>
                </div>
            </div>

            <div
                ref={gallery}
                className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-white p-[2vw]"
            >
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                <Column images={[images[9], images[10], images[11]]} y={y4} />
                <Column images={[images[12], images[13], images[14]]} y={y5} />
            </div>

            <div className="font-geist relative flex h-screen items-center justify-center gap-2">
                <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
                    <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
                        scroll up to see
                    </span>
                </div>
            </div>
        </main>
    );
};

const Column = ({ images, y }) => {
    return (
        <motion.div
            className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
            style={{ y }}
        >
            {images.map((src, i) => (
                <div key={i} className="relative h-full w-full overflow-hidden">
                    <Image
                        src={src}
                        alt="image"
                        height={500}
                        width={500}
                        className="pointer-events-none object-cover"
                    />
                </div>
            ))}
        </motion.div>
    );
};

export { Skiper30 };

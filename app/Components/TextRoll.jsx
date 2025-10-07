"use client";

import { motion } from "framer-motion";
import React from "react";

const navigationItems = [
    { name: "HeLlO", description: "[0]" },
    { name: "WoRlD", description: "[2]" },
];

const STAGGER = 0.035;

const Skiper58 = () => {
    return (
        <ul className="bs flex min-h-full w-full flex-1 flex-col items-center justify-center gap-3 rounded-2xl px-7 py-3 backdrop-blur-sm">
            {navigationItems.map((item, index) => (
                <li
                    className="relative flex cursor-pointer flex-col items-center overflow-visible"
                    key={index}
                >
                    <div className="relative flex items-start">
                        <TextRoll
                            center
                            className="text-8xl font-extrabold font-mono leading-[0.8] tracking-[-0.03em] transition-colors lg:text-8xl text-orange-600"
                        >
                            {item.name}
                        </TextRoll>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export { Skiper58 }

const TextRoll = ({ children, className, center = false }) => {
    // Safely convert children to string and split
    const letters = children ? String(children).split("") : [];

    const getDelay = (i) => center ? STAGGER * Math.abs(i - (letters.length - 1) / 2) : STAGGER * i;

    return (
        <motion.span
            initial="initial"
            whileHover="hovered"
            className={`relative block overflow-hidden ${className}`}
            style={{ lineHeight: 0.75 }}
        >
            <div>
                {letters.map((l, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        transition={{ ease: "easeInOut", delay: getDelay(i) }}
                        className="inline-block"
                    >
                        {l}
                    </motion.span>
                ))}
            </div>

            <div className="absolute inset-0">
                {letters.map((l, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        transition={{ ease: "easeInOut", delay: getDelay(i) }}
                        className="inline-block"
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.span>
    );
};

export { TextRoll };

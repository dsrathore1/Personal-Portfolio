"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[45rem] min-w-md flex justify-center items-center flex-col p-6 h-[19rem] bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700"
        >
            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
                💌 Join My Newsletter
            </h1>
            <p className="text-center mb-4 text-gray-500 dark:text-gray-400 mt-2">
                Get my latest blogs & insights delivered to your inbox.
            </p>

            <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col sm:flex-row gap-3"
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                />
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition"
                >
                    {status === "loading" ? "Subscribing..." : "Subscribe"}
                </motion.button>
            </form>

            {status === "success" && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 text-center mt-4"
                >
                    ✅ Subscribed successfully!
                </motion.p>
            )}
            {status === "error" && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 text-center mt-4"
                >
                    ❌ Subscription failed. Try again.
                </motion.p>
            )}
        </motion.div>
    );
}

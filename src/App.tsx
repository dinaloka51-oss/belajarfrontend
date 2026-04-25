"use client";

import { useState } from "react";
import { motion, cubicBezier } from "framer-motion";

interface FormState {
  email: string;
  password: string;
}

export default function GlassLogin() {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
  });

  const handleChange =
    (key: keyof FormState) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [key]: e.target.value }));
      };

  const easeSmooth = cubicBezier(0.23, 1, 0.32, 1);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeSmooth },
    },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-fuchsia-700 to-orange-500" />

      {/* 🔮 GLOW BLOBS */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] opacity-40 -top-20 -left-20"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-pink-400 rounded-full blur-[100px] opacity-40 bottom-0 right-0"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* 🧊 GLASS CARD */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-[350px] p-8 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
        }}
      >
        {/* TITLE */}
        <motion.h2
          variants={item}
          className="text-white text-2xl font-bold mb-6"
        >
          Welcome Back
        </motion.h2>

        {/* EMAIL */}
        <motion.div variants={item} className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange("email")}
            className="w-full px-4 py-3 rounded-full text-white placeholder-white/50 outline-none"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          />
        </motion.div>

        {/* PASSWORD */}
        <motion.div variants={item} className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange("password")}
            className="w-full px-4 py-3 rounded-full text-white placeholder-white/50 outline-none"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          />
        </motion.div>

        {/* BUTTON */}
        <motion.button
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-full text-white font-bold"
          style={{
            background: "linear-gradient(90deg,#a855f7,#ec4899)",
            boxShadow: "0 10px 30px rgba(168,85,247,0.5)",
          }}
        >
          SIGN IN
        </motion.button>

        {/* FOOTER */}
        <motion.p
          variants={item}
          className="text-white/60 text-xs mt-4 text-center"
        >
          Don’t have an account?{" "}
          <span className="text-white font-semibold cursor-pointer">
            Sign up
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}
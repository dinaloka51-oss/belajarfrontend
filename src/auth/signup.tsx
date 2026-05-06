import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    School,
    User,
    History,
    Badge,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    ShieldCheck,
    Fingerprint,
    Scale
} from "lucide-react";

/**
 * SmartExam Sign Up Page
 * Converted to TypeScript, Tailwind CSS, and Framer Motion.
 * Theme: Focused, Secure, and Academic.
 */

const SignUpPage = () => {
    const [role, setRole] = useState<'student' | 'teacher'>('student');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#f7f9fb] font-sans flex flex-col items-center justify-center p-6 selection:bg-indigo-100 selection:text-[#1a146b]">

            {/* Brand Identity */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 flex items-center gap-3"
            >
                <div className="w-10 h-10 bg-[#1a146b] rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                    <School size={24} />
                </div>
                <span className="text-2xl font-black tracking-tighter text-[#1a146b]">SmartExam</span>
            </motion.div>

            {/* Main Auth Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-[480px] bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-indigo-900/5 relative overflow-hidden"
            >
                {/* Subtle decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50" />

                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Create Your Account</h1>
                    <p className="text-slate-500 text-sm">Join the platform for focused assessment excellence.</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                    {/* Role Selection Switch */}
                    <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Joining as a</label>
                        <div className="grid grid-cols-2 gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                            <button
                                type="button"
                                onClick={() => setRole('student')}
                                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all ${role === 'student'
                                    ? 'bg-white text-[#1a146b] shadow-sm border border-slate-200'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                <User size={16} />
                                Student
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('teacher')}
                                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all ${role === 'teacher'
                                    ? 'bg-white text-[#1a146b] shadow-sm border border-slate-200'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                <History size={16} />
                                Teacher
                            </button>
                        </div>
                    </div>

                    {/* Input Groups */}
                    <div className="space-y-4">
                        {/* Full Name */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="name">Full Name</label>
                            <div className="relative group">
                                <Badge className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1a146b] transition-colors" size={18} />
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-[#1a146b] outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Academic Email */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="email">Academic Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1a146b] transition-colors" size={18} />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@university.edu"
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-[#1a146b] outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="password">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1a146b] transition-colors" size={18} />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-[#1a146b] outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            <p className="text-[11px] text-slate-400 italic mt-1 px-1">Must be at least 8 characters with a symbol.</p>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3 px-1">
                        <input
                            type="checkbox"
                            id="terms"
                            className="mt-1 w-4 h-4 rounded border-slate-300 text-[#1a146b] focus:ring-[#1a146b]"
                        />
                        <label htmlFor="terms" className="text-xs text-slate-500 leading-normal">
                            I agree to the <a href="#" className="text-[#1a146b] font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-[#1a146b] font-bold hover:underline">Privacy Policy</a>.
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#1a146b] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.98] transition-all shadow-lg shadow-indigo-100"
                    >
                        Create Account
                        <ArrowRight size={18} />
                    </button>

                    {/* Social Sign Up */}
                    <div className="relative py-4 flex items-center">
                        <div className="flex-grow border-t border-slate-100"></div>
                        <span className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Or continue with</span>
                        <div className="flex-grow border-t border-slate-100"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button type="button" className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="w-4 h-4 grayscale" />
                            Google
                        </button>
                        <button type="button" className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" /></svg>
                            Facebook
                        </button>
                    </div>

                    <p className="text-center text-sm font-medium text-slate-500 mt-8">
                        Already have an account?
                        <a href="#" className="text-[#1a146b] font-bold ml-1.5 hover:underline">Sign In</a>
                    </p>
                </form>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale"
            >
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <ShieldCheck size={14} />
                    Secure Assessment
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <Fingerprint size={14} />
                    ISO 27001 Certified
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <Scale size={14} />
                    GDPR Compliant
                </div>
            </motion.div>
        </div>
    );
};

export default SignUpPage;
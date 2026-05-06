import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Lock,
    Mail,
    Key,
    Eye,
    EyeOff,
    ArrowRight,
    ShieldCheck,
    Fingerprint
} from 'lucide-react';

/**
 * SmartExam Login Page
 * Converted to TypeScript, Tailwind CSS, and Framer Motion.
 * Theme: Trust-oriented, academic, and secure.
 */

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#f7f9fb] font-sans flex flex-col selection:bg-indigo-100 selection:text-[#1a146b]">
            {/* Transactional Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <BookOpen className="text-[#1a146b]" size={24} />
                        <span className="text-xl font-bold tracking-tighter text-[#1a146b]">SmartExam</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-500">
                        <a href="#" className="hover:text-[#1a146b] transition-colors">Features</a>
                        <a href="#" className="hover:text-[#1a146b] transition-colors">Pricing</a>
                        <a href="#" className="hover:text-[#1a146b] transition-colors">About</a>
                    </div>

                    <a href="#" className="text-sm font-bold text-[#1a146b] border-b-2 border-[#1a146b] pb-0.5">
                        Login
                    </a>
                </div>
            </nav>

            <main className="flex-grow flex items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden">
                {/* Subtle background decoration */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] opacity-60" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-60" />

                <div className="w-full max-w-[440px] z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-indigo-50 text-[#1a146b] mb-6">
                            <Lock size={28} />
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
                        <p className="text-slate-500">Access your academic dashboard and assessments.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white border border-slate-200 rounded-[2rem] shadow-xl shadow-indigo-900/5 p-8 md:p-10"
                    >
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="email">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1a146b] transition-colors" size={18} />
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="name@university.edu"
                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-50 focus:border-[#1a146b] outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-sm font-bold text-slate-700" htmlFor="password">Password</label>
                                    <a href="#" className="text-xs font-bold text-[#1a146b] hover:underline">Forgot?</a>
                                </div>
                                <div className="relative group">
                                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1a146b] transition-colors" size={18} />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
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
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center gap-3 ml-1">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="w-4 h-4 rounded border-slate-300 text-[#1a146b] focus:ring-[#1a146b]"
                                />
                                <label htmlFor="remember" className="text-sm text-slate-500 font-medium">Stay signed in for 30 days</label>
                            </div>

                            {/* Actions */}
                            <div className="pt-2 space-y-4">
                                <button
                                    type="submit"
                                    className="w-full bg-[#1a146b] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-indigo-100"
                                >
                                    Sign In
                                    <ArrowRight size={18} />
                                </button>

                                <div className="relative py-2 flex items-center">
                                    <div className="flex-grow border-t border-slate-100"></div>
                                    <span className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">or</span>
                                    <div className="flex-grow border-t border-slate-100"></div>
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-white border border-slate-200 text-slate-700 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 active:scale-[0.98] transition-all"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                    </svg>
                                    Continue with Google
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-slate-500 font-medium">
                                New to the platform?
                                <a href="#" className="text-[#1a146b] font-bold ml-1.5 hover:underline">Create Account</a>
                            </p>
                        </div>
                    </motion.div>

                    {/* Security Certifications */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 flex items-center justify-center gap-6 opacity-40 grayscale"
                    >
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">ISO 27001 Certified</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-400" />
                        <div className="flex items-center gap-1.5">
                            <Fingerprint size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">RSA Encrypted</span>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Side Graphic */}
                <div className="hidden lg:block fixed right-12 bottom-12 w-64 h-64 opacity-5 pointer-events-none">
                    <BookOpen className="w-full h-full text-[#1a146b]" strokeWidth={0.5} />
                </div>
            </main>

            <footer className="w-full bg-white border-t border-slate-100 py-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <div className="text-lg font-black text-[#1a146b] mb-1">SmartExam</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                            © 2024 Focused Assessment Excellence.
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Accessibility</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SignInPage;
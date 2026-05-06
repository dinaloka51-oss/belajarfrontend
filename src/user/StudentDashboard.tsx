import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SMARTEXAM ACADEMIC PORTAL
 * Tone: Industrial / Utilitarian Refined
 * A high-contrast, structured dashboard designed for academic precision.
 */

// --- Components ---

const SidebarItem = ({
    icon,
    label,
    active = false,
    fill = false
}: {
    icon: string;
    label: string;
    active?: boolean;
    fill?: boolean;
}) => (
    <motion.li
        whileHover={{ x: 4 }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        <a
            href="#"
            className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ease-in-out border-r-2 ${active
                ? 'text-indigo-900 dark:text-indigo-300 bg-white dark:bg-slate-900 border-indigo-900 dark:border-indigo-400'
                : 'text-slate-600 dark:text-slate-400 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-900'
                }`}
        >
            <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: `'FILL' ${fill || active ? 1 : 0}` }}
            >
                {icon}
            </span>
            <span className="font-medium tracking-tight">{label}</span>
        </a>
    </motion.li>
);

const ScoreItem = ({ title, date, score, icon }: { title: string; date: string; score: string; icon: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-default"
    >
        <div className="flex items-center gap-3">
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded text-indigo-700 dark:text-indigo-300">
                <span className="material-symbols-outlined text-[20px]">{icon}</span>
            </div>
            <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{date}</p>
            </div>
        </div>
        <div className="text-right">
            <p className={`text-lg font-bold ${parseInt(score) > 90 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'}`}>
                {score}%
            </p>
        </div>
    </motion.div>
);

// --- Main Page Component ---

export default function StudentDashboard() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F7F9FB] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-100 selection:text-indigo-900">


            {/* Side Navigation */}
            <nav className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-slate-200 bg-slate-50 py-4 dark:border-slate-800 dark:bg-slate-950 md:flex z-40">
                <div className="px-6 pb-6 border-b border-slate-200 dark:border-slate-800 mb-4">
                    <h1 className="text-xl font-black text-indigo-900 dark:text-indigo-300 tracking-tighter">SMARTEXAM</h1>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">Academic Portal v2.0</p>
                </div>

                <div className="px-4 mb-6">
                    <button className="group relative w-full overflow-hidden bg-indigo-900 text-white py-2.5 px-4 rounded-md flex items-center justify-center gap-2 transition-all hover:bg-indigo-800 active:scale-95">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        <span className="text-sm font-bold tracking-wide">New Examination</span>
                    </button>
                </div>

                <ul className="flex-1 px-2 space-y-1 overflow-y-auto">
                    <SidebarItem icon="dashboard" label="Dashboard" active />
                    <SidebarItem icon="quiz" label="Exams" />
                    <SidebarItem icon="analytics" label="Analytics" />
                    <SidebarItem icon="grade" label="Results" />
                    <SidebarItem icon="settings" label="Settings" />
                </ul>

                <div className="px-2 mt-auto border-t border-slate-200 dark:border-slate-800 pt-4">
                    <ul className="space-y-1">
                        <SidebarItem icon="contact_support" label="Support" />
                        <SidebarItem icon="logout" label="Log Out" />
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">

                {/* Top Header */}
                <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
                    <div className="md:hidden">
                        <h1 className="text-lg font-black text-indigo-900 dark:text-indigo-300">SmartExam</h1>
                    </div>
                    <div className="hidden md:block" /> {/* Spacer for desktop */}

                    <div className="flex items-center gap-1">
                        {['notifications', 'help_outline', 'account_circle'].map((icon) => (
                            <button key={icon} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                                <span className="material-symbols-outlined">{icon}</span>
                            </button>
                        ))}
                    </div>
                </header>

                <main className="p-6 md:p-10 max-w-7xl mx-auto w-full">
                    {/* Welcome Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
                    >
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                                Welcome back, <span className="text-indigo-600 dark:text-indigo-400">Alex.</span>
                            </h2>
                            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Here&apos;s your academic overview for the Spring Semester.</p>
                        </div>

                        <div className="relative group bg-indigo-900 dark:bg-indigo-600 rounded-xl p-5 flex items-center gap-5 text-white shadow-xl shadow-indigo-200 dark:shadow-none min-w-[240px] overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />
                            <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/20">
                                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Total Average Score</p>
                                <p className="text-3xl font-black">92.4%</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left Column */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Active Exam */}
                            <section>
                                <h3 className="text-xs uppercase tracking-[0.2em] font-black text-slate-400 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    Live Now
                                </h3>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="bg-white dark:bg-slate-900 border-2 border-red-100 dark:border-red-900/30 rounded-2xl p-8 shadow-sm relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 p-4">
                                        <div className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-black uppercase rounded-full border border-red-100 dark:border-red-900/30">
                                            Emergency Alert
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                        <div>
                                            <div className="flex items-center gap-3 mb-4 text-slate-500">
                                                <span className="material-symbols-outlined text-sm">schedule</span>
                                                <span className="text-xs font-bold uppercase tracking-wider">60 mins remaining</span>
                                            </div>
                                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Advanced Calculus - Midterm</h4>
                                            <p className="text-slate-500 font-medium italic">MATH 301 • Prof. Davis</p>
                                        </div>
                                        <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                            <span className="material-symbols-outlined mr-2">play_circle</span>
                                            Join Exam
                                        </button>
                                    </div>
                                </motion.div>
                            </section>

                            {/* Upcoming */}
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xs uppercase tracking-[0.2em] font-black text-slate-400">Upcoming Schedule</h3>
                                    <button className="text-xs font-bold text-indigo-600 hover:underline">View Calendar</button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { month: 'OCT', day: '14', time: '10:00 AM', title: 'Physics 101 Quiz', sub: 'Chapter 4-5: Mechanics' },
                                        { month: 'OCT', day: '18', time: '2:30 PM', title: 'Modern History Essay', sub: 'Industrial Revolution' }
                                    ].map((exam, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:shadow-lg transition-all cursor-pointer"
                                        >
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-center min-w-[50px]">
                                                    <span className="block text-[10px] font-black text-slate-500">{exam.month}</span>
                                                    <span className="block text-xl font-black text-slate-900 dark:text-white">{exam.day}</span>
                                                </div>
                                                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[14px]">alarm</span> {exam.time}
                                                </span>
                                            </div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">{exam.title}</h4>
                                            <p className="text-sm text-slate-500 mb-4">{exam.sub}</p>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '40%' }}
                                                    className="bg-indigo-600 h-full"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            <section>
                                <h3 className="text-xs uppercase tracking-[0.2em] font-black text-slate-400 mb-4">Recent Performance</h3>
                                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                        <ScoreItem title="Chemistry Lab" date="Oct 5, 2023" score="95" icon="science" />
                                        <ScoreItem title="Literature Review" date="Oct 1, 2023" score="88" icon="menu_book" />
                                        <ScoreItem title="Calculus Quiz 3" date="Sep 28, 2023" score="92" icon="calculate" />
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800">
                                        <button className="w-full text-center text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition-colors">
                                            View Full Transcript
                                        </button>
                                    </div>
                                </div>
                            </section>

                            {/* Quick Stats Card */}
                            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 text-white">
                                <h4 className="text-sm font-bold opacity-80 mb-4">Study Progress</h4>
                                <div className="flex items-end justify-between mb-2">
                                    <span className="text-3xl font-black">24/30</span>
                                    <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">Credits</span>
                                </div>
                                <div className="w-full bg-white/20 h-2 rounded-full">
                                    <div className="w-[80%] bg-white h-full rounded-full" />
                                </div>
                                <p className="mt-4 text-[11px] font-medium opacity-70 leading-relaxed">
                                    You are on track to complete your semester goals. 6 credits remaining for graduation eligibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
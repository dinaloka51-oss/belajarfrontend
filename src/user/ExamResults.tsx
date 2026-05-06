import { useState, } from 'react';
import { motion, } from 'framer-motion';

/**
 * SMARTEXAM - EXAM RESULTS PAGE
 * Tone: Industrial / Refined Utilitarian
 * Direction: A structured, high-contrast interface utilizing layered depth 
 * and intentional spacing to communicate academic precision.
 */

// --- Types & Interfaces ---

interface TopicPerformance {
    label: string;
    percentage: number;
}

// --- Components ---

const SidebarItem = ({
    icon,
    label,
    active = false
}: {
    icon: string;
    label: string;
    active?: boolean;
}) => (
    <motion.li whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
        <a
            href="#"
            className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 border-r-2 rounded-l-lg ${active
                ? 'text-indigo-900 dark:text-indigo-300 bg-white dark:bg-slate-900 border-indigo-900 dark:border-indigo-400 shadow-sm'
                : 'text-slate-500 dark:text-slate-400 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-900'
                }`}
        >
            <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: `'FILL' ${active ? 1 : 0}` }}
            >
                {icon}
            </span>
            <span className="font-semibold tracking-tight text-sm">{label}</span>
        </a>
    </motion.li>
);

const TopicProgressBar = ({ label, percentage, index }: TopicPerformance & { index: number }) => (
    <div className="space-y-2">
        <div className="flex justify-between items-center">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{label}</span>
            <span className="text-sm font-black text-indigo-900 dark:text-indigo-300">{percentage}%</span>
        </div>
        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full"
            />
        </div>
    </div>
);

// --- Main Page Component ---

export default function ExamResults() {
    const [score] = useState(85);
    const topics: TopicPerformance[] = [
        { label: "Cellular Structure", percentage: 100 },
        { label: "Genetics", percentage: 75 },
        { label: "Evolution", percentage: 80 }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-100 selection:text-indigo-900">


            {/* Side Navigation */}
            <nav className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-slate-200 bg-slate-50 py-4 dark:border-slate-800 dark:bg-slate-950 md:flex z-40">
                <div className="px-6 mb-8">
                    <h1 className="text-xl font-black text-indigo-900 dark:text-indigo-100 tracking-tighter">SMARTEXAM</h1>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-1">Academic Portal</p>
                </div>

                <div className="px-4 mb-6">
                    <button className="w-full bg-indigo-900 dark:bg-indigo-600 text-white py-2.5 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        New Examination
                    </button>
                </div>

                <ul className="flex-1 px-2 space-y-1">
                    <SidebarItem icon="dashboard" label="Dashboard" />
                    <SidebarItem icon="quiz" label="Exams" />
                    <SidebarItem icon="analytics" label="Analytics" />
                    <SidebarItem icon="grade" label="Results" active />
                    <SidebarItem icon="settings" label="Settings" />
                </ul>

                <div className="mt-auto px-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <ul className="space-y-1">
                        <SidebarItem icon="contact_support" label="Support" />
                        <SidebarItem icon="logout" label="Log Out" />
                    </ul>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="md:ml-64 flex-1 flex flex-col min-h-screen">

                {/* Header Bar */}
                <header className="sticky top-0 z-30 h-16 flex items-center justify-between px-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                    <div className="md:hidden">
                        <h1 className="text-lg font-black text-indigo-900 dark:text-indigo-300">SmartExam</h1>
                    </div>
                    <div className="hidden md:block" />
                    <div className="flex items-center gap-2">
                        {['notifications', 'help_outline', 'account_circle'].map((icon) => (
                            <button key={icon} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                                <span className="material-symbols-outlined">{icon}</span>
                            </button>
                        ))}
                    </div>
                </header>

                <div className="flex-1 p-6 md:p-12 w-full max-w-6xl mx-auto">
                    {/* Animated Entry Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-3">
                            Exam Completed!
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                            Great job completing the Advanced Biology Midterm. Here is how you did.
                        </p>
                    </motion.div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

                        {/* Score Card Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/10 rounded-bl-full -mr-10 -mt-10" />

                            {/* Radial Score Gauge */}
                            <div className="relative w-48 h-48 flex-shrink-0">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="12" className="text-slate-100 dark:text-slate-800" />
                                    <motion.circle
                                        cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="12"
                                        strokeDasharray="276.46"
                                        initial={{ strokeDashoffset: 276.46 }}
                                        animate={{ strokeDashoffset: 276.46 * (1 - score / 100) }}
                                        transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                                        className="text-indigo-600 dark:text-indigo-500 stroke-round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-5xl font-black tracking-tighter text-indigo-900 dark:text-white">{score}</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Score</span>
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left z-10">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Excellent Performance</h2>
                                <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                    You&apos;ve scored above the class average. Your strong grasp of <span className="font-bold text-indigo-600">cellular respiration</span> was key to this result.
                                </p>
                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs font-black uppercase tracking-tight">
                                        <span className="material-symbols-outlined text-sm">check_circle</span> 42 Correct
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-full text-xs font-black uppercase tracking-tight">
                                        <span className="material-symbols-outlined text-sm">cancel</span> 8 Incorrect
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Breakdown Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col"
                        >
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
                                Topic Breakdown
                            </h3>
                            <div className="space-y-8">
                                {topics.map((t, i) => (
                                    <TopicProgressBar key={t.label} {...t} index={i} />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button className="w-full sm:w-auto px-10 py-4 bg-indigo-900 dark:bg-indigo-600 text-white rounded-xl font-bold text-sm tracking-tight hover:shadow-xl hover:shadow-indigo-200 dark:hover:shadow-none transition-all flex items-center justify-center gap-3">
                            <span className="material-symbols-outlined">fact_check</span>
                            Review Answers
                        </button>
                        <button className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-sm tracking-tight hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-3">
                            <span className="material-symbols-outlined">home</span>
                            Return to Dashboard
                        </button>
                    </motion.div>
                </div>
            </main>


        </div>
    );
}
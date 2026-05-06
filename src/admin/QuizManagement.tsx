import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SmartExam Quiz Management Dashboard
 * * Re-engineered from HTML to a production-ready React component.
 * Stack: Next.js (App Router compatible), TypeScript, Tailwind CSS, Framer Motion.
 * * Design Thinking:
 * - Direction: Industrial/Utilitarian with Luxury accents. 
 * - Differentiation: High-contrast sidebar and staggered reveal animations for data tables.
 */

// --- Types ---
interface QuizData {
    id: string;
    title: string;
    subject: string;
    dateCreated: string;
    submissions: number;
    status: 'Active' | 'Draft' | 'Completed';
}

// --- Mock Data ---
const QUIZZES: QuizData[] = [
    { id: '1', title: 'Midterm Biology 101', subject: 'Science', dateCreated: 'Oct 12, 2023', submissions: 145, status: 'Active' },
    { id: '2', title: 'Advanced Calculus Final', subject: 'Mathematics', dateCreated: 'Oct 10, 2023', submissions: 89, status: 'Draft' },
    { id: '3', title: 'World History Era III', subject: 'History', dateCreated: 'Sep 28, 2023', submissions: 210, status: 'Active' },
    { id: '4', title: 'Introduction to Psychology', subject: 'Social Sciences', dateCreated: 'Sep 15, 2023', submissions: 305, status: 'Completed' },
];

const NAV_ITEMS = [
    { icon: 'dashboard', label: 'Dashboard', active: false },
    { icon: 'quiz', label: 'Exams', active: true },
    { icon: 'analytics', label: 'Analytics', active: false },
    { icon: 'grade', label: 'Results', active: false },
    { icon: 'settings', label: 'Settings', active: false },
];

// --- Sub-Components ---

const Sidebar = () => (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-slate-950 text-slate-400 border-r border-slate-800 flex flex-col pt-8 pb-8 z-50 hidden md:flex">
        <div className="px-6 mb-10">
            <h1 className="text-xl font-black text-white tracking-tighter">SMARTEXAM</h1>
            <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-500 font-bold">Academic Portal</span>
        </div>

        <div className="px-4 mb-8">
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/20 font-semibold text-sm">
                <span className="material-symbols-outlined text-sm">add</span>
                New Examination
            </button>
        </div>

        <div className="flex-1 space-y-1 px-2">
            {NAV_ITEMS.map((item) => (
                <a
                    key={item.label}
                    href="#"
                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 group ${item.active
                            ? 'bg-slate-900 text-indigo-400 border-r-4 border-indigo-500'
                            : 'hover:bg-slate-900 hover:text-slate-200'
                        }`}
                >
                    <span className={`material-symbols-outlined ${item.active ? 'fill-1' : ''}`}>{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                </a>
            ))}
        </div>

        <div className="mt-auto px-4 space-y-1 border-t border-slate-800 pt-6">
            <a href="#" className="flex items-center gap-3 px-4 py-3 hover:text-white transition-colors">
                <span className="material-symbols-outlined">contact_support</span>
                <span className="text-sm">Support</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 hover:text-red-400 transition-colors">
                <span className="material-symbols-outlined">logout</span>
                <span className="text-sm">Log Out</span>
            </a>
        </div>
    </nav>
);

const StatCard = ({ icon, value, label, trend, colorClass }: any) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col justify-between"
    >
        <div className="flex justify-between items-start mb-6">
            <div className={`p-3 rounded-xl ${colorClass}`}>
                <span className="material-symbols-outlined">{icon}</span>
            </div>
            <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">{trend}</span>
        </div>
        <div>
            <h4 className="text-3xl font-black text-slate-900">{value}</h4>
            <p className="text-sm text-slate-500 font-medium mt-1">{label}</p>
        </div>
    </motion.div>
);

// --- Main Page Component ---

export default function QuizManagement() {
    const [activeTab, setActiveTab] = useState('Active Quizzes');

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

            <Sidebar />

            <main className="md:ml-64 min-h-screen">
                {/* Header */}
                <header className="px-8 py-8 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-slate-900">Quiz Management</h2>
                        <p className="text-slate-500 text-sm mt-1">Manage examinations and question banks</p>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:flex-none">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                            <input
                                type="text"
                                placeholder="Search exams..."
                                className="pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm w-full md:w-72 transition-all"
                            />
                        </div>
                        <button className="bg-slate-100 text-slate-600 p-2.5 rounded-xl hover:bg-slate-200 transition-colors">
                            <span className="material-symbols-outlined">filter_list</span>
                        </button>
                    </div>
                </header>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="p-8 max-w-7xl mx-auto space-y-10"
                >
                    {/* Tabs */}
                    <div className="flex border-b border-slate-200 gap-8">
                        {['Active Quizzes', 'Question Bank', 'Archived'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 text-sm font-bold transition-all relative ${activeTab === tab ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-t-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Table Card */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h3 className="font-bold text-slate-800">Recent Examinations</h3>
                            <button className="text-indigo-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1 hover:text-indigo-700">
                                View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-white text-slate-400 text-[11px] uppercase tracking-widest font-black border-b border-slate-100">
                                        <th className="px-6 py-4">Title</th>
                                        <th className="px-6 py-4">Subject</th>
                                        <th className="px-6 py-4 text-right">Created</th>
                                        <th className="px-6 py-4 text-right">Submissions</th>
                                        <th className="px-6 py-4 text-center">Status</th>
                                        <th className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {QUIZZES.map((quiz) => (
                                        <motion.tr
                                            variants={itemVariants}
                                            key={quiz.id}
                                            className="hover:bg-slate-50/80 transition-colors group"
                                        >
                                            <td className="px-6 py-4 font-bold text-slate-900">{quiz.title}</td>
                                            <td className="px-6 py-4 text-slate-500 text-sm">{quiz.subject}</td>
                                            <td className="px-6 py-4 text-right text-slate-500 text-sm tabular-nums">{quiz.dateCreated}</td>
                                            <td className="px-6 py-4 text-right font-semibold text-slate-900 tabular-nums">{quiz.submissions}</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter ${quiz.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                                                        quiz.status === 'Draft' ? 'bg-slate-100 text-slate-600' :
                                                            'bg-indigo-100 text-indigo-700'
                                                    }`}>
                                                    {quiz.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                                    <span className="material-symbols-outlined text-[20px]">edit</span>
                                                </button>
                                                <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                                    <span className="material-symbols-outlined text-[20px]">bar_chart</span>
                                                </button>
                                                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                                    <span className="material-symbols-outlined text-[20px]">delete</span>
                                                </button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Stats Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard
                            icon="library_books"
                            value="1,204"
                            label="Total Questions in Bank"
                            trend="+12% this month"
                            colorClass="bg-indigo-100 text-indigo-600"
                        />
                        <StatCard
                            icon="assignment_turned_in"
                            value="45"
                            label="Active Quizzes"
                            trend="Active Term"
                            colorClass="bg-emerald-100 text-emerald-600"
                        />

                        {/* Quick Action Card - AI Feature */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-indigo-600 text-white p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-xl shadow-indigo-200"
                        >
                            <div className="absolute -right-6 -top-6 opacity-20 pointer-events-none">
                                <span className="material-symbols-outlined text-[140px] font-thin">auto_awesome</span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-black mb-3">Generate Quiz</h3>
                                <p className="text-indigo-100 text-sm leading-relaxed mb-8 max-w-[200px]">
                                    Use AI to automatically generate a balanced quiz from your question bank.
                                </p>
                                <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold text-sm w-full hover:bg-slate-50 transition-colors flex justify-center items-center gap-2 shadow-sm">
                                    <span className="material-symbols-outlined text-[18px]">magic_button</span>
                                    Generate Now
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
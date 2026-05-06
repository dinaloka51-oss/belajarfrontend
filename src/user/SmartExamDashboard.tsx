import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SmartExam Admin Dashboard
 * * DESIGN DIRECTION: "Industrial Utilitarian"
 * Focus on clear data visualization, high-contrast borders, and intentional spacing.
 * Re-written from HTML/Tailwind to TypeScript, Next.js, and Framer Motion.
 */

// --- Types ---

interface Quiz {
    id: string;
    title: string;
    course: string;
    completed: string;
    status: 'In Progress' | 'Closing Soon' | 'Needs Review';
}

interface KPICardProps {
    label: string;
    value: string;
    subtext: string;
    icon: string;
    trend?: string;
}

// --- Components ---

const SidebarItem = ({ icon, label, active = false }: { icon: string, label: string, active?: boolean }) => (
    <motion.a
        whileHover={{ x: 4 }}
        href="#"
        className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ease-in-out font-medium
      ${active
                ? 'text-indigo-900 dark:text-indigo-300 bg-white dark:bg-slate-900 border-r-2 border-indigo-900 dark:border-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-900 dark:hover:text-indigo-200'
            }`}
    >
        <span className="material-symbols-outlined">{icon}</span>
        {label}
    </motion.a>
);

const KPICard = ({ label, value, subtext, icon, trend }: KPICardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm flex flex-col justify-between"
    >
        <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</span>
            <span className="material-symbols-outlined text-indigo-900">{icon}</span>
        </div>
        <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-slate-900">{value}</span>
            {trend && (
                <span className="text-xs font-bold text-green-700 flex items-center">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_upward</span> {trend}
                </span>
            )}
        </div>
        <p className="text-sm text-slate-500 mt-2">{subtext}</p>
    </motion.div>
);

const DistributionBar = ({ height, label, active = false }: { height: string, label: string, active?: boolean }) => (
    <div className="flex flex-col items-center gap-2 flex-1 group">
        <motion.div
            initial={{ height: 0 }}
            animate={{ height }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`w-full transition-colors rounded-t-sm ${active ? 'bg-indigo-900' : 'bg-slate-200 group-hover:bg-indigo-200'}`}
        />
        <span className="text-xs font-medium text-slate-500 group-hover:text-indigo-900">{label}</span>
    </div>
);

// --- Main Page ---

export default function SmartExamDashboard() {
    const [quizzes] = useState<Quiz[]>([
        { id: '1', title: 'Midterm Examination', course: 'Calculus II', completed: '145/150', status: 'In Progress' },
        { id: '2', title: 'Chapter 4 Quiz', course: 'World History', completed: '89/90', status: 'Closing Soon' },
        { id: '3', title: 'Weekly Pop Quiz', course: 'Biology 101', completed: '0/40', status: 'Needs Review' },
    ]);

    return (
        <div className="min-h-screen bg-[#f7f9fb] flex font-sans antialiased text-slate-900">


            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-50 border-r border-slate-200 flex flex-col pt-4 pb-8 z-40">
                <div className="px-6 mb-8 flex flex-col gap-1">
                    <span className="text-xl font-black text-indigo-900 tracking-tight">SmartExam</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Academic Portal</span>
                </div>

                <div className="px-4 mb-6">
                    <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-indigo-900 text-white py-2.5 px-4 rounded font-semibold text-sm shadow-sm hover:bg-indigo-800 transition-colors flex justify-center items-center gap-2"
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                        New Examination
                    </motion.button>
                </div>

                <nav className="flex-1 flex flex-col text-sm">
                    <SidebarItem icon="dashboard" label="Dashboard" active />
                    <SidebarItem icon="quiz" label="Exams" />
                    <SidebarItem icon="analytics" label="Analytics" />
                    <SidebarItem icon="grade" label="Results" />
                    <SidebarItem icon="settings" label="Settings" />
                </nav>

                <div className="mt-auto flex flex-col text-sm">
                    <SidebarItem icon="contact_support" label="Support" />
                    <SidebarItem icon="logout" label="Log Out" />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8 max-w-[1440px]">
                {/* Header */}
                <header className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Overview</h1>
                        <p className="text-sm text-slate-500">Monitor student engagement and active assessments.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 border border-slate-300 text-slate-700 font-semibold text-sm rounded bg-white hover:bg-slate-50 transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                            Export Reports
                        </button>
                        <button className="px-4 py-2 bg-indigo-900 text-white font-semibold text-sm rounded shadow-sm hover:bg-indigo-800 transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                            New Quiz
                        </button>
                    </div>
                </header>

                {/* KPI Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <KPICard
                        label="Participation Rate"
                        value="94.2%"
                        subtext="Across all active courses"
                        icon="groups"
                        trend="2.1%"
                    />
                    <KPICard
                        label="Average Score"
                        value="78.5"
                        subtext="Based on completed grading"
                        icon="analytics"
                    />
                    <KPICard
                        label="Pending Grading"
                        value="42"
                        subtext="Submissions require manual review"
                        icon="pending_actions"
                    />
                </section>

                {/* Charts & Lists */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Chart Section */}
                    <section className="lg:col-span-2 bg-white rounded-lg border border-slate-200 p-6 shadow-sm flex flex-col">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-xl font-bold text-slate-900">Grade Distribution</h2>
                            <select className="text-sm font-medium border border-slate-200 rounded px-3 py-1.5 bg-transparent text-slate-600 focus:ring-2 focus:ring-indigo-900 outline-none">
                                <option>All Courses</option>
                                <option>Advanced Calculus</option>
                                <option>World History 101</option>
                            </select>
                        </div>

                        <div className="flex-1 flex items-end justify-between gap-4 h-64 border-b border-slate-100 pb-2 relative">
                            {/* Y Axis */}
                            <div className="absolute -left-8 top-0 h-full flex flex-col justify-between text-[10px] font-bold text-slate-400 uppercase">
                                <span>40</span>
                                <span>30</span>
                                <span>20</span>
                                <span>10</span>
                                <span>0</span>
                            </div>

                            <DistributionBar height="10%" label="<60" />
                            <DistributionBar height="25%" label="60-69" />
                            <DistributionBar height="60%" label="70-79" />
                            <DistributionBar height="85%" label="80-89" active />
                            <DistributionBar height="40%" label="90-100" />
                        </div>
                    </section>

                    {/* Active Quizzes */}
                    <section className="bg-white rounded-lg border border-slate-200 flex flex-col shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h2 className="font-bold text-slate-900">Active Quizzes</h2>
                            <button className="text-indigo-900 hover:underline text-xs font-bold uppercase tracking-wider">View All</button>
                        </div>
                        <div className="overflow-y-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
                                    <tr>
                                        <th className="py-3 px-4">Quiz Title</th>
                                        <th className="py-3 px-4 text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <AnimatePresence>
                                        {quizzes.map((quiz) => (
                                            <motion.tr
                                                key={quiz.id}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="border-b border-slate-50 hover:bg-slate-50 transition-colors group"
                                            >
                                                <td className="py-4 px-4">
                                                    <div className="font-bold text-slate-900">{quiz.title}</div>
                                                    <div className="text-slate-500 text-xs mt-0.5">{quiz.course} • {quiz.completed} completed</div>
                                                </td>
                                                <td className="py-4 px-4 text-right">
                                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight
                            ${quiz.status === 'In Progress' ? 'bg-indigo-50 text-indigo-700' :
                                                            quiz.status === 'Closing Soon' ? 'bg-slate-100 text-slate-600' :
                                                                'bg-red-50 text-red-700'}`}
                                                    >
                                                        <span className={`w-1.5 h-1.5 rounded-full 
                              ${quiz.status === 'In Progress' ? 'bg-indigo-600' :
                                                                quiz.status === 'Closing Soon' ? 'bg-slate-400' :
                                                                    'bg-red-600'}`}
                                                        />
                                                        {quiz.status}
                                                    </span>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </AnimatePresence>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>


        </div>
    );
}
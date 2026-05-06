import { useState } from 'react';
import { motion, } from 'framer-motion';

/**
 * SmartExam Admin Dashboard
 * Converted to TypeScript, Tailwind CSS, and Framer Motion.
 * Adheres to Next.js App Router patterns and production-ready standards.
 */

// --- Components ---

const SideNavBar = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const navItems = [
        { name: 'Dashboard', icon: 'dashboard' },
        { name: 'Exams', icon: 'quiz' },
        { name: 'Analytics', icon: 'analytics' },
        { name: 'Results', icon: 'grade' },
        { name: 'Settings', icon: 'settings' },
    ];

    const bottomItems = [
        { name: 'Support', icon: 'contact_support' },
        { name: 'Log Out', icon: 'logout' },
    ];

    return (
        <aside className="bg-slate-50 dark:bg-slate-950 fixed left-0 top-0 h-screen w-64 flex flex-col pt-4 pb-8 border-r border-slate-200 dark:border-slate-800 z-40">
            <div className="px-6 mb-8 flex flex-col gap-1">
                <span className="text-lg font-black text-indigo-900 dark:text-indigo-100 font-inter antialiased tracking-tight">
                    SmartExam
                </span>
                <span className="font-inter text-sm font-medium text-slate-500">Academic Portal [cite: 1]</span>
            </div>

            <div className="px-4 mb-6">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#1a146b] text-white py-2 px-4 rounded-md font-semibold text-sm shadow-sm hover:opacity-90 transition-opacity flex justify-center items-center gap-2"
                >
                    <span className="material-symbols-outlined !text-[18px]">add</span>
                    New Examination [cite: 1]
                </motion.button>
            </div>

            <nav className="flex-1 flex flex-col font-inter text-sm font-medium">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => setActiveTab(item.name)}
                        className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ease-in-out border-r-2 ${activeTab === item.name
                            ? 'text-indigo-900 dark:text-indigo-300 bg-white dark:bg-slate-900 border-indigo-900 dark:border-indigo-400'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-900 dark:hover:text-indigo-200 border-transparent'
                            }`}
                    >
                        <span className="material-symbols-outlined">{item.icon}</span>
                        {item.name} [cite: 1]
                    </button>
                ))}
            </nav>

            <div className="mt-auto flex flex-col font-inter text-sm font-medium">
                {bottomItems.map((item) => (
                    <a
                        key={item.name}
                        className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-900 dark:hover:text-indigo-200 transition-all duration-200 ease-in-out"
                        href="#"
                    >
                        <span className="material-symbols-outlined">{item.icon}</span>
                        {item.name} [cite: 1]
                    </a>
                ))}
            </div>
        </aside>
    );
};

const KPICard = ({ title, value, trend, subtext, icon }: {
    title: string,
    value: string,
    trend?: string,
    subtext: string,
    icon: string
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm flex flex-col justify-between"
    >
        <div className="flex justify-between items-start mb-2">
            <span className="text-[12px] font-medium text-slate-500 uppercase tracking-wider">{title} [cite: 1]</span>
            <span className="material-symbols-outlined text-[#1a146b]">{icon}</span>
        </div>
        <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-900">{value} [cite: 1]</span>
            {trend && (
                <span className="text-[12px] font-semibold text-green-700 flex items-center">
                    <span className="material-symbols-outlined !text-[14px]">arrow_upward</span> {trend} [cite: 1]
                </span>
            )}
        </div>
        <p className="text-sm text-slate-500 mt-2">{subtext} [cite: 1]</p>
    </motion.div>
);

const DistributionChart = () => {
    const bars = [
        { label: '<60', height: '10%', color: 'bg-slate-200' },
        { label: '60-69', height: '25%', color: 'bg-blue-100' },
        { label: '70-79', height: '60%', color: 'bg-blue-100' },
        { label: '80-89', height: '85%', color: 'bg-[#1a146b]' },
        { label: '90-100', height: '40%', color: 'bg-indigo-200' },
    ];

    return (
        <section className="lg:col-span-2 bg-white rounded-lg border border-slate-200 p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-slate-900">Grade Distribution [cite: 1]</h2>
                <select className="text-sm border-slate-300 rounded-md bg-transparent text-slate-600 py-1 pl-2 pr-8 focus:ring-[#1a146b] focus:border-[#1a146b]">
                    <option>All Courses [cite: 1]</option>
                    <option>Advanced Calculus</option>
                    <option>World History 101</option>
                </select>
            </div>
            <div className="flex-1 flex items-end justify-between gap-2 h-64 mt-auto pt-8 border-b border-slate-100 pb-2 relative">
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-slate-400 text-[12px] pr-2 -ml-8">
                    {[40, 30, 20, 10, 0].map(val => <span key={val}>{val} [cite: 1]</span>)}
                </div>
                {bars.map((bar, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: bar.height }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`w-full ${bar.color} hover:bg-indigo-900 transition-colors rounded-t-sm`}
                        />
                        <span className="text-[12px] text-slate-500 group-hover:text-[#1a146b]">{bar.label} [cite: 1]</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

const ActiveQuizzes = () => {
    const quizzes = [
        { title: 'Midterm Examination', course: 'Calculus II', progress: '145/150 completed', status: 'In Progress', statusColor: 'bg-blue-100 text-blue-800', dot: 'bg-[#1a146b]' },
        { title: 'Chapter 4 Quiz', course: 'World History', progress: '89/90 completed', status: 'Closing Soon', statusColor: 'bg-slate-100 text-slate-600', dot: 'bg-slate-400' },
        { title: 'Weekly Pop Quiz', course: 'Biology 101', progress: '0/40 completed', status: 'Needs Review', statusColor: 'bg-red-100 text-red-800', dot: 'bg-red-600' },
    ];

    return (
        <section className="bg-white rounded-lg border border-slate-200 flex flex-col shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                <h2 className="text-xl font-semibold text-slate-900">Active Quizzes [cite: 1]</h2>
                <button className="text-[#1a146b] hover:underline text-[12px] font-semibold">View All [cite: 1]</button>
            </div>
            <div className="flex-1 overflow-y-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 text-[12px] text-slate-500 uppercase tracking-wider sticky top-0">
                        <tr>
                            <th className="py-3 px-4 font-medium border-b border-slate-100">Quiz Title [cite: 1]</th>
                            <th className="py-3 px-4 font-medium text-right border-b border-slate-100">Status [cite: 1]</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-slate-900">
                        {quizzes.map((quiz, i) => (
                            <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-medium">{quiz.title} [cite: 1]</div>
                                    <div className="text-slate-500 text-[12px] mt-1">{quiz.course} • {quiz.progress} [cite: 1]</div>
                                </td>
                                <td className="py-3 px-4 text-right">
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${quiz.statusColor} text-[10px] font-bold`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${quiz.dot}`} />
                                        {quiz.status} [cite: 1]
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

// --- Main Page ---

const AdminDashboard = () => {
    return (
        <div className="flex min-h-screen bg-[#f7f9fb] text-slate-900 font-sans antialiased">
            <SideNavBar />

            <main className="flex-1 ml-64 p-8 max-w-[1440px]">
                {/* Header Actions */}
                <header className="flex justify-between items-end mb-6">
                    <div>
                        <h1 className="text-4xl font-bold mb-1">Overview [cite: 1]</h1>
                        <p className="text-sm text-slate-500">Monitor student engagement and active assessments. [cite: 1]</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 border border-slate-300 text-slate-600 font-semibold text-sm rounded-md flex items-center gap-2 hover:bg-white transition-colors bg-white/50">
                            <span className="material-symbols-outlined !text-[18px]">download</span>
                            Export Reports [cite: 1]
                        </button>
                        <button className="px-4 py-2 bg-[#1a146b] text-white font-semibold text-sm rounded-md flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity">
                            <span className="material-symbols-outlined !text-[18px]">add</span>
                            New Quiz [cite: 1]
                        </button>
                    </div>
                </header>

                {/* KPI Bento Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <KPICard
                        title="Participation Rate"
                        value="94.2%"
                        trend="2.1%"
                        subtext="Across all active courses"
                        icon="groups"
                    />
                    <KPICard
                        title="Average Score"
                        value="78.5"
                        subtext="Based on completed grading"
                        icon="analytics"
                    />
                    <KPICard
                        title="Pending Grading"
                        value="42"
                        subtext="Submissions require manual review"
                        icon="pending_actions"
                    />
                </section>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <DistributionChart />
                    <ActiveQuizzes />
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
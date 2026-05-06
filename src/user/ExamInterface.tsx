import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SMARTEXAM - EXAM INTERFACE
 * Tone: Industrial / Utilitarian Precision
 * Direction: A focused, high-contrast interface built for academic rigor. 
 * Features a heavy sidebar, structured question cards, and distinct status indicators.
 */

// --- Types ---

type QuestionStatus = 'answered' | 'unanswered' | 'marked' | 'current';

interface QuestionNavProps {
    id: number;
    status: QuestionStatus;
}

// --- Sub-components ---

const StatusBadge = ({ label, colorClass, icon }: { label: string; colorClass: string; icon?: string }) => (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md border font-mono text-[10px] font-black uppercase tracking-widest ${colorClass}`}>
        {icon && <span className="material-symbols-outlined text-sm">{icon}</span>}
        {label}
    </div>
);

const NavButton = ({ id, status }: QuestionNavProps) => {
    const statusStyles = {
        answered: "bg-indigo-900 text-white border-indigo-900 dark:bg-indigo-600",
        unanswered: "bg-white text-slate-400 border-slate-200 hover:border-indigo-300 dark:bg-slate-900 dark:border-slate-800",
        marked: "bg-amber-100 text-amber-900 border-amber-300 relative",
        current: "bg-indigo-50 text-indigo-900 border-indigo-900 ring-2 ring-indigo-900/10"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`aspect-square w-full rounded-lg border text-sm font-black transition-all flex items-center justify-center ${statusStyles[status]}`}
        >
            {id}
            {status === 'marked' && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-amber-600 rounded-bl-sm" />
            )}
        </motion.button>
    );
};

// --- Main Page ---

export default function ExamInterface() {
    const [timeLeft] = useState("01:45:22");
    const [selectedOption, setSelectedOption] = useState<string>('B');

    const navigationItems: QuestionNavProps[] = [
        { id: 1, status: 'answered' }, { id: 2, status: 'answered' },
        { id: 3, status: 'answered' }, { id: 4, status: 'answered' },
        { id: 5, status: 'marked' }, { id: 6, status: 'answered' },
        { id: 7, status: 'answered' }, { id: 8, status: 'answered' },
        ...Array.from({ length: 5 }, (_, i) => ({ id: i + 9, status: 'unanswered' as QuestionStatus })),
        { id: 14, status: 'current' },
        ...Array.from({ length: 26 }, (_, i) => ({ id: i + 15, status: 'unanswered' as QuestionStatus })),
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans dark:bg-slate-950 dark:text-slate-100 flex flex-col">


            {/* Industrial Header */}
            <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b-4 border-slate-900 bg-white px-8 dark:bg-slate-900 dark:border-indigo-500">
                <div className="flex items-center gap-6">
                    <div>
                        <h1 className="text-lg font-black tracking-tighter text-indigo-950 dark:text-white uppercase">
                            Advanced System Architecture
                        </h1>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="bg-slate-900 text-white text-[10px] px-2 py-0.5 font-bold rounded">CS401</span>
                            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Final Examination</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-2 text-slate-400 font-mono text-xs">
                        <span className="material-symbols-outlined text-sm">cloud_done</span>
                        Auto-saved 1 min ago
                    </div>

                    <div className="flex items-center gap-4 bg-rose-50 border-2 border-rose-600 px-6 py-2 rounded-xl dark:bg-rose-950/30">
                        <span className="material-symbols-outlined text-rose-600">timer</span>
                        <span className="font-mono text-2xl font-black text-rose-600 tabular-nums">{timeLeft}</span>
                    </div>

                    <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors dark:bg-slate-800">
                        <span className="material-symbols-outlined">more_vert</span>
                    </button>
                </div>
            </header>

            <main className="flex-1 flex overflow-hidden">
                {/* Question Area */}
                <div className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-16 flex justify-center bg-slate-50 dark:bg-slate-950">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-3xl"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-end mb-8 border-b-2 border-slate-200 pb-4 dark:border-slate-800">
                            <h2 className="text-3xl font-black tracking-tight text-indigo-900 dark:text-indigo-400">
                                Question 14 <span className="text-slate-300 font-normal">/ 40</span>
                            </h2>
                            <span className="text-xs font-black uppercase tracking-widest text-slate-400">Weight: 1.0 Point</span>
                        </div>

                        {/* Question Card */}
                        <div className="bg-white border-2 border-slate-200 rounded-[2rem] p-10 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <p className="text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                                    Consider a distributed system utilizing a <span className="text-indigo-600 font-bold">two-phase commit (2PC)</span> protocol to ensure transaction atomicity across multiple heterogeneous databases.
                                </p>
                                <p className="mt-4 text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                                    If the coordinator node crashes <em className="text-indigo-900 dark:text-indigo-200 not-italic font-bold bg-indigo-50 dark:bg-indigo-950 px-1">after</em> receiving all "PREPARE" acknowledgments but <em className="text-indigo-900 dark:text-indigo-200 not-italic font-bold bg-indigo-50 dark:bg-indigo-950 px-1">before</em> sending out the final messages, what is the primary drawback?
                                </p>
                            </div>

                            {/* Code Snippet */}
                            <div className="mt-8 bg-slate-900 rounded-2xl p-6 font-mono text-sm overflow-hidden relative">
                                <div className="flex gap-1.5 mb-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                </div>
                                <code className="text-indigo-300">
                                    Coordinator.State = <span className="text-rose-400">CRASHED</span>;<br />
                                    Participant[1..n].State = <span className="text-emerald-400">PREPARED</span>;
                                </code>
                            </div>

                            {/* Options Grid */}
                            <div className="mt-10 space-y-3">
                                {[
                                    { key: 'A', text: "The nodes automatically abort; the drawback is unnecessary rollback." },
                                    { key: 'B', text: "The nodes are 'blocked' (holding locks); the drawback is reduced system availability." },
                                    { id: 'C', text: "The nodes initiate leader election; the drawback is network overhead." },
                                    { id: 'D', text: "The nodes independently commit; the drawback is data inconsistency." }
                                ].map((opt, idx) => {
                                    const letter = String.fromCharCode(65 + idx);
                                    const isSelected = selectedOption === letter;
                                    return (
                                        <button
                                            key={letter}
                                            onClick={() => setSelectedOption(letter)}
                                            className={`w-full group flex items-start gap-5 p-6 rounded-2xl border-2 transition-all text-left ${isSelected
                                                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                                                    : 'border-slate-100 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700'
                                                }`}
                                        >
                                            <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-black transition-colors ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                                                }`}>
                                                {letter}
                                            </span>
                                            <span className={`text-lg font-bold leading-tight ${isSelected ? 'text-indigo-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                                                {opt.text}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Navigation Footer */}
                        <div className="mt-10 flex items-center justify-between">
                            <button className="flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-200 font-black text-slate-600 hover:bg-white transition-all dark:border-slate-800">
                                <span className="material-symbols-outlined">arrow_back</span>
                                PREVIOUS
                            </button>

                            <button className="flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-amber-400 bg-amber-50 text-amber-900 font-black hover:bg-amber-100 transition-all dark:bg-amber-900/20 dark:text-amber-400">
                                <span className="material-symbols-outlined">flag</span>
                                MARK FOR REVIEW
                            </button>

                            <button className="flex items-center gap-2 px-10 py-4 rounded-2xl bg-indigo-900 text-white font-black hover:bg-indigo-800 shadow-xl shadow-indigo-900/20 transition-all dark:bg-indigo-600">
                                NEXT
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Heavy Sidebar - Navigation Grid */}
                <aside className="hidden xl:flex w-[400px] flex-col border-l-4 border-slate-900 bg-white dark:bg-slate-900 dark:border-indigo-500 h-full overflow-hidden">
                    <div className="p-8 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Question_Navigator</h3>

                        <div className="grid grid-cols-2 gap-3">
                            <StatusBadge label="Answered" colorClass="bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-900/20" icon="check_circle" />
                            <StatusBadge label="Marked" colorClass="bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/20" icon="flag" />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8">
                        <div className="grid grid-cols-5 gap-3">
                            {navigationItems.map((item) => (
                                <NavButton key={item.id} {...item} />
                            ))}
                        </div>
                    </div>

                    <div className="p-8 border-t-4 border-slate-900 bg-white dark:bg-slate-950 dark:border-indigo-500">
                        <button className="group w-full py-5 rounded-2xl bg-rose-600 text-white font-black tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-rose-700 transition-all shadow-lg shadow-rose-600/20">
                            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">task_alt</span>
                            Submit Examination
                        </button>
                    </div>
                </aside>
            </main>
        </div>
    );
}
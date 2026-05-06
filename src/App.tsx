
import { motion } from 'framer-motion';
import {
  CheckCircle,
  GraduationCap,
  BookOpen,
  Quote,
  BarChart3,
  ShieldCheck,
  Focus,
  PenTool
} from 'lucide-react';

/**
 * SmartExam Landing Page
 * Converted to TypeScript, Tailwind CSS, and Framer Motion.
 * Theme: Sophisticated Academic / Editorial Luxury.
 */

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-black tracking-tighter text-[#1a146b]">
        SmartExam
      </div>

      <div className="hidden md:flex items-center space-x-10 text-sm font-semibold text-slate-600">
        <a href="#" className="hover:text-[#1a146b] transition-colors">Features</a>
        <a href="#" className="hover:text-[#1a146b] transition-colors">Pricing</a>
        <a href="#" className="hover:text-[#1a146b] transition-colors">About</a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-sm font-bold text-[#1a146b] px-5 py-2.5">Login</button>
        <button className="text-sm font-bold bg-[#1a146b] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95">
          Get Started
        </button>
      </div>
    </div>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, description, className = "" }: { icon: any, title: string, description: string, className?: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:shadow-indigo-50 transition-all ${className}`}
  >
    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-[#1a146b] mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const SectionHeading = ({ badge, title, description, centered = true }: { badge: string, title: string, description: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#1a146b] mb-4 block">
      {badge}
    </span>
    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
      {title}
    </h2>
    <p className={`text-lg text-slate-500 max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
      {description}
    </p>
  </div>
);

// --- Main Page ---

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfe] font-sans selection:bg-indigo-100 selection:text-[#1a146b]">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-44 pb-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-[#1a146b] tracking-tight leading-[1.1] mb-8">
                Elevate Your Assessment <br /> Excellence
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                The most reliable platform for online exams, automated grading, and student integrity. Designed for focus, clarity, and precision.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                <button className="w-full sm:w-auto bg-[#1a146b] text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
                  Get Started for Free
                </button>
                <button className="w-full sm:w-auto bg-white border border-slate-200 text-[#1a146b] px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-colors">
                  Request Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative mx-auto max-w-4xl rounded-[2rem] border-8 border-white shadow-2xl overflow-hidden"
            >
              <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                  alt="SmartExam Dashboard"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 border-y border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 mb-12">
              Trusted by Leading Institutions
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale contrast-125">
              <span className="text-xl font-bold tracking-tighter">UNIVERSITY OF TECH</span>
              <span className="text-xl font-bold tracking-tighter">GLOBAL ACADEMY</span>
              <span className="text-xl font-bold tracking-tighter">EDUINSTITUTE</span>
              <span className="text-xl font-bold tracking-tighter">SCIENCE PREP</span>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              badge="Core Capabilities"
              title="Designed for Clarity & Integrity"
              description="Everything you need to deliver high-stakes examinations with confidence."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon={PenTool}
                title="Automated Grading"
                description="Instantly evaluate objective assessments, freeing up educators to focus on qualitative feedback. Perfect accuracy at scale."
                className="md:col-span-2"
              />
              <FeatureCard
                icon={Focus}
                title="Distraction-Free"
                description="A minimalist interface designed to reduce cognitive load and keep focus on the task."
              />
              <FeatureCard
                icon={ShieldCheck}
                title="Anti-Cheating Detection"
                description="Advanced monitoring tools ensure academic integrity without compromising student privacy."
              />
              <FeatureCard
                icon={BarChart3}
                title="Detailed Analytics"
                description="Gain deep insights into class performance and track learning outcomes with comprehensive data reports."
                className="md:col-span-2 !bg-[#1a146b] !text-white"
              />
            </div>
          </div>
        </section>

        {/* Audience Split */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
            {/* For Educators */}
            <div>
              <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-[#1a146b] mb-8">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">For Educators</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <CheckCircle className="text-indigo-600 shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Efficient Workflows</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Streamline creation, distribution, and grading of assessments in one place.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <CheckCircle className="text-indigo-600 shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold mb-2">High-Density Data</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Access robust gradebooks and performance metrics instantly with export options.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Students */}
            <div>
              <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-[#1a146b] mb-8">
                <BookOpen size={32} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">For Students</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <CheckCircle className="text-indigo-600 shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Focus & Clarity</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">An uncluttered interface that prioritizes the examination material above all else.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <CheckCircle className="text-indigo-600 shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Instant Feedback</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Receive immediate results and detailed explanations post-exam to aid learning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto text-indigo-100 mb-10" size={80} fill="currentColor" />
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-12 italic">
              "SmartExam has completely transformed how we handle midterms. The platform's commitment to a minimal interface ensures our students aren't distracted, and the automated grading saves our faculty hundreds of hours."
            </blockquote>
            <div>
              <div className="text-xl font-bold text-[#1a146b]">Dr. Eleanor Vance</div>
              <div className="text-slate-400 text-sm font-semibold tracking-wider uppercase mt-1">Dean of Assessment, Global Academy</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto bg-[#1a146b] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to transform your <br /> examinations?
            </h2>
            <p className="text-indigo-200 text-lg mb-12 max-w-xl mx-auto opacity-80">
              Join thousands of institutions using SmartExam to deliver reliable, focused, and secure online assessments.
            </p>
            <button className="bg-white text-[#1a146b] px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl">
              Create Free Account
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <div className="text-2xl font-black text-[#1a146b]">SmartExam</div>
            <div className="flex flex-wrap justify-center gap-10 text-xs font-bold uppercase tracking-widest text-slate-400">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Accessibility</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
            </div>
          </div>
          <div className="text-center text-slate-400 text-sm">
            © 2024 SmartExam. Focused Assessment Excellence.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
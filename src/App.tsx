import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from './types';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { 
  GraduationCap, MapPin, Mail, Sparkles, BookOpen, Code2, 
  Laptop, Calendar
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Theme state: defaults to dark mode (true)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('arpit_theme');
    return saved ? saved === 'dark' : true;
  });
  
  // Local storage state for customized simulated projects
  const [customProjects, setCustomProjects] = useState<Project[]>([]);

  // Sync theme with localstorage and document element class list
  useEffect(() => {
    localStorage.setItem('arpit_theme', isDarkMode ? 'dark' : 'bright');
    if (isDarkMode) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('bright-theme');
    } else {
      document.documentElement.classList.add('bright-theme');
      document.documentElement.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  // Load from localstorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('arpit_simulated_projects');
    if (savedProjects) {
      try {
        setCustomProjects(JSON.parse(savedProjects));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleAddProject = (newProj: Project) => {
    const updated = [...customProjects, newProj];
    setCustomProjects(updated);
    localStorage.setItem('arpit_simulated_projects', JSON.stringify(updated));
  };

  const handleDeleteProject = (id: string) => {
    const updated = customProjects.filter((p: Project) => p.id !== id);
    setCustomProjects(updated);
    localStorage.setItem('arpit_simulated_projects', JSON.stringify(updated));
  };

  const TABS = [
    { id: 'hero', label: 'Brief Summary', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'timeline', label: 'Academic Journey', icon: <Calendar className="w-4 h-4" /> },
    { id: 'skills', label: 'Specialized Skills', icon: <Code2 className="w-4 h-4" /> },
    { id: 'projects', label: 'Portfolio Projects', icon: <Laptop className="w-4 h-4" /> }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark-theme bg-[#0F0F0F] text-[#E0E0E0]' : 'bright-theme bg-[#F4F4F6] text-[#1C1C1E]'} font-sans border-t-4 border-[#D4AF37] flex flex-col justify-between transition-colors duration-300`}>
      
      {/* Top Header Block (Extracted exactly from Sophisticated Dark design specs) */}
      <header className="max-w-7xl w-full mx-auto px-4 sm:px-12 pt-8 sm:pt-12 pb-6 border-b border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-shrink-0">
            <img
              src="/arpit-photo.jpg"
              alt="Arpit Tiwari"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-3  border-cyan-500/20 object-cover shadow-2xl"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-serif text-[#D4AF37] leading-tight font-bold tracking-tight">
              Arpit Tiwari
            </h1>
            <p className="text-sm sm:text-base tracking-[0.2em] uppercase text-[#A0A0A0] font-light">
              Java Full Stack Developer
            </p>
          </div>
        </div>

        <div className="text-left sm:text-right space-y-1 py-12">
          <p className="text-[#A0A0A0] text-xs sm:text-sm tracking-wider uppercase font-medium">
            Jaunpur, Prayagraj & Uttar Pradesh
          </p>
          <p className="text-[#D4AF37] font-serif italic text-sm sm:text-base">
            arpit6235@gmail.com
          </p>
        </div>
      </header>

      {/* Main Workspace Layout Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch">
        
        {/* Left column / Sidebar Summary Rail (4 columns on large screens) */}
        <section className="lg:col-span-4 space-y-8 h-fit lg:sticky lg:top-8">
          
          {/* Academic Foundation accent block */}
          <div className="bg-[#161616] p-6 border-l-2 border-[#D4AF37] rounded-r-xl border border-y-[#2A2A2A] border-r-[#2A2A2A]">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
              Academic Foundation
            </h2>
            <div className="space-y-4">
              <div className="relative pl-4 border-l border-[#2A2A2A] hover:border-[#D4AF37]/50 transition-colors">
                <p className="text-xs text-[#888] font-mono">B.Tech &bull; Computer Science & Engineering</p>
                <p className="text-sm font-semibold text-slate-200">SIET, Prayagraj</p>
                <span className="text-[10px] text-[#A0A0A0]">2023 &mdash; 2026</span>
              </div>
              <div className="relative pl-4 border-l border-[#2A2A2A] hover:border-[#D4AF37]/50 transition-colors">
                <p className="text-xs text-[#888] font-mono">Diploma &bull; Electrical Eng.</p>
                <p className="text-sm font-semibold text-slate-200">M.G. Polytechnic, Prayagraj</p>
                <span className="text-[10px] text-[#A0A0A0]">2021 &mdash; 2023</span>
              </div>
              <div className="relative pl-4 border-l border-[#2A2A2A] hover:border-[#D4AF37]/50 transition-colors">
                <p className="text-xs text-[#888] font-mono">Intermediate &bull; PCM</p>
                <p className="text-sm font-semibold text-slate-200">N.B.I.C., Jaunpur</p>
                <span className="text-[10px] text-[#A0A0A0]">2021</span>
              </div>
            </div>
          </div>

          {/* Technical Toolkit pills block */}
          <div className="bg-[#161616] p-6 border border-[#2A2A2A] rounded-xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#D4AF37]" />
              Technical Toolkit
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#0F0F0F] border border-[#2A2A2A] text-[10px] uppercase tracking-wider font-semibold font-mono rounded text-[#D4AF37] hover:border-[#D4AF37]/40 transition">
                Java Core
              </span>
              <span className="px-3 py-1 bg-[#0F0F0F] border border-[#2A2A2A] text-[10px] uppercase tracking-wider font-semibold font-mono rounded text-slate-300 hover:border-[#D4AF37]/40 transition">
                HTML5 / CSS3
              </span>
              <span className="px-3 py-1 bg-[#0F0F0F] border border-[#2A2A2A] text-[10px] uppercase tracking-wider font-semibold font-mono rounded text-slate-300 hover:border-[#D4AF37]/40 transition">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-[#0F0F0F] border border-[#2A2A2A] text-[10px] uppercase tracking-wider font-semibold font-mono rounded text-slate-300 hover:border-[#D4AF37]/40 transition">
                React & Tailwind
              </span>
              <span className="px-3 py-1 bg-[#0F0F0F] border border-[#2A2A2A] text-[10px] uppercase tracking-wider font-semibold font-mono rounded text-slate-300 hover:border-[#D4AF37]/40 transition">
                MySQL DB
              </span>
              <span className="px-3 py-1 bg-[#0F0F0F] border border-[#2A2A2A] text-[10px] uppercase tracking-wider font-semibold font-mono rounded text-slate-300 hover:border-[#D4AF37]/40 transition">
                MongoDB NoSQL
              </span>
              <span className="px-3 py-1 bg-[#0F0F0F] border border-[#2A2A2A] text-[10px] uppercase tracking-wider font-semibold font-mono rounded text-[#D4AF37] hover:border-[#D4AF37]/40 transition">
                Full Stack
              </span>
            </div>
          </div>

          {/* Interpersonal Bento Block 1: Leadership */}
          <div className="bg-[#161616] p-6 border border-[#2A2A2A] rounded-xl hover:bg-[#1A1A1A] transition-colors group">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center text-[10px] text-[#D4AF37] font-bold">
                01
              </div>
              <h3 className="font-serif text-base font-semibold text-slate-200">Teamwork & Leadership</h3>
            </div>
            <p className="text-xs text-[#888] leading-relaxed">
              Arpit thrives in collaborative peer teams, easily coordinating responsibilities, facilitating work pipelines, and taking ownership whenever system logjams occur.
            </p>
          </div>

          {/* Interpersonal Bento Block 2: Communication */}
          <div className="bg-[#161616] p-6 border border-[#2A2A2A] rounded-xl hover:bg-[#1A1A1A] transition-colors group">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center text-[10px] text-[#D4AF37] font-bold">
                02
              </div>
              <h3 className="font-serif text-base font-semibold text-slate-200">Growth & Communication</h3>
            </div>
            <p className="text-xs text-[#888] leading-relaxed">
              Prioritizes clarity, active empathetic listening, and proactive progress reporting. Actively logs and tailors skills daily to grow into a skilled Java developer.
            </p>
          </div>

        </section>

        {/* Right column / Dynamic Main Work Area (8 columns on large screens) */}
        <section className="lg:col-span-8 flex flex-col justify-between space-y-8">
          
          {/* Main Tab Switcher Rail */}
          <div className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-2 flex flex-col md:flex-row gap-2 z-20 sticky top-4 shadow-xl backdrop-blur-md bg-opacity-95 transition-all">
            {/* Desktop Tabs */}
            <div className="flex flex-wrap gap-1.5 flex-1">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    id={`nav-tab-${tab.id}`}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#D4AF37] text-[#0F0F0F] font-bold shadow-md shadow-[#D4AF37]/15'
                        : 'text-[#A0A0A0] hover:text-[#E0E0E0] hover:bg-[#1C1C1C]'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Theme Toggle Trigger */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              id="theme-toggle-btn"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border border-[#2A2A2A] bg-[#0F0F0F] text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#1C1C1C] transition-all cursor-pointer md:ml-2 shadow-sm"
              title={isDarkMode ? "Switch to Bright Theme" : "Switch to Dark Theme"}
            >
              {isDarkMode ? (
                <>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Bright Theme</span>
                </>
              ) : (
                <>
                  <Laptop className="w-4 h-4 text-indigo-400" />
                  <span>Dark Theme</span>
                </>
              )}
            </button>
          </div>

          {/* Dynamic Content Renderer */}
          <div className="flex-1 bg-[#0F0F0F] text-[#E0E0E0]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {activeTab === 'hero' && (
                  <Hero 
                    onNavigate={(section) => setActiveTab(section)} 
                  />
                )}
                {activeTab === 'timeline' && <Timeline />}
                {activeTab === 'skills' && <Skills />}
                {activeTab === 'projects' && (
                  <Projects 
                    customProjects={customProjects} 
                    onAddProject={handleAddProject} 
                    onDeleteProject={handleDeleteProject} 
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Ledger Line (extracted from Sophisticated Dark design specs) */}
          <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#555] font-semibold">
              Aspiring Java Developer &bull; 2026 Edition
            </div>
            <div className="hidden sm:block h-[1px] flex-1 mx-8 bg-[#2A2A2A]" />
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Portfolio Digest &amp; Interactive Hub
            </div>
          </div>

        </section>

      </main>

    </div>
  );
}

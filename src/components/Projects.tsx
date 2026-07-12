import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_PROJECTS } from '../data';
import { Project } from '../types';
import { FolderGit2, ExternalLink, Github, Plus, Trash2, Code2, Sparkles } from 'lucide-react';

interface ProjectsProps {
  customProjects: Project[];
  onAddProject: (project: Project) => void;
  onDeleteProject: (id: string) => void;
}

export default function Projects({ customProjects, onAddProject, onDeleteProject }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Full Stack' | 'Java' | 'Web Frontend' | 'Database'>('All');
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Form fields for custom project simulation
  const [title, setTitle] = useState('');
  const [tech, setTech] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<'Full Stack' | 'Java' | 'Web Frontend' | 'Database'>('Full Stack');

  const allProjects = [...INITIAL_PROJECTS, ...customProjects];
  const filteredProjects = activeTab === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeTab);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !tech || !description) return;

    const newProj: Project = {
      id: `custom-${Date.now()}`,
      title,
      tech,
      description,
      category,
      isCustom: true
    };

    onAddProject(newProj);
    setTitle('');
    setTech('');
    setDescription('');
    setShowAddForm(false);
  };

  return (
    <div id="projects-section" className="space-y-8">
      {/* Module Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2A2A2A] pb-4">
        <div>
          <h2 className="text-3xl font-serif text-[#D4AF37] tracking-tight">Software Engineering Projects</h2>
          <p className="text-[#A0A0A0] mt-1">Hands-on applications and code systems designed by Arpit.</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          id="btn-trigger-add-project"
          className="mt-3 md:mt-0 flex items-center gap-1.5 bg-[#161616] hover:bg-[#202020] text-[#D4AF37] border border-[#D4AF37]/40 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          {showAddForm ? 'Close Simulator' : 'Simulate Custom Project'}
        </button>
      </div>

      {/* Add Custom Project Simulator Form */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="simulated-project-form-container"
            className="bg-[#161616] border border-[#D4AF37]/30 rounded-2xl p-6 overflow-hidden"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" />
              Dynamic Portfolio Simulator
            </div>
            <p className="text-xs text-[#A0A0A0] mb-6 leading-relaxed">
              Test how Arpit's Virtual Twin adapts to custom projects! Input any technical project you'd like to evaluate him on, and the AI Recruiter assistant will instantly learn this experience during your chats.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-1.5 font-semibold">Project Name</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="e.g. Real-Time Chat Engine"
                    className="w-full bg-[#0F0F0F] text-[#E0E0E0] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-1.5 font-semibold">Technologies (Comma Separated)</label>
                  <input
                    type="text"
                    value={tech}
                    onChange={(e) => setTech(e.target.value)}
                    required
                    placeholder="e.g. Java, Spring Boot, WebSockets"
                    className="w-full bg-[#0F0F0F] text-[#E0E0E0] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-1.5 font-semibold">Project Domain Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full bg-[#0F0F0F] text-[#E0E0E0] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  >
                    <option value="Full Stack">Full Stack</option>
                    <option value="Java">Java</option>
                    <option value="Web Frontend">Web Frontend</option>
                    <option value="Database">Database</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-1.5 font-semibold">Brief Summary / Impact Statement</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    placeholder="Describe key architecture decisions, database patterns, or team achievements..."
                    rows={2}
                    className="w-full bg-[#0F0F0F] text-[#E0E0E0] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 bg-[#1F1F1F] text-[#E0E0E0] rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2A2A] transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#D4AF37] text-[#0F0F0F] rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#C59E2E] transition cursor-pointer"
                >
                  Add & Inform AI Twin
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Categories Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#2A2A2A] pb-2">
        {(['All', 'Full Stack', 'Java', 'Web Frontend', 'Database'] as const).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              id={`project-tab-${tab.replace(/\s+/g, '-').toLowerCase()}`}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                isActive
                  ? 'border-[#D4AF37] text-[#D4AF37] bg-[#161616]/45'
                  : 'border-transparent text-[#A0A0A0] hover:text-[#E0E0E0]'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, idx) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              id={`project-card-${p.id}`}
              className="bg-[#161616] rounded-2xl p-6 border border-[#2A2A2A] hover:border-[#D4AF37]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Custom badge indicator */}
              {p.isCustom && (
                <span className="absolute top-4 right-4 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                  User Simulated
                </span>
              )}

              <div>
                {/* Header Icon */}
                <div className="bg-[#1A1A1A] p-3 rounded-xl border border-[#2A2A2A] w-fit mb-4 group-hover:border-[#D4AF37]/40 group-hover:bg-[#202020] transition-all">
                  <FolderGit2 className="w-5 h-5 text-[#D4AF37]" />
                </div>

                {/* Info */}
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                  {p.category}
                </span>
                <h3 className="text-lg font-serif text-[#E0E0E0] font-semibold mb-2 leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-[#888] font-mono mb-4">
                  {p.tech}
                </p>
                <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              {/* Action row */}
              <div className="flex items-center justify-between pt-4 border-t border-[#2A2A2A]">
                <div className="flex items-center gap-3">
                  <a
                    href={p.githubUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#A0A0A0] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                  {p.liveUrl && p.liveUrl !== '#' && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#A0A0A0] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                {p.isCustom && (
                  <button
                    onClick={() => onDeleteProject(p.id)}
                    className="p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-lg border border-transparent hover:border-rose-500/20 transition-all cursor-pointer"
                    title="Delete simulated project"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

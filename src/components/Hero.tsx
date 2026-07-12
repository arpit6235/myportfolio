import { motion } from 'motion/react';
import { Mail, MapPin, GraduationCap, Briefcase, ChevronRight, Laptop, Trophy } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div id="hero-section" className="relative overflow-hidden bg-slate-900 text-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-slate-800">
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-indigo-500/30 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for Opportunities
        </motion.div>

        {/* Name and Title */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          >
            Arpit Tiwari
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl text-slate-300 font-medium max-w-2xl leading-relaxed"
          >
            Aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-semibold">Java Full Stack Developer</span> & Computer Science Graduate.
          </motion.p>
        </div>

        {/* Location & Institution Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 items-center text-sm text-slate-400 mt-6 pt-6 border-t border-slate-800"
        >
          <div id="loc-pin" className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-800">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>Jaunpur / Prayagraj, UP, India</span>
          </div>
          <div id="edu-inst" className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-800">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span>B.Tech Computer Science & Engineering &bull; SIET Prayagraj</span>
          </div>
          <a
            href="mailto:arpit6235@gmail.com"
            id="mail-link"
            className="flex items-center gap-1.5 bg-slate-800/50 hover:bg-slate-800 transition-colors duration-200 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 hover:text-white"
          >
            <Mail className="w-4 h-4 text-rose-400" />
            <span>arpit6235@gmail.com</span>
          </a>
        </motion.div>

        {/* Bio Summary Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl"
        >
          Welcome! I am a passionate Computer Science engineer specializing in full-stack development, with a deep-seated command over <span className="text-slate-200 font-semibold">HTML, CSS, JavaScript, MySQL, MongoDB</span>, and intermediate <span className="text-slate-200 font-semibold">Java development</span>. As an alumnus of Shambhunath Institute of Engineering & Technology, I thrive in collaborative team environments and look forward to building high-value software systems under expert mentorship.
        </motion.p>

        {/* Primary Interactive Portals */}
        <div className="grid grid-cols-1 gap-4 mt-10">
          {/* Portal: Portfolio Projects */}
          <motion.button
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onNavigate('projects')}
            id="btn-portfolio-projects"
            className="flex flex-col items-start p-5 bg-gradient-to-br from-cyan-900/50 to-slate-900 text-left rounded-2xl border border-cyan-500/30 hover:border-cyan-400 cursor-pointer transition-all duration-200 group"
          >
            <div className="bg-cyan-500/20 p-2.5 rounded-xl mb-3 border border-cyan-500/40 group-hover:bg-cyan-500/30">
              <Laptop className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-semibold text-slate-200 mb-1 flex items-center gap-1">
              Portfolio Projects <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-400 leading-normal">
              Explore Arpit's standard and simulated Java full-stack projects, and customize the grid.
            </p>
          </motion.button>
        </div>

        {/* Quick Numbers Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-800 text-center sm:text-left">
          <div id="stat-btech">
            <div className="text-2xl font-bold text-indigo-400">SIET</div>
            <div className="text-xs text-slate-400 mt-1">B.Tech Engineering</div>
          </div>
          <div id="stat-dipl">
            <div className="text-2xl font-bold text-cyan-400">M.G. Poly</div>
            <div className="text-xs text-slate-400 mt-1">Diploma EE</div>
          </div>
          <div id="stat-skills">
            <div className="text-2xl font-bold text-emerald-400">4 Core</div>
            <div className="text-xs text-slate-400 mt-1">Skill Domains</div>
          </div>
        </div>
      </div>
    </div>
  );
}

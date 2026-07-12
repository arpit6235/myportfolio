import { useState } from 'react';
import { motion } from 'motion/react';
import { SKILLS_DATA } from '../data';
import { Code, Monitor, Database, Users, CheckCircle2, Star, Sparkles } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(SKILLS_DATA[0].name);
  const [selectedSkill, setSelectedSkill] = useState(SKILLS_DATA[0].skills[0]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const activeCategoryData = SKILLS_DATA.find(c => c.name === selectedCategory) || SKILLS_DATA[0];

  return (
    <div id="skills-section" className="space-y-8">
      {/* Module Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Skills & Capabilities</h2>
          <p className="text-slate-500 mt-1">Explore Arpit's specialized full-stack and professional competencies.</p>
        </div>
        <div className="text-xs text-slate-400 mt-2 md:mt-0 font-mono bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
          Actively Improving Daily
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Category Selector Rail (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-bold text-slate-400 tracking-wide uppercase block pl-1 mb-2">
            Skill Categories
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
            {SKILLS_DATA.map((cat) => {
              const isActive = cat.name === selectedCategory;
              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setSelectedSkill(cat.skills[0]);
                  }}
                  id={`skill-cat-btn-${cat.name.replace(/\s+/g, '-').toLowerCase()}`}
                  className={`flex items-center gap-3 p-3.5 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-950'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-100 text-slate-500'}`}>
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <div className="text-sm font-bold leading-none">{cat.name}</div>
                    <div className={`text-[10px] mt-1 ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                      {cat.skills.length} core competencies
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Endorsement Quote */}
          <div className="hidden lg:block bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100 p-5 rounded-2xl mt-6">
            <div className="flex gap-1.5 mb-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "Continuous learning is my core philosophy. Building full-stack systems helps me bridge database precision and clean UI design."
            </p>
            <span className="text-[10px] font-bold text-indigo-600 block mt-3 uppercase tracking-wider">
              &mdash; Arpit Tiwari
            </span>
          </div>
        </div>

        {/* Dynamic Skill Detail Matrix (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Main Selected Category Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex-1">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" />
              Active Domain &bull; {selectedCategory}
            </div>

            {/* List of Skills inside active category */}
            <div className="space-y-5">
              {activeCategoryData.skills.map((sk) => {
                const isSelected = selectedSkill.name === sk.name;
                return (
                  <div
                    key={sk.name}
                    onClick={() => setSelectedSkill(sk)}
                    id={`skill-row-${sk.name.replace(/\s+/g, '-').toLowerCase()}`}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50/20 shadow-sm'
                        : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-indigo-500' : 'text-slate-400'}`} />
                        <span className="font-bold text-slate-800 text-sm sm:text-base">{sk.name}</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100/50">
                        {sk.level}% Mastery
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${sk.level}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-indigo-500 rounded-full"
                      />
                    </div>

                    {/* Highlighted text or description */}
                    <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                      {sk.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Drilldown focus card */}
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={selectedSkill.name}
              className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md"
            >
              <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-2">
                Selected Skill Focus
              </div>
              <h4 className="text-lg font-bold text-slate-100 mb-1.5">
                {selectedSkill.name}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Applied context: In B.Tech and self-directed study, Arpit uses {selectedSkill.name} to design clean modules, optimize response rates, and ensure scalable components. Focus areas: clean syntax, modern architecture, and standard integration APIs.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { TIMELINE_DATA } from '../data';
import { GraduationCap, School, BookOpen, MapPin, Calendar, Award } from 'lucide-react';
import { TimelineEvent } from '../types';

export default function Timeline() {
  const getTimelineIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'university':
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      case 'polytechnic':
        return <Award className="w-5 h-5 text-cyan-400" />;
      case 'school':
        return <School className="w-5 h-5 text-emerald-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-slate-400" />;
    }
  };

  const getTimelineColorClass = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'university':
        return 'border-indigo-500 bg-indigo-500/10 shadow-indigo-500/20';
      case 'polytechnic':
        return 'border-cyan-500 bg-cyan-500/10 shadow-cyan-500/20';
      case 'school':
        return 'border-emerald-500 bg-emerald-500/10 shadow-emerald-500/20';
      default:
        return 'border-slate-500 bg-slate-500/10 shadow-slate-500/20';
    }
  };

  return (
    <div id="timeline-section" className="space-y-10 py-4">
      {/* Module Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Academic Journey</h2>
          <p className="text-slate-500 mt-1">Tracing Arpit's foundations from Jaunpur to SIET Prayagraj.</p>
        </div>
        <div className="text-xs text-slate-400 mt-2 md:mt-0 font-mono bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
          Fully Documented Chronology
        </div>
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 pl-6 sm:pl-10 py-2 space-y-12">
        {TIMELINE_DATA.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            id={`timeline-card-${event.id}`}
            className="relative group"
          >
            {/* Timeline node icon */}
            <div className={`absolute -left-[45px] md:-left-[53px] top-1.5 w-10 h-10 rounded-full border-2 flex items-center justify-center bg-white transition-all duration-300 group-hover:scale-110 shadow-lg ${getTimelineColorClass(event.type)}`}>
              {getTimelineIcon(event.type)}
            </div>

            {/* Event Content Box */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-200 hover:border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md font-mono mb-2 border border-slate-200">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 font-medium text-sm mt-1 flex items-center gap-1">
                    <span className="text-slate-800">{event.institution}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md self-start sm:self-auto">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {event.location}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mt-4">
                {event.description}
              </p>

              {/* Skills/Competencies Tag Cloud */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-400 tracking-wide uppercase block mb-2.5">
                  Knowledge Acquired:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {event.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-100/50 px-2.5 py-1 rounded-md hover:bg-indigo-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export interface TimelineEvent {
  id: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  type: 'school' | 'polytechnic' | 'university' | 'milestone';
  skillsLearned: string[];
}

export interface Project {
  id: string;
  title: string;
  tech: string;
  description: string;
  category: 'Full Stack' | 'Java' | 'Web Frontend' | 'Database';
  githubUrl?: string;
  liveUrl?: string;
  isCustom?: boolean;
}

export interface SkillCategory {
  name: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // percentage 0-100
    description: string;
  }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  designation?: string;
  company?: string;
  message: string;
  timestamp: string;
  badge?: string; // Optional badge like "Recruiter", "Tech Lead", "Fellow Developer"
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: 'Java' | 'Web Basics' | 'Databases' | 'Full Stack';
}

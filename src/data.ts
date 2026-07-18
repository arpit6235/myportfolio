import { TimelineEvent, Project, SkillCategory, QuizQuestion } from './types';

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 'btech',
    period: '2023 - 2026',
    title: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    institution: 'Shambhunath Institute of Engineering & Technology (SIET)',
    location: 'Prayagraj (Allahabad), Uttar Pradesh',
    description: 'Acquired core competencies in computer science, software engineering methodologies, data structures, and algorithms. Worked on academic software engineering projects, spearheaded collaborative lab activities, and polished full-stack web development skills.',
    type: 'university',
    skillsLearned: ['Java', 'Object-Oriented Programming', 'Web Technologies', 'Software Engineering', 'Database Management', 'Team Collaboration']
  },
  {
    id: 'diploma',
    period: '2021 - 2023',
    title: 'Diploma in Electrical Engineering',
    institution: 'M.G. Polytechnic',
    location: 'Prayagraj, Uttar Pradesh',
    description: 'Built core fundamentals in circuit analysis, electrical machines, power systems, and electronic instrumentation. Cultivated a strong logical framework and analytical problem-solving mindset, sparking an interest in computing system architectures and software-hardware interfaces.',
    type: 'polytechnic',
    skillsLearned: ['Circuit Analysis', 'Electrical Machines', 'Power Systems', 'Basic Electronics', 'Electrical CAD', 'Analytical Problem Solving', 'Instrumentation']
  },
  {
    id: 'intermediate',
    period: '2021',
    title: 'Intermediate Education (12th Grade - PCM)',
    institution: 'N.B.I.C.',
    location: 'Ghaghariya, Jaunpur, Uttar Pradesh',
    description: 'Completed major coursework in Physics, Chemistry, and Mathematics (PCM), refining logical reasoning, algorithmic thinking, and analytical problem-solving skills.',
    type: 'school',
    skillsLearned: ['Mathematics', 'Analytical Problem Solving', 'Scientific Methodology', 'Logical Reasoning']
  },
  {
    id: 'highschool',
    period: '2019',
    title: 'High School Education (10th Grade)',
    institution: 'Shanti Higher Secondary School',
    location: 'Gonapar, Jaunpur, Uttar Pradesh',
    description: 'Fostered early curiosity for general sciences and mathematics, participating in regional debate, science fairs, and collaborative teamwork activities.',
    type: 'school',
    skillsLearned: ['General Sciences', 'Public Speaking', 'Cooperative Learning', 'Basic Mathematics']
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Java Full-Stack Task & Sprint Management System',
    tech: 'Java, Spring Boot, MySQL, HTML, CSS, JavaScript',
    description: 'A comprehensive sprint-planning and task assignment dashboard built to organize software development pipelines. Features secure session authentication, dynamic task boards, status filters, and historical logging powered by a robust Spring Boot microservice.',
    category: 'Java',
    githubUrl: 'https://github.com/arpit-tiwari/java-sprint-manager',
    liveUrl: '#'
  },
  {
    id: 'proj2',
    title: 'E-Commerce Marketplace Hub',
    tech: 'React, Node.js, Express, MongoDB, Tailwind CSS',
    description: 'A modern, responsive e-commerce platform demonstrating modern cart management, secure API endpoints, smart search queries, dynamic product categorization, and interactive mock payment states.',
    category: 'Full Stack',
    githubUrl: 'https://github.com/arpit-tiwari/mongodb-marketplace',
    liveUrl: '#'
  },
  {
    id: 'proj3',
    title: 'Collaborative Student Classroom Tracker',
    tech: 'JavaScript (ES6+), HTML5, CSS3, Local Storage API',
    description: 'A lightweight team organizer and attendance visualization tool designed during academic projects to streamline student registration, track project milestones, and visualize peer ratings using clean CSS components.',
    category: 'Web Frontend',
    githubUrl: 'https://github.com/arpit-tiwari/classroom-tracker',
    liveUrl: '#'
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: 'Java & Full-Stack Core',
    iconName: 'Code',
    skills: [
      { name: 'Java Programming', level: 85, description: 'Solid understanding of OOP concepts, Collections Framework, Exception Handling, and Multithreading.' },
      { name: 'Java Full Stack Dev', level: 75, description: 'Actively learning and designing client-server systems combining relational databases and application servers.' },
      { name: 'Data Structures & Algorithms', level: 75, description: 'Strengthening problem-solving skills in array manipulation, searching, sorting, and linear structures.' }
    ]
  },
  {
    name: 'Frontend Web Stack',
    iconName: 'Monitor',
    skills: [
      { name: 'HTML5 & CSS3', level: 90, description: 'Semantic tags, responsive grid/flexbox layouts, custom UI states, and typography pairings.' },
      { name: 'JavaScript (ES6+)', level: 85, description: 'Asynchronous actions, Fetch API, DOM manipulation, promises, and dynamic event handling.' },
      { name: 'React & Tailwind CSS', level: 80, description: 'Modern component architectures, Hooks, custom state managers, responsive margins, and sleek hover feedback.' }
    ]
  },
  {
    name: 'Databases & Environments',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', level: 85, description: 'Relational design, entity relationships, index optimization, nested JOIN queries, and schema security.' },
      { name: 'MongoDB', level: 80, description: 'NoSQL collections, document models, aggregation pipelines, and flexible schema prototyping.' },
      { name: 'Version Control (Git/GitHub)', level: 80, description: 'Branch management, continuous committing, code reviews, and remote repository collaboration.' }
    ]
  },
  {
    name: 'Professional & Interpersonal',
    iconName: 'Users',
    skills: [
      { name: 'Teamwork & Collaboration', level: 95, description: 'Flourishes in multidisciplinary team settings; coordinated multiple engineering group projects.' },
      { name: 'Leadership & Responsibility', level: 88, description: 'Comfortable taking ownership, resolving structural logjams, and steering project deliverables.' },
      { name: 'Active Communication', level: 90, description: 'Expressive speaker and empathetic listener, translating technical designs into simple human narratives.' }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which of the following is NOT a feature of Object-Oriented Programming (OOP) in Java?',
    options: ['Encapsulation', 'Polymorphism', 'Pointers Manipulation', 'Inheritance'],
    correctAnswerIndex: 2,
    explanation: 'Java does not support explicit pointer manipulation or arithmetic to ensure safety and prevent system corruption, unlike C/C++.',
    category: 'Java'
  },
  {
    id: 2,
    question: 'In MongoDB, how are documents stored and represented in the database representation?',
    options: ['Tables and Rows', 'BSON (Binary JSON)', 'XML Nodes', 'Key-Value plain strings'],
    correctAnswerIndex: 1,
    explanation: 'MongoDB stores records as BSON (Binary JSON) documents, which supports a wider range of data types and nested sub-documents.',
    category: 'Databases'
  },
  {
    id: 3,
    question: 'Which CSS layout method is ideal for one-dimensional layouts (either a single row OR a single column)?',
    options: ['CSS Grid', 'Float and Position', 'Flexbox', 'Inline-Block blocks'],
    correctAnswerIndex: 2,
    explanation: 'Flexbox is specifically optimized for one-dimensional layouts (row or column), whereas CSS Grid is designed for two-dimensional layouts.',
    category: 'Web Basics'
  },
  {
    id: 4,
    question: 'What is the purpose of the "useEffect" hook in React?',
    options: ['To manage complex local state transitions', 'To perform side effects like fetching data or setting timers', 'To memoize expensive calculations', 'To reference real DOM nodes directly'],
    correctAnswerIndex: 1,
    explanation: 'The "useEffect" hook is used to synchronize a component with an external system or trigger actions (side effects) like HTTP calls, subscriptions, or intervals.',
    category: 'Full Stack'
  },
  {
    id: 5,
    question: 'In relational databases like MySQL, what does a "Foreign Key" represent?',
    options: ['The primary unique identifier of the same table', 'A link to reference the primary key of another table', 'A key that can only contain foreign alphabetic characters', 'An encrypted password hash'],
    correctAnswerIndex: 1,
    explanation: 'A Foreign Key is a field (or collection of fields) in one table that uniquely identifies a row of another table, establishing relational integrity.',
    category: 'Databases'
  }
];

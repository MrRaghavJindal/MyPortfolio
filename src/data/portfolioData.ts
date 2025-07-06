import { NavItem, Project, Achievement, Skill, Education, Experience, CodingProfile } from '../types';
import news from '../assets/news.png'
import tradesphere from '../assets/tradesphere.png'
export const navItems: NavItem[] = [
  { id: 'about', label: 'About', icon: 'User' },
  { id: 'resume', label: 'Resume', icon: 'FileText' },
  { id: 'projects', label: 'Projects', icon: 'FolderKanban' },
  { id: 'achievements', label: 'Achievements', icon: 'Award' },
  { id: 'skills', label: 'Skills', icon: 'BarChart' },
  // { id: 'geeksforgeeks', label: 'GeeksforGeeks', icon: 'Code2' },
  // { id: 'leetcode', label: 'LeetCode', icon: 'Binary' },
];

export const personalInfo = {
  name: 'RAGHAV JINDAL',
  title: 'Full Stack Developer',
  bio: 'Proficient full-stack developer with hands-on experience in both frontend and backend development. Adept at building userfriendly interfaces using modern frameworks and developing robust APIs and scalable server-side logic. Eager to leverage my full-stack expertise in a dynamic organization and collaborate with cross-functional teams throughout the development lifecycle.',
  email: 'raghavjindal345@gmail.com',
  location: 'Firozabad, Uttar Pradesh - 283203',
  phone: '+91-7078541164',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/MrRaghavJindal', icon: 'Github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/raghav-jindall/', icon: 'Linkedin' },
    // { platform: 'Twitter', url: 'https://twitter.com/alexjohnson', icon: 'Twitter' },
  ],
};

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'GeeksforGeeks',
    username: 'raghavjindal345',
    profileUrl: 'https://www.geeksforgeeks.org/user/raghavjindal345/',
    stats: {
      rank: 'Institute Rank',
      score: 1234,
      problemsSolved: 150,
      monthlyScore: 85,
    },
    recentSubmissions: [
      {
        title: 'Binary Search',
        difficulty: 'Easy',
        status: 'Solved',
        date: '2024-03-15',
      },
      {
        title: 'Dynamic Programming',
        difficulty: 'Medium',
        status: 'Solved',
        date: '2024-03-14',
      },
      {
        title: 'Graph Algorithms',
        difficulty: 'Hard',
        status: 'Solved',
        date: '2024-03-13',
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Corteva Agriscience India Private Limited',
    position: 'Frontend Developer',
    startDate: 'July 2024',
    endDate: 'Present',
    description: [
      'Developed a data analytics dashboard using Angular and Plotly to visualize complex datasets interactively',
      'Created a cron job scheduling system using Angular and Kubernetes, deploying and managing workloads with Okteto.',
      'Built a GUI app using Tkinter to facilitate folder uploads to an S3 bucket, integrating OS-level interactions.',
    ],
    technologies: ['Angular', 'TypeScript', 'Streamlit', 'Tinkter', 'Python', 'Flask', 'MySqlite', 'Gitlab','Plotly','Kubernetes'],
  }
];

export const education: Education[] = [
  {
    id: 'edu1',
    institution: 'Abdul Kalam Technical University',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    startDate: '2021',
    endDate: '2025',
    description: 'Specialized in Computer Science and Machine Learning',
  }
];

export const skills: Skill[] = [
  { id: 'skill1', name: 'JavaScript', proficiency: 90, category: 'technical' },
  { id: 'skill2', name: 'TypeScript', proficiency: 85, category: 'technical' },
  { id: 'skill3', name: 'React', proficiency: 90, category: 'technical' },
  { id: 'skill4', name: 'Node.js', proficiency: 80, category: 'technical' },
  { id: 'skill5', name: 'HTML/CSS', proficiency: 95, category: 'technical' },
  { id: 'skill6', name: 'GraphQL', proficiency: 75, category: 'technical' },
  { id: 'skill7', name: 'AWS', proficiency: 70, category: 'technical' },
  { id: 'skill15', name: 'Angular', proficiency: 90, category: 'technical' },
  { id: 'skill16', name: 'MongoDB', proficiency: 90, category: 'technical' },
  { id: 'skill17', name: 'MySQL', proficiency: 90, category: 'technical' },
  { id: 'skill8', name: 'Docker', proficiency: 65, category: 'tool' },
  { id: 'skill9', name: 'Git', proficiency: 90, category: 'tool' },
  { id: 'skill10', name: 'Problem Solving', proficiency: 95, category: 'soft' },
  { id: 'skill11', name: 'Communication', proficiency: 85, category: 'soft' },
  { id: 'skill12', name: 'Team Leadership', proficiency: 80, category: 'soft' },
  { id: 'skill13', name: 'English', proficiency: 100, category: 'language' },
  { id: 'skill14', name: 'Hindi', proficiency: 100, category: 'language' },
];
export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Chatt-App',
    description: 'Chatt-App is a real-time messaging web application designed for seamless communication with a clean and responsive UI. Built using React, Node.js, Express, and MongoDB, it leverages WebSockets (Socket.IO) to enable instant messaging between users. Key features include user authentication, one-on-one conversations, image sharing, and live updates, making it a robust and scalable solution for modern-day chat needs.',
    technologies: ['Web Sockets', 'React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: 'https://img.freepik.com/premium-psd/chat-app-landing-page-template_553413-701.jpg',
    link: 'https://chat-appy.vercel.app/',
    github:'https://github.com/MrRaghavJindal/Chat-app'
  },
  {
    id: 'proj2',
    title: 'Smart-Management-App',
    description: 'A task management web app that allows users to create, track, and organize tasks efficiently with an intuitive UI and real-time updates.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://to-do-app-by-raghav.netlify.app/',
    github:'https://github.com/MrRaghavJindal/React-JS-TO-DO-APP'
  },
  {
    id: 'proj3',
    title: 'Auto Path Navigator App',
    description: 'A GPS-based application for automatically navigating optimal routes for logistics and personal travel using real-time traffic and environmental data.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Google Maps API'],
    imageUrl: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://easyway-deployment.streamlit.app/',
    github:'https://github.com/MrRaghavJindal/EasyWayHackathon'
  },
  {
    id: 'proj4',
    title: 'News Web App',
    description: 'A dynamic web application that aggregates news from various sources, categorizes them, and allows users to search and filter through trending topics in real-time.',
    technologies: ['React', 'NewsAPI', 'Tailwind CSS', 'Vite'],
    imageUrl: news,
    link: 'https://newsdekhlo.netlify.app/',
    github:'https://github.com/MrRaghavJindal/NEWS_APP'
  },
  {
    id: 'proj5',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce solution with seamless payment integration, real-time inventory management, and an interactive analytics dashboard for business insights.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    imageUrl: tradesphere,
    link: 'https://trade-sphere.vercel.app/',
    github:'https://github.com/MrRaghavJindal/TradeSphere'
  },
];


export const achievements: Achievement[] = [
  {
    id: 'ach1',
    title: 'Scholorship',
    date: '2021',
    description: 'RAwarded a scholarship worth Rs.4,12,000 in college',
    icon: 'Trophy',
  },
  {
    id: 'ach2',
    title: 'GATE 2025',
    date: '2025',
    description: 'Qualified GATE CSE and GATE DA in 2025.',
    icon: 'Mic2',
  },
  {
    id: 'ach3',
    title: 'GeeksForGeeks',
    date: '2024',
    description: 'Rank 5 in overall college on GeekforGeeks.',
    icon: 'FileText',
  },
  {
    id: 'ach4',
    title: 'Codecode',
    date: '2023',
    description: 'Achieved 1st place in Codecode at Annual Tech Fest.',
    icon: 'Trophy',
  },
  {
    id: 'ach5',
    title: 'Reverse Coding',
    date: '2023',
    description: 'Won 1st prize in Reverse Coding event organize by coding club of college.',
    icon: 'Trophy',
  },
  {
    id: 'ach6',
    title: 'Business Plan Presentation',
    date: '2024',
    description: 'Won 1st prize along with 5000 cash in a Business Plan Presentation',
    icon: 'Trophy',
  },
  {
    id: 'ach7',
    title: 'Aptitude Contest',
    date: '2023',
    description: 'Ranked 1st in the Aptitude Contest',
    icon: 'Trophy',
  },
];
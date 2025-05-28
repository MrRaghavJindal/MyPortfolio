export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  github?:string
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  icon?: string;
}

export interface Skill {
  id: string;
  name: string;
  proficiency: number;
  category: 'technical' | 'soft' | 'language' | 'tool';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

export interface CodingProfile {
  platform: string;
  username: string;
  profileUrl: string;
  stats: {
    rank: string;
    score: number;
    problemsSolved: number;
    monthlyScore: number;
  };
  recentSubmissions: {
    title: string;
    difficulty: string;
    status: string;
    date: string;
  }[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  title: string;
  bio: string;
  location: string;
  phone: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
  projects: Project[];
  achievements: Achievement[];
  skills: Skill[];
  education: Education[];
  experience: Experience[];
  codingProfiles: CodingProfile[];
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateUserData: (data: Partial<User>) => void;
}
export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: {
    label: string;
    url: string;
  };
}

export interface Skill {
  name: string;
  years: number;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface Achievement {
  bold: string;
  detail: string;
}

export interface Project {
  projectName: string;
  from: string;
  to: string;
  title: string;
  company?: string;
  clientProblem: string;
  achievements: Achievement[];
  skills: string[];
}

export interface CvData {
  name: string;
  titles: string[];
  aboutMe: string;
  contact: ContactInfo;
  skills: Skill[];
  education: Education;
  projects: Project[];
}

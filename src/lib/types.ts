//  Global Types
export type ID = string | number;

//  User Types
export interface User {
  id: ID;
  name: string;
  email: string;
  avatarUrl?: string;
  role?: "admin" | "member" | "guest";
  createdAt?: string;
}

//  Project Types
export interface Project {
  id: ID;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  createdAt?: string;
}

export interface IOurProcess {
  step: number;
  title: string;
  description: string;
  options: string[];
}

export interface TimelineCardProps {
  process: IOurProcess;
  isEven: boolean;
}

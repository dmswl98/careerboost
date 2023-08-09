import { v4 } from 'uuid';
import { create } from 'zustand';

const DEFAULT_PROJECT = {
  id: v4(),
  isSuggested: false,
};

interface Project {
  id: string;
  isSuggested: boolean;
}

export interface UserInfo {
  name: string;
  career: string;
  brief: string;
  phone: string;
  email: string;
  blog: string;
  github: string;
  projects: Project[];
}

interface UserState extends UserInfo {
  actions: ResumeActions;
}

export interface ResumeActions {
  setName: (value: UserState['name']) => void;
  setCareer: (value: UserState['career']) => void;
  setBrief: (value: UserState['brief']) => void;
  setPhone: (value: UserState['phone']) => void;
  setEmail: (value: UserState['email']) => void;
  setBlog: (value: UserState['blog']) => void;
  setGithub: (value: UserState['github']) => void;
  addProject: (value: string) => void;
  removeProject: (value: string) => void;
  setIsSuggested: (value: string) => void;
}

export const resumeStore = create<UserState>((set) => ({
  name: '',
  career: '',
  brief: '',
  phone: '',
  email: '',
  blog: '',
  github: '',
  projects: [DEFAULT_PROJECT],
  actions: {
    setName: (value: UserState['name']) => set(() => ({ name: value })),
    setCareer: (value: UserState['career']) => set(() => ({ career: value })),
    setBrief: (value: UserState['brief']) => set(() => ({ brief: value })),
    setPhone: (value: UserState['phone']) => set(() => ({ phone: value })),
    setEmail: (value: UserState['email']) => set(() => ({ email: value })),
    setBlog: (value: UserState['blog']) => set(() => ({ blog: value })),
    setGithub: (value: UserState['github']) => set(() => ({ github: value })),
    addProject: (value: string) =>
      set((prevState) => ({
        projects: [
          ...prevState.projects,
          {
            id: value,
            isSuggested: false,
            suggestion: '',
          },
        ],
      })),
    removeProject: (value: string) =>
      set((prevState) => ({
        projects: prevState.projects.filter((project) => project.id !== value),
      })),
    setIsSuggested: (value: string) =>
      set((prevState) => ({
        projects: prevState.projects.map((project) => ({
          ...project,
          isSuggested: project.id === value ? true : project.isSuggested,
        })),
      })),
  },
}));

// State
export const useName = () => resumeStore((state) => state.name);
export const useCareer = () => resumeStore((state) => state.career);
export const useBrief = () => resumeStore((state) => state.brief);
export const usePhone = () => resumeStore((state) => state.phone);
export const useEmail = () => resumeStore((state) => state.email);
export const useBlog = () => resumeStore((state) => state.blog);
export const useGithub = () => resumeStore((state) => state.github);
export const useProjects = () => resumeStore((state) => state.projects);
export const useProject = (id: string) =>
  resumeStore((state) => state.projects.find((proejct) => proejct.id === id));

// Actions
export const useResumeActions = () => resumeStore((state) => state.actions);

import { create } from 'zustand';

export interface Project {
  id: string;
  content: string;
}

export interface Resume {
  name: string;
  career: string;
  brief: string;
  phone: string;
  email: string;
  blog: string;
  github: string;
  projects: Project[];
}

interface ResumeState extends Resume {
  actions: ResumeActions;
}

export interface ResumeActions {
  setName: (value: ResumeState['name']) => void;
  setCareer: (value: ResumeState['career']) => void;
  setBrief: (value: ResumeState['brief']) => void;
  setPhone: (value: ResumeState['phone']) => void;
  setEmail: (value: ResumeState['email']) => void;
  setBlog: (value: ResumeState['blog']) => void;
  setGithub: (value: ResumeState['github']) => void;
  addProject: (value: string) => void;
  removeProject: (value: string) => void;
  setProjectContent: (value: { id: string; content: string }) => void;
}

export const resumeStore = create<ResumeState>((set) => ({
  name: '',
  career: '',
  brief: '',
  phone: '',
  email: '',
  blog: '',
  github: '',
  projects: [{ id: '', content: '' }],
  actions: {
    setName: (value: ResumeState['name']) => set(() => ({ name: value })),
    setCareer: (value: ResumeState['career']) => set(() => ({ career: value })),
    setBrief: (value: ResumeState['brief']) => set(() => ({ brief: value })),
    setPhone: (value: ResumeState['phone']) => set(() => ({ phone: value })),
    setEmail: (value: ResumeState['email']) => set(() => ({ email: value })),
    setBlog: (value: ResumeState['blog']) => set(() => ({ blog: value })),
    setGithub: (value: ResumeState['github']) => set(() => ({ github: value })),
    addProject: (value: string) =>
      set((prevState) => ({
        projects: [
          ...prevState.projects,
          {
            id: value,
            content: '',
          },
        ],
      })),
    removeProject: (value: string) =>
      set((prevState) => ({
        projects: prevState.projects.filter((project) => project.id !== value),
      })),
    setProjectContent: (value: { id: string; content: string }) =>
      set((prevState) => ({
        projects: prevState.projects.map((project) => ({
          ...project,
          isSuggested:
            project.id === value.id ? value.content : project.content,
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

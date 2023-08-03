import { create } from 'zustand';

export interface UserInfo {
  name: string;
  career: string;
  introduce: string;
  phone: string;
  email: string;
  blog: string;
  github: string;
}

interface UserState extends UserInfo {
  actions: ResumeActions;
}

export interface ResumeActions {
  setName: (value: UserState['name']) => void;
  setCareer: (value: UserState['career']) => void;
  setIntroduce: (value: UserState['introduce']) => void;
  setPhone: (value: UserState['phone']) => void;
  setEmail: (value: UserState['email']) => void;
  setBlog: (value: UserState['blog']) => void;
  setGithub: (value: UserState['github']) => void;
}

export const resumeStore = create<UserState>((set) => ({
  name: '',
  career: '',
  introduce: '',
  phone: '',
  email: '',
  blog: '',
  github: '',
  actions: {
    setName: (value: UserState['name']) => set(() => ({ name: value })),
    setCareer: (value: UserState['career']) => set(() => ({ career: value })),
    setIntroduce: (value: UserState['introduce']) =>
      set(() => ({ introduce: value })),
    setPhone: (value: UserState['phone']) => set(() => ({ phone: value })),
    setEmail: (value: UserState['email']) => set(() => ({ email: value })),
    setBlog: (value: UserState['blog']) => set(() => ({ blog: value })),
    setGithub: (value: UserState['github']) => set(() => ({ github: value })),
  },
}));

// State
export const useName = () => resumeStore((state) => state.name);
export const useCareer = () => resumeStore((state) => state.career);
export const useIntroduce = () => resumeStore((state) => state.introduce);
export const usePhone = () => resumeStore((state) => state.phone);
export const useEmail = () => resumeStore((state) => state.email);
export const useBlog = () => resumeStore((state) => state.blog);
export const useGithub = () => resumeStore((state) => state.github);

// Actions
export const useResumeActions = () => resumeStore((state) => state.actions);

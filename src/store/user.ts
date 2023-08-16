import { create } from 'zustand';

const DEFAULT_USER = {
  name: '',
  career: '',
  brief: '',
  phone: '',
  email: '',
  blog: '',
  github: '',
};

export interface User {
  name: string;
  career: string;
  brief: string;
  phone: string;
  email: string;
  blog: string;
  github: string;
}

interface UserState extends User {
  actions: UserActions;
}

export interface UserActions {
  setName: (value: UserState['name']) => void;
  setCareer: (value: UserState['career']) => void;
  setBrief: (value: UserState['brief']) => void;
  setPhone: (value: UserState['phone']) => void;
  setEmail: (value: UserState['email']) => void;
  setBlog: (value: UserState['blog']) => void;
  setGithub: (value: UserState['github']) => void;
}

export const userStore = create<UserState>((set) => ({
  ...DEFAULT_USER,
  actions: {
    setName: (value: UserState['name']) => set(() => ({ name: value })),
    setCareer: (value: UserState['career']) => set(() => ({ career: value })),
    setBrief: (value: UserState['brief']) => set(() => ({ brief: value })),
    setPhone: (value: UserState['phone']) => set(() => ({ phone: value })),
    setEmail: (value: UserState['email']) => set(() => ({ email: value })),
    setBlog: (value: UserState['blog']) => set(() => ({ blog: value })),
    setGithub: (value: UserState['github']) => set(() => ({ github: value })),
  },
}));

// State
export const useName = () => userStore((state) => state.name);
export const useCareer = () => userStore((state) => state.career);
export const useBrief = () => userStore((state) => state.brief);
export const usePhone = () => userStore((state) => state.phone);
export const useEmail = () => userStore((state) => state.email);
export const useBlog = () => userStore((state) => state.blog);
export const useGithub = () => userStore((state) => state.github);

// Actions
export const useUserActions = () => userStore((state) => state.actions);

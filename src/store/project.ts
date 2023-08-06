import { v4 } from 'uuid';
import { create } from 'zustand';

export const PROJECT_DEFAULT = {
  id: v4(),
  title: '',
  startDate: '',
  endDate: '',
  content: '',
  url: '',
};

export interface Project {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  content: string;
  url: string;
}

interface ProjectState extends Project {
  actions: ProjectActions;
}

export interface ProjectActions {
  setTitle: (value: ProjectState['title']) => void;
  setStartDate: (value: ProjectState['startDate']) => void;
  setEndDate: (value: ProjectState['endDate']) => void;
  setContent: (value: ProjectState['content']) => void;
  setUrl: (value: ProjectState['url']) => void;
}

export const projectStore = create<ProjectState>((set) => ({
  ...PROJECT_DEFAULT,
  actions: {
    setTitle: (value: ProjectState['title']) => set(() => ({ title: value })),
    setStartDate: (value: ProjectState['startDate']) =>
      set(() => ({ startDate: value })),
    setEndDate: (value: ProjectState['endDate']) =>
      set(() => ({ endDate: value })),
    setContent: (value: ProjectState['content']) =>
      set(() => ({ content: value })),
    setUrl: (value: ProjectState['url']) => set(() => ({ url: value })),
  },
}));

// State
export const useTitle = () => projectStore((state) => state.title);
export const useStartDate = () => projectStore((state) => state.startDate);
export const useEndDate = () => projectStore((state) => state.endDate);
export const useContent = () => projectStore((state) => state.content);
export const useUrl = () => projectStore((state) => state.url);

// Actions
export const useProjectActions = () => projectStore((state) => state.actions);

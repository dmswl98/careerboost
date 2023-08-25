import { create } from 'zustand';

interface ResumePreviewState {
  isPreview: boolean;
  actions: ResumePreviewActions;
}

export interface ResumePreviewActions {
  setIsPreview: () => void;
}

export const resumePreviewStore = create<ResumePreviewState>((set) => ({
  isPreview: false,
  actions: {
    setIsPreview: () => set((state) => ({ isPreview: !state.isPreview })),
  },
}));

// State
export const useIsPreview = () =>
  resumePreviewStore((state) => state.isPreview);

// Actions
export const useResumePreviewActions = () =>
  resumePreviewStore((state) => state.actions);

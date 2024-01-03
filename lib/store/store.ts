import { create } from "zustand";

// Dashboard sidebar collapsed or not
type SidebarCollapsed = {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  toggleIsCollapsed: () => void;
  setIsCollapsedTrue: () => void;
  setIsCollapsedFalse: () => void;
};

export const useSidebarCollapsed = create<SidebarCollapsed>((set) => ({
  isCollapsed: false,
  setIsCollapsed: (collapsed) => set(() => ({ isCollapsed: collapsed })),
  toggleIsCollapsed: () => set((s) => ({ isCollapsed: !s.isCollapsed })),
  setIsCollapsedTrue: () => set(() => ({ isCollapsed: true })),
  setIsCollapsedFalse: () => set(() => ({ isCollapsed: false })),
}));

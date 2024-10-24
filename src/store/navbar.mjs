import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const navbarStore = (set, get) => ({
  open: false,
  openNavbar: () => set(() => ({ 
    open: true
  })),
  closeNavbar: () => set(() => ({ 
    open: false
  })),
  toggleNavbar: () => set((state) => ({
    open: !state.open
  }))
});

const useNavbarStore = create(persist(navbarStore, {
  name: 'navbar'
}));

export default useNavbarStore;
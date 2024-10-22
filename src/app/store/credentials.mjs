import { create } from 'zustand'

const useCredentialStore = create((set) => ({
  cookies: {},
  setCookies: (cookies = {}) => set(() => ({
    cookies
  }))
}));

export default useCredentialStore;
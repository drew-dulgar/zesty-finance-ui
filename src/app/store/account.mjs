import { create } from 'zustand'

const useAccountStore = create((set) => ({
  account: {
    id: null,
  },
  setAccount: (account) => set(state => ({
    ...state,
    account 
  }))
}));

export default useAccountStore;
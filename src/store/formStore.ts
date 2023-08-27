import { create } from 'zustand'

type useFormStoreProps = {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void
}
export const useFormStore = create<useFormStoreProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({
      isOpen: false
    })
  }))
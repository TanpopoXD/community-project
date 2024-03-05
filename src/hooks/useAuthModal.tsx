import { create } from 'zustand';

type ModalStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useAuthModal = create<ModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
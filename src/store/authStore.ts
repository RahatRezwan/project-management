import { IUser } from 'types/user.interface';
import { create } from 'zustand';

interface IAuthStore {
   user: IUser | null;
   authenticated: boolean;
   setUser: (user: IUser) => void;
   logout: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
   user: null,
   authenticated: false,
   setUser: (user: IUser) => set({ user, authenticated: true }),
   logout: () => set({ user: null, authenticated: false }),
}));

import { IUser } from 'types/user.interface';
import { create } from 'zustand';

const authStore = create((set) => ({
   user: null,
   authenticated: false,
   setUser: (user: IUser) => set({ user, authenticated: true }),
   logout: () => set({ user: null, authenticated: false }),
}));

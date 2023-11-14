import { defineStore } from 'pinia'

interface UserState {
    isRegistered: boolean;
    userData: {
        email: string | null;
        password: string | null;
    };
}

const initialState = {
    isRegistered: false,
    userData: { email: '', password: '' }
};

export const useUserStore = defineStore({
    id: 'user',
    state: (): UserState => initialState,
    actions: {
        register(userData: { email: string, password: string }) {
            this.userData = userData
            this.isRegistered = true
        },
        signOut() {
            Object.assign(this, initialState);
        }
    }
})
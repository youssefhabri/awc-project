import { GetterTree } from 'vuex';
import { AuthState } from '@/store/auth/types';
import { RootState } from '@/store/types';

export const getters: GetterTree<AuthState, RootState> = {
  user(state) {
    return state.user;
  },
};

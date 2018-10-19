import { MutationTree } from 'vuex';
import { AuthState } from '@/store/auth/types';

export const mutations: MutationTree<AuthState> = {
  SET_USER(state, { user }) {
    state.user = user;
  },
};

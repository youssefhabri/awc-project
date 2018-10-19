import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { AuthState } from '@/store/auth/types';
import { getters } from '@/store/auth/getters';
import { actions } from '@/store/auth/actions';
import { mutations } from '@/store/auth/mutations';

const namespaced: boolean = true;

const state: AuthState = {
  user: null,
};

export const auth: Module<AuthState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/store/types';
import Vue from 'vue';
import { auth } from '@/store/auth';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '0.1.0',
  },
  modules: {
    auth,
  },
};

export default new Vuex.Store<RootState>(store);

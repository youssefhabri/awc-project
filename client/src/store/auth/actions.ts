import { ActionTree } from 'vuex';
import { AuthState } from '@/store/auth/types';
import { RootState } from '@/store/types';

import ClientOAuth2 from 'client-oauth2';

const baseUrl = 'http://localhost:8000';

const client = new ClientOAuth2({
  clientId: process.env.VUE_APP_CLIENT_ID,
  clientSecret: process.env.VUE_APP_CLIENT_SECRET,
  accessTokenUri: baseUrl + '/oauth/token/',
  authorizationUri: baseUrl + '/oauth/authorize/',
  scopes: ['read', 'write'],
});

export const actions: ActionTree<AuthState, RootState> = {
  login({ commit }, { username, password }) {
    client.owner.getToken(username, password).then((response) => {
      commit('SET_USER', { user: response });
    });
  },
};

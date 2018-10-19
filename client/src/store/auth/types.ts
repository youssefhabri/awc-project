interface User {
  username: string;
  access_token: string;
  refresh_token: string;
}

export interface AuthState {
  user: any
}

export interface AuthState {
    isAuthenticated: boolean;
  }
  
  export type AuthAction = 
    | { type: 'LOGIN' }
    | { type: 'LOGOUT' };
  
  export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case 'LOGIN':
        return { isAuthenticated: true };
      case 'LOGOUT':
        return { isAuthenticated: false };
      default:
        throw new Error(`Unhandled action type: ${action}`);
    }
  };
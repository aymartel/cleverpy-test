import { useReducer, ReactNode, useEffect } from 'react';
import AuthContext from './AuthContext';
import { authReducer, AuthState } from './AuthReducer';

interface AuthProviderProps {
  children: ReactNode;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      dispatch({ type: 'LOGIN' });
    }
  }, []);

  const login = () => {
    dispatch({ type: 'LOGIN' });
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.setItem('isAuthenticated', 'false');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: state.isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
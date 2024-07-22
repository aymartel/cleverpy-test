import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { IAuthContextType } from '../interfaces/interfaces';

export const useAuth = (): IAuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth debe ser usado dentro de AuthProvider');
    }
    return context;
  };
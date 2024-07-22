import { createContext } from 'react';
import { IAuthContextType } from '../interfaces/interfaces';



const AuthContext = createContext<IAuthContextType | undefined>(undefined);



export default AuthContext;
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    return (
        <header className="navbar">
            <div className="flex items-center space-x-4">
                <img src="https://cleverpy.com/wp-content/uploads/2022/03/Cleverpy%C2%AE_Principal_5-scaled-e1666861095899-768x179.jpg.webp" alt="Logo" className="h-10" />

            </div>
            <div className="flex space-x-4 items-center">
           
                {isAuthenticated && <button className="login-button" onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"/>  Logout
                </button>}
            </div>
        </header>
    );
};

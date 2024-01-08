import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const loginFn = (e) => {
        const form = e.target.parentNode;
        const login = form[0];
        const password = form[1];
        
        if (login && password) {
            // TODO backend verification
            navigate('/dashboard');
        }
    }

    return(
        <div className="login-container">
            <div className="form">
                <h2>Admin</h2>
                <form>
                    <input type="text" placeholder="Login" />
                    <input type="password" placeholder="Hasło" />
                    <button type="button" onClick={(e) => loginFn(e)}>Zaloguj</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
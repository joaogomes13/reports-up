import { useNavigate } from 'react-router-dom';
import style from './Navbar.module.scss';

export default function Navbar() {

    const navigate = useNavigate();

    return(
        <nav className={style.container}>
            <h1 className={style.logo}>Universo Paralelo</h1>
            <ul className={style.menu}>
                <li onClick={() => navigate('/')}>Home</li>
            </ul>
        </nav>
    );
}
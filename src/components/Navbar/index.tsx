import style from './Navbar.module.scss';

export default function Navbar() {

    return(
        <nav className={style.container}>
            <h1 className={style.logo}>Universo Paralelo</h1>
            <ul className={style.menu}>
                <li>Home</li>
                <li>Voltar</li>
            </ul>
        </nav>
    );
}
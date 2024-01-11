import { Link } from 'react-router-dom'

import styles from './Navbar.module.scss'
import Logo from '../../assets/img/logo.png'

function Navbar() {
    return (
        <nav>
            <div className={styles.logoContainer}>
                <img src={Logo} alt='Get A Pet' />
                <h2>PetQuest</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">Adotar</Link>
                </li>
                <li>
                    <Link to="/login">Entrar</Link>
                </li>
                <li>
                    <Link to="/register">Cadastrar</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
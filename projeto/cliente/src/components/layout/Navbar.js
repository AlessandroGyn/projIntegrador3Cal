import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="Barbearia" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/servicos">Serviços</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/agendamento">Agendamento</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/midia">Mídia</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/QuemSomos">Quem Somos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar
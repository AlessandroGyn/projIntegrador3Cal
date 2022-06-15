import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/"><img src={logo} alt="Barbearia" /></NavLink>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#aa8719' : '#fff' })} >Home</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/servicos" style={({ isActive }) => ({ color: isActive ? '#aa8719' : '#fff' })} >Serviços</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/agendamento" style={({ isActive }) => ({ color: isActive ? '#aa8719' : '#fff' })} >Agendamento</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/midia" style={({ isActive }) => ({ color: isActive ? '#aa8719' : '#fff' })} > Mídia</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/QuemSomos" style={({ isActive }) => ({ color: isActive ? '#aa8719' : '#fff' })} >Quem Somos</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/contato" style={({ isActive }) => ({ color: isActive ? '#aa8719' : '#fff' })} >Contato</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
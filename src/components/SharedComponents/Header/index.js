import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="menu-nav">
            <ul className="menu-header">
                <li className="menu-item">
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="empresas">Empresas</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="faq">FAQ</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="contato" activeClassName="custom">Contato</NavLink>
                </li>
            </ul>
        </nav>
    )
}
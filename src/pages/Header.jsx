import { Link } from 'react-router-dom';
import logo from '../icone/logo.png';
import "../css/reset.css";
import "../css/pages/header.css";

function Header() {
    return(
        <div className="header">
            <img src={logo} alt='logo sportsee' className='logo'></img>
            <nav className="menu-header">
                <ul>
                    <li className='acceuil'><Link to="/">Accueil</Link></li>
                    <li className='profil'><Link to="/">Profil</Link></li>
                    <li className='reglage'><Link to="/">Réglage</Link></li>
                    <li className='communaute'><Link to="/">Communauté</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header
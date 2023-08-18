import { Link } from 'react-router-dom';
import meditationIcone from '../icone/meditation-icone.png'
import veloIcone from '../icone/velo-icone.png'
import natationIcone from '../icone/natation-icone.png'
import musculationIcone from '../icone/musculation-icone.png'
import "../css/reset.css";
import "../css/pages/sideBar.css";

function SideBar() {
    return(
        <div className="sideBar">
            <nav className="menu-sideBar">
                <ul>
                    <li className='meditation'>
                        <Link to="/">
                            <img src={meditationIcone} alt='meditation-icone'></img>
                        </Link>
                    </li>
                    <li className='natation'>
                        <Link to="/">
                            <img src={natationIcone} alt='natation-icone'></img>
                        </Link>
                    </li>
                    <li className='cyclisme'>
                        <Link to="/">
                            <img src={veloIcone} alt='velo-icone'></img>
                        </Link>
                    </li>
                    <li className='musculation'>
                        <Link to="/">
                            <img src={musculationIcone} alt='musculation-icone'></img>
                        </Link>
                    </li>
                </ul>
            </nav>
            <p className='texte-vertical'>Copiryght, SportSee 2020</p>
        </div>
    );
}

export default SideBar
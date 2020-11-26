import { Link } from "react-router-dom";


const Header = () => {
    return ( 
        <nav>
            <div>
                <Link to="/" id="logo">
                    <img src="./img/eis.png" alt=""/>
                    <h1>Kim´s Café Köln</h1>
                </Link>
            </div>

            <ul className="nav-bar">
                <li className="nav-item">
                    <Link to="/speisekarte" className="nav-link">Speisekarte</Link>
                </li>
                <li className="nav-item">
                    <Link to="/kontakt" className="nav-link">Kontakt</Link>
                </li>
                <li className="nav-item">
                    <Link to="/öffnungszeiten" className="nav-link">Öffnungszeiten</Link>
                </li>
                <li className="nav-item">
                    <Link to="/galerie" className="nav-link">Galerie</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Header;
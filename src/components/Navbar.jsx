//import de link
import {Link} from "react-router-dom";

function Navbar()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                {/*Nom de l'application*/}
                <Link className="navbar-brand" to="/"> GYMBox </Link>
                {/*btn pour version mobile*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*Menu*/}
                <div className="collapse navbar-collapse" id="Menu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {/*liste des abonnnes */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/members">Membres</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Add Member</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;

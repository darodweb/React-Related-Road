import { useState, useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';

const Header = ({ isLoggedIn, setIsLoggedIn, setToken }) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userToken, setUserToken] = useState("");


    // useEffect(() => {

    //     (function checkLoggedInStatus() {
    //         if (isLoggedIn !== null) {
    //             setUserToken(_currentToken);
    //             setIsLoggedIn(true);
    //         }

    //     })();

    // }, [isLoggedIn])


    const logOut = () => {
        setToken(window.localStorage.clear());
        setIsLoggedIn(false);
    }




    return (
        <>

            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid ">
                    <div className="navbar-brand fw-bold text-light"><Link to="/">LOGO</Link></div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-end me-5" id="navbarNav">
                        <ul className="navbar-nav">

                            {isLoggedIn ?
                                <li className="nav-link text-light  header-menu-links mx-2" aria-current="page"><span className="login" onClick={logOut}>Cerrar Sesion</span></li>
                                :
                                <li className="nav-link text-light  header-menu-links mx-2" aria-current="page"><Link to="/login"><span className="login">Log In</span></Link></li>
                            }

                            {isLoggedIn ?
                                <li className="nav-link active text-light header-menu-links mx-2" aria-current="page"><Link to="/contactos">Contactos</Link></li>
                                : null}

                            <li className="nav-link text-light mx-2 header-menu-links"><Link to="/companies">Compañias</Link></li>
                            {isLoggedIn ?
                                <li className="nav-link text-light mx-2 header-menu-links"><Link to="/usuarios">Usuarios</Link></li>
                                : null}

                            <li className="nav-link text-light mx-2 header-menu-links"><Link to="/region">Region/Ciudad</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Header;
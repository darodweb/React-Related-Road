import './Header.scss'

const Header = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid ">
                    <a className="navbar-brand fw-bold text-light" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-end me-5" id="navbarNav">
                        <div className="navbar-nav">
                            <a className="nav-link active text-light mx-2" aria-current="page" href="#">Contactos</a>
                            <a className="nav-link text-light mx-2" href="#">Compañias</a>
                            <a className="nav-link text-light mx-2" href="#">Usuarios</a>
                            <a className="nav-link text-light mx-2" href="#">Region/Ciudad</a>
                        </div>
                    </div>
                </div>
            </nav>



        </>
    );
}

export default Header;
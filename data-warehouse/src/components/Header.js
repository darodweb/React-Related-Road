

const Header = () => {
    return (
        <>
            <header className="fluid">
                <nav class="navbar navbar-expand-lg bg-primary">
                    <div class="container">
                        <a class="navbar-brand fw-bold text-light" href="#">LOGO</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse d-flex-end" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active text-light" aria-current="page" href="#">Contactos</a>
                                <a class="nav-link text-light" href="#">Compañias</a>
                                <a class="nav-link text-light" href="#">Usuarios</a>
                                <a class="nav-link text-light" href="#">Region/Ciudad</a>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>

        </>
    );
}

export default Header;
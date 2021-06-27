import './ExportContactBtn.scss';


const ExportContactBtn = () => {
    return (
        <>


            <div className="btn-group export-btn-container">
                <button type="button" className="btn btn-secondary dropdown-toggle export-btn" data-bs-toggle="dropdown" aria-expanded="false">
                    Exportar Contactos
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item color-primary" href="#">Exportar seleccionados</a></li>
                    <li><a className="dropdown-item color-primary" href="#">Todos los filtrados</a></li>
                </ul>
            </div>
        </>

    );
}

export default ExportContactBtn;
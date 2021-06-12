import './ExportContactBtn.scss';


const ExportContactBtn = () => {
    return (
        <>


            <div class="btn-group export-btn-container">
                <button type="button" class="btn btn-secondary dropdown-toggle export-btn" data-bs-toggle="dropdown" aria-expanded="false">
                    Exportar Contactos
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item color-primary" href="#">Exportar seleccionados</a></li>
                    <li><a class="dropdown-item color-primary" href="#">Todos los filtrados</a></li>
                </ul>
            </div>
        </>

    );
}

export default ExportContactBtn;
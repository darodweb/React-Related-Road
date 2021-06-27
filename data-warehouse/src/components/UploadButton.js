import './UploadButton.scss';

const UploadButton = () => {
    console.log('test');
    return (
        <>
            {/* 
            <input type="file" id="upload-btn" hidden />
            <label className="label-upload-btn" for="upload-btn">
                <i className="bi bi-cloud-upload-fill fs-5"></i>
            </label> */}


            <button type="button" className="btn upload-btn" data-bs-toggle="modal" data-bs-target="#uploadModal" >
                <i className="bi bi-cloud-upload-fill fs-5"></i>
            </button>

            <div className="modal fade" id="uploadModal" tabindex="-1" aria-labelledby="uploadModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content model-content-upload">
                        <div className="modal-body align-items-center text-center mt-4">
                            <img src="https://via.placeholder.com/105x94" ></img>
                            <p className="modal-text modal-text-upload">Selecciona el archivo de tu ordenador para importar tus contactos.</p>
                        </div>
                        <div className="modal-footer modal-footer-upload">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <input type="file" id="upload-btn" hidden />
                            <label className="btn btn-primary label-upload-btn" for="upload-btn">
                                Importar
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default UploadButton;
import './AddContact.scss';


const AddContact = ({ nombre, apellido, cargo, email, region, pais, ciudad,
    direccion, canal_de_contacto, cuenta_de_usuario, preferencias }) => {

    //List of regions, paises, and ciudad will be fetched from the API.


    //Pais and ciudad selects are disabled by default. Selecting Region enables Pais, selecting Pais, enables Ciudad.
    //Same with Canal de contacto.

    return (
        <>

            <button type="button" className="btn btn-primary add-contact-btn" data-bs-toggle="modal" data-bs-target="#add-contact">
                Agregar contacto
            </button>


            <div class="modal fade" id="add-contact" tabindex="-1" aria-labelledby="add-contact-label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-add-contact">
                    <div className="modal-content modal-content-wrapper">
                        <div className="modal-header modal-header-add-contact">
                            <h5 className="modal-title modal-title-add-contact fw-bold" id="add-contactLabel">Nuevo contacto</h5>
                            <button type="button" className="btn-close-white btn-close-add-contact" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {/* -----------------Main Contact form------------ */}
                            <div className="d-flex flex-row modal-contact-form">
                                <img src="https://via.placeholder.com/85x84" className="rounded-circle" />
                                <div>
                                    <label for="name" className="form-label d-block label-add-contact">Nombre</label>
                                    <input type="text" id="name" name="nombre" className="mx-2 p-1" />
                                </div>
                                <div>
                                    <label for="apellido" className="form-label d-block label-add-contact">Apellido</label>
                                    <input type="text" id="last-name" name="apellido" className="mx-2 p-1" />
                                </div>
                                <div>
                                    <label for="cargo" className="form-label d-block label-add-contact">Cargo</label>
                                    <input type="text" id="last-name" name="cargo" className="mx-2 p-1" />
                                </div>
                                <div>
                                    <label for="email" className="form-label d-block label-add-contact">Email</label>
                                    <input type="text" id="last-name" name="email" className="mx-2 p-1" />
                                </div>
                                <div>
                                    <label for="company" className="form-label d-block label-add-contact ">Compañia</label>
                                    <input type="text" id="last-name" name="company" className="mx-2 p-1" placeholder="Ingresar nombre de compañia" />
                                </div>
                            </div>

                            {/* -----------------Additional info contact form------------ */}
                            <div className=" additional-info-contact-form d-flex flex-column">
                                <div className="row mb-5">
                                    <div className="col-12 d-flex">

                                        {/* Datalist item 1 */}
                                        <div class="d-flex flex-column">
                                            <label for="region" class="form-label label-add-contact fw-bold">Region</label>
                                            <input class="form-control" list="datalistOptions" id="region" placeholder="Seleccionar region" />
                                            <datalist id="datalistOptions">
                                                <option value="Norteamerica" />
                                                <option value="Suramerica" />
                                                <option value="Asia" />
                                                <option value="Europa" />
                                            </datalist>
                                        </div>

                                        {/* Datalist item 2 */}
                                        <div class="d-flex flex-column ms-2">
                                            <label for="pais" class="form-label label-add-contact fw-bold">Pais</label>
                                            <input class="form-control" disabled list="datalistOptions" id="pais" placeholder="Seleccionar pais" />
                                            <datalist id="datalistOptions">
                                                <option value="USA" />
                                                <option value="Argentina" />
                                                <option value="Venezuela" />
                                                <option value="Colombia" />
                                            </datalist>
                                        </div>

                                        {/* Datalist item 3 */}
                                        <div class="d-flex flex-column ms-2">
                                            <label for="ciudad" class="form-label label-add-contact fw-bold">Ciudad</label>
                                            <input class="form-control" disabled list="datalistOptions" id="ciudad" placeholder="Seleccionar ciudad" />
                                            <datalist id="datalistOptions">
                                                <option value="La Plata" />
                                                <option value="Buenos Aires" />
                                                <option value="Barquisimeto" />
                                                <option value="Medellin" />
                                            </datalist>
                                        </div>

                                        {/* Input item 4 */}
                                        <div className="btn-group seleccionar-direccion-container d-flex flex-column mx-2">
                                            <label className="mb-2 label-add-contact fw-bold" for="direccion">Direccion</label>
                                            <input type="text" name="direccion" class="form-control" id="direccion" placeholder="Ingresa una dirección" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 d-flex">

                                        {/* Datalist item 5 - Second row*/}
                                        <div class="d-flex flex-column ms-2">
                                            <label for="canal-de-contacto" class="form-label label-add-contact fw-bold">Canal de contacto</label>
                                            <input class="form-control" disabled list="datalistOptions" id="canal-de-contacto" placeholder="Seleccionar canal" />
                                            <datalist id="datalistOptions">
                                                <option value="Email" />
                                                <option value="Telefono" />
                                                <option value="Facebook" />
                                                <option value="Twitter" />
                                            </datalist>
                                        </div>

                                        {/* Datalist item 6 - Second row*/}
                                        <div class="d-flex flex-column ms-2">
                                            <label for="preferencias" class="form-label label-add-contact fw-bold">Preferencias</label>
                                            <input class="form-control" disabled list="datalistOptions" id="preferencias" placeholder="Sin preferencia" />
                                            <datalist id="datalistOptions">
                                                <option value="Email" />
                                                <option value="Telefono" />
                                                <option value="Facebook" />
                                                <option value="Twitter" />
                                            </datalist>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary">Guardar contacto</button>
                        </div>
                    </div>
                </div>
            </div>

        </>);
}

export default AddContact;
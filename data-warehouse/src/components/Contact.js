import './Contact.scss';

const Contact = () => {


    return (

        <>
            <tr className="contact-row">
                <th scope="row">
                    <input className="form-check-input mt-3" type="checkbox" value="" aria-label="Checkbox for following text input" />
                </th>
                <td className="d-flex contact-column" >
                    <img src="https://via.placeholder.com/24x24" className="rounded-circle me-3" alt="" />
                    <div className="d-flex flex-column justify-content-start">
                        <p className="contact-name">Camila Soledad Pantó</p>
                        <small className="contact-email">camilapanto123@gmail.com</small>
                    </div>
                </td>
                <td className="pais-region-column" >
                    <div className="d-flex flex-column justify-content-start">
                        <p className="contact-pais-name">Argentina</p>
                        <small className="contact-region">Latam</small>
                    </div>
                </td>
                <td className="company-column" >
                    <div className="d-flex flex-column justify-content-start">
                        <p className="company">Ecomm Experts</p>
                    </div>
                </td>
                <td className="cargo-column" >
                    <div className="d-flex flex-column justify-content-start">
                        <p className="cargo">UX Designer</p>
                    </div>
                </td>
                <td className="canal-preferido-column" >
                    <div className="d-flex justify-content-start">
                        <div className="x canal-preferido-container justify-content-center">
                            <p className="canal-preferido-nombre">Whatsapp</p>
                        </div>
                        <div className="d-flex canal-preferido-container justify-content-center ms-2">
                            <p className="canal-preferido-nombre ">Email</p>
                        </div>
                    </div>
                </td>
                <td className="interes-column" >
                    <div className="progress mt-1">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </td>
                <td className="acciones-column text-center" >
                    <input type="button" id="acciones-btn" hidden />
                    <label className="btn acciones-btn" for="acciones-btn">
                        <i className="bi bi-three-dots"></i>
                    </label>
                </td>
            </tr>

            <tr className="contact-row">
                <th scope="row">
                    <input className="form-check-input mt-3" type="checkbox" value="" aria-label="Checkbox for following text input" />
                </th>
                <td className="d-flex contact-column" >
                    <img src="https://via.placeholder.com/24x24" className="rounded-circle me-3" alt="" />
                    <div className="d-flex flex-column justify-content-start">
                        <p className="contact-name">Camila Soledad Pantó</p>
                        <small className="contact-email">camilapanto123@gmail.com</small>
                    </div>
                </td>
                <td className="pais-region-column" >
                    <div className="d-flex flex-column justify-content-start">
                        <p className="contact-pais-name">Argentina</p>
                        <small className="contact-region">Latam</small>
                    </div>
                </td>
                <td className="company-column" >
                    <div className="d-flex flex-column justify-content-start">
                        <p className="company">Ecomm Experts</p>
                    </div>
                </td>
                <td className="cargo-column" >
                    <div className="d-flex flex-column justify-content-start">
                        <p className="cargo">UX Designer</p>
                    </div>
                </td>
                <td className="canal-preferido-column" >
                    <div className="d-flex justify-content-start">
                        <div className="x canal-preferido-container justify-content-center">
                            <p className="canal-preferido-nombre">Whatsapp</p>
                        </div>
                        <div className="d-flex canal-preferido-container justify-content-center ms-2">
                            <p className="canal-preferido-nombre ">Email</p>
                        </div>
                    </div>
                </td>
                <td className="interes-column" >
                    <div className="progress mt-1">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </td>
                <td className="acciones-column text-center" >
                    <input type="button" id="acciones-btn" hidden />
                    <label className="btn acciones-btn" for="acciones-btn">
                        <i className="bi bi-three-dots"></i>
                    </label>
                </td>
            </tr>
        </>
    );
}

export default Contact;
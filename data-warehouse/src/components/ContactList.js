import Contact from './Contact';
import './ContactList.scss';

const ContactList = () => {
    return (

        <>

            <section className="row d-flex container p-0">
                <table className="table table-container table-borderless .table-hover">
                    <thead className="border-bottom mt-4">
                        <tr>
                            <th scope="col">
                                <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            </th>
                            <th scope="col">Contact</th>
                            <th scope="col">Pais/Region</th>
                            <th scope="col">Compañia</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Canal Preferido</th>
                            <th scope="col">Interes</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Contact />
                    </tbody>
                </table>
            </section>

        </>
    );
}

export default ContactList;
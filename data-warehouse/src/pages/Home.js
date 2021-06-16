import './Home.scss';
import ExportContactBtn from '../components/ExportContactBtn';
import SearchBar from '../components/SearchBar';
import UploadButton from '../components/UploadButton';
import AddContact from '../components/AddContact';
import ContactContainer from '../components/ContactContainer';
import Login from './Login';

const Home = () => {

    return (
        <>

            <section className="row">
                <div class="col-lg-9">
                    <SearchBar />
                </div>

                {/* <div className="col-lg-2 d-flex ">

                </div> */}
                <div className="col-lg-3 d-flex justify-content-end" >
                    <div className="mx-1">
                        <UploadButton />
                    </div>
                    <div className="mx-1">
                        <ExportContactBtn />
                    </div>
                    <div className="mx-1">
                        <AddContact
                            nombre={'nombre'}
                            apellido={'apellido'}
                            cargo={'cargo'}
                            email={'company'}
                            region={'region'}
                            pais={'pais'}
                            ciudad={'ciudad'}
                            direccion={'company'}
                            canal_de_contacto={'canal_de_contacto'}
                            cuenta_de_usuario={'cuenta_de_usuario'}
                            preferencias={'preferencias'}
                        />
                    </div>
                </div>
            </section>

            {/* ---------------Contact list container------------------- */}
            <section className="row container contact-list-container">
                <div className="col-12">
                    <ContactContainer />
                </div>
            </section>

        </>

    );
}

export default Home;
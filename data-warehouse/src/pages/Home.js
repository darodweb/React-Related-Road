import { useState, useEffect } from 'react';
import './Home.scss';
import ExportContactBtn from '../components/ExportContactBtn';
import SearchBar from '../components/SearchBar';
import UploadButton from '../components/UploadButton';
import AddContact from '../components/AddContact';
import ContactContainer from '../components/ContactContainer';
import Header from '../components/Header';
import Login from './Login';

const Home = ({ isLoggedIn, }) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [token, setToken] = useState("");

    // //Checks if user is logged in

    window.onload = (function () {
        if (!window.location.hash) {
            window.location = window.location + '#in';
            window.location.reload();
        }
    })()



    return (
        <>

            {/* <Header
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setToken={setToken}
            /> */}

            <section className="row">
                <div className="col-lg-9">
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
                        {isLoggedIn ?
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
                            : null
                        }

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
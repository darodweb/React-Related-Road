import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import SearchBar from '../components/SearchBar';
import SecondaryButton from '../components/SecondaryButton';
import UploadButton from '../components/UploadButton';

const Home = () => {

    return (
        <>
            <Header />
            <div className="row">
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
                        <SecondaryButton text={"Exportar Contactos"} />
                    </div>
                    <div className="mx-1">
                        <PrimaryButton text={"Agregar Contacto"} />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;
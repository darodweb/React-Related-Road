import './Region.scss';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';

const Region = () => {

    //Query regiones, paises, ciudades endpoints, save to state, and map to DOM.

    return (
        <>
            <section className=" region-container container">
                <div className="row d-flex justify-content-end">
                    <div class="col-1 me-5 add-region-btn-container">
                        <button className="btn btn-primary " >Agregar region</button>
                    </div>
                </div>

                {/* Regions */}
                <div className="row d-flex justify-content-between mt-3">
                    <div className="col-1">
                        <h4 className="region-title fw-bold">Sudamérica</h4>
                    </div>
                    <div className="col-1 me-5 add-country-btn-container">
                        <button className="btn btn-primary" >Agregar pais</button>
                    </div>
                </div>

                {/* Paises that are part of the region */}
                <div className="row region-paises d-flex justify-content-between mt-3">
                    <div className="col-4 d-flex region-pais-title-container">
                        <h5 className="region-pais">Argentina</h5>
                        <EditButton />
                        <DeleteButton />
                    </div>
                    <div class="col-1 me-5 add-city-btn-container">
                        <button className="btn btn-primary" >Agregar ciudad</button>
                    </div>
                </div>

                {/* Ciudades that are part of the region */}
                <div className="row region-ciudades d-flex flex-column  mt-3">
                    <div className="col d-flex region-ciudad-title-container justify-content-between">
                        <p className="region-pais">Buenos Aires</p>
                        <div>
                            <EditButton />
                            <DeleteButton />
                        </div>
                    </div>
                </div>
                <div className="row region-ciudades d-flex flex-column mt-3">
                    <div className="col d-flex region-ciudad-title-container justify-content-between">
                        <p className="region-pais">Cordoba</p>
                        <div>
                            <EditButton />
                            <DeleteButton />
                        </div>
                    </div>
                </div>
                <div className="row region-ciudades d-flex flex-column mt-3">
                    <div className="col d-flex region-ciudad-title-container justify-content-between">
                        <p className="region-pais">Santa Fe</p>
                        <div>
                            <EditButton />
                            <DeleteButton />
                        </div>
                    </div>
                </div>


                <div className="row d-flex justify-content-between mt-3">
                    <div className="col-1">
                        <h4 className="region-title fw-bold">Norteamerica</h4>
                    </div>
                    <div className="col-1 me-5 add-country-btn-container">
                        <button className="btn btn-primary">Agregar pais</button>
                    </div>
                </div>

                {/* Paises that are part of the region */}
                <div className="row region-paises d-flex justify-content-between mt-3">
                    <div className="col-4 d-flex region-pais-title-container">
                        <p className="region-pais">Estados Unidos</p>
                        <EditButton />
                        <DeleteButton />
                    </div>
                    <div class="col-1 me-5 add-city-btn-container">
                        <button className="btn btn-primary">Agregar ciudad</button>
                    </div>
                </div>
                {/* Ciudades that are part of the region */}
                <div className="row region-ciudades d-flex flex-column mt-3">
                    <div className="col d-flex region-ciudad-title-container justify-content-between">
                        <p className="region-pais">Miami</p>
                        <div>
                            <EditButton />
                            <DeleteButton />
                        </div>
                    </div>
                </div>

                <div className="row region-ciudades d-flex flex-column mt-3">
                    <div className="col d-flex region-ciudad-title-container justify-content-between">
                        <p className="region-pais">Fargo</p>
                        <div>
                            <EditButton />
                            <DeleteButton />
                        </div>
                    </div>
                </div>



            </section>

        </>

    );
}

export default Region;
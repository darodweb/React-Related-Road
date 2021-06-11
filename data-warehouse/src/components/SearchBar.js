import './SearchBar.scss';
import { useState, useEffect } from 'react';


const SearchBar = () => {
    const [countries, setCountries] = useState([]);

    //Function to retrieve list of countries by hitting the /paises endpoint and map results

    // useLayoutEffect(() => {


    //     return () => {
    //         cleanup
    //     };
    // }, [input])


    return (

        <>

            <div className="row search-wrapper mt-4">
                <div className="col d-flex align-items-center flex-column">
                    <div className="w-100">
                        <label for="exampleDataList" class="form-label fw-bold">Contactos</label>
                    </div>
                    <input className="form-control  datalist-form" list="datalistOptions" id="exampleDataList" />
                    <datalist id="datalistOptions">
                        <option value="Estados Unidos" />
                        <option value="Mexico" />
                        <option value="Venezuela" />
                        <option value="Argentina" />
                        <option value="Colombia" />
                        <option value="Canada" />
                    </datalist>
                </div>
                <div className="col-2 d-flex align-items-center search-wrapper ">
                    <div class="">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-search text-primary fw-bolder"></i></button>
                    </div>

                </div>

            </div>

        </>
    );
}

export default SearchBar;
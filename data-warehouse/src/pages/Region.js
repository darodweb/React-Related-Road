import './Region.scss';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    GET_REGIONS_URL, GET_PAISES_URL, GET_CIUDADES_URL,
    DELETE_REGIONS_URL, POST_REGION_URL, DELETE_PAIS_URL, POST_PAIS_URL,
    DELETE_CIUDAD_URL, POST_CIUDAD_URL,
} from '../constants/constants';
import Loader from '../components/Loader';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import TreeData from '../components/TreeData';


const Region = () => {
    const [region, setRegion] = useState([]);
    const [pais, setPaises] = useState([]);
    const [ciudad, setCiudad] = useState([]);
    const [currentToken, setCurrentToken] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [nuevaRegion, setNuevaRegion] = useState("");
    const [nuevoPais, setNuevoPais] = useState("");
    const [nuevaCiudad, setNuevaCiudad] = useState("");
    const [error, setError] = useState(false);

    // const [treeData, setTreeData] = useState(
    //     [
    //         {
    //             title: 'Region', expanded: true, children: [
    //                 {
    //                     title: "Norteamerica", expanded: true, children: [
    //                         {
    //                             title: "USA", expanded: true, children: [
    //                                 { title: "Miami" }, { title: "Fargo" }]
    //                         },]
    //                 },
    //                 {
    //                     title: "Suramerica", expanded: true, children: [
    //                         {
    //                             title: "Argentina", expanded: true, children: [
    //                                 { title: "La Plata" }, { title: "Cordoba" }]
    //                         },]
    //                 },
    //             ],
    //         }
    //     ]
    // );

    //QUERY REGION, PAIS AND CIUDAD API AND STORE IN STATE.

    useEffect(() => {
        setCurrentToken(window.localStorage.getItem('token'));

        try {
            (async function getRegiones() {
                const response = await axios({
                    method: "GET", url: GET_REGIONS_URL,
                    headers: { "Authorization": `${currentToken}` }
                })
                let regiones = await response.data;
                setIsLoading(false);
                setRegion(regiones);
                console.log(region);
            })();

        } catch (err) {
            console.error(err);
        };

        try {

            (async function getPaises() {
                const response = await axios({
                    method: "GET", url: GET_PAISES_URL,
                    headers: { "Authorization": `${currentToken}` }
                })
                let paises = await response.data;
                setPaises(paises);
                console.log(pais);
                setIsLoading(false);
            })();


        } catch (err) {
            console.error(err);
        };

        try {

            (async function getCiudades() {
                const response = await axios({
                    method: "GET", url: GET_CIUDADES_URL,
                    headers: { "Authorization": `${currentToken}` }
                })
                let ciudades = await response.data;
                setCiudad(ciudades);
                console.log(ciudad);
                setIsLoading(false);
            })();


        } catch (err) {
            console.error(err);
        };

    }, [])


    //----------------REGION LOGIC---------------------------------------------------------------------->
    // const { nombre } = nuevaRegion;

    const handleChangeRegion = (e) => {
        setNuevaRegion({
            ...nuevaRegion, [e.target.name]: e.target.value
        });
    }


    async function submitRegion(e) {
        e.preventDefault();
        //Validate
        // if (nombre.trim() === "") {
        //     setError(true);
        //     return;
        // }

        // To remove alert
        setError(false);

        // Function to create region

        await axios.post(POST_REGION_URL, { nombre: nuevaRegion.region })
            .then(res => {
                console.log(res.data);
            })

        setNuevaRegion("");

        // (function retrieveRegions() {
        //     window.location.reload();
        //     return false;
        // })()

    }


    // Function to delete region by ID
    async function handleDeleteRegion(id) {

        try {

            const filteredRegion = region.filter(region => region._id !== id);
            setRegion(filteredRegion);
            await axios({
                method: "DELETE", url: `${DELETE_REGIONS_URL}${id}`,
                headers: { "Authorization": `${currentToken}` }
            })

            setIsLoading(false);


        } catch (err) {
            console.error(err);
        };

    }

    //---------END OF REGION LOGIC---------------------------------------------------------------------->


    //---------PAIS LOGIC------------------------------------------------------------------------------->

    const handleChangePais = (e) => {
        setNuevoPais({
            ...nuevoPais, [e.target.name]: e.target.value
        });
    }


    async function submitPais(e) {
        e.preventDefault();
        //Validate
        // if (nombre.trim() === "") {
        //     setError(true);
        //     return;
        // }

        // To remove alert
        setError(false);

        // Function to create pais

        await axios.post(POST_PAIS_URL, { nombre: nuevoPais.nombre })
            .then(res => {
                console.log(res.data);
            })

        setNuevoPais("");

        // (function retrievePais() {
        //     window.location.reload();
        //     return false;
        // })()

    }


    // Function to delete pais by ID
    async function handleDeletePais(id) {

        try {

            const filteredPais = pais.filter(pais => pais._id !== id);
            setPaises(filteredPais);
            await axios({
                method: "DELETE", url: `${DELETE_PAIS_URL}${id}`,
                headers: { "Authorization": `${currentToken}` }
            })

            setIsLoading(false);


        } catch (err) {
            console.error(err);
        };

    }
    //---------END OF PAIS LOGIC---------------------------------------------------------------------->


    //---------CIUDAD LOGIC------------------------------------------------------------------------------->

    const handleChangeCiudad = (e) => {
        setNuevaCiudad({
            ...nuevaCiudad, [e.target.name]: e.target.value
        });
    }


    async function submitCiudad(e) {
        e.preventDefault();
        //Validate
        // if (nombre.trim() === "") {
        //     setError(true);
        //     return;
        // }

        // To remove alert
        setError(false);

        // Function to create ciudad

        await axios.post(POST_CIUDAD_URL, { nombre: nuevaCiudad.nombre })
            .then(res => {
                console.log(res.data);
            })

        setNuevaCiudad("");

        (function retrieveCiudad() {
            window.location.reload();
            return false;
        })()

    }


    // Function to delete ciudad by ID
    async function handleDeleteCiudad(id) {

        try {

            const filteredCiudad = ciudad.filter(ciudad => ciudad._id !== id);
            setCiudad(filteredCiudad);
            await axios({
                method: "DELETE", url: `${DELETE_CIUDAD_URL}${id}`,
                headers: { "Authorization": `${currentToken}` }
            })

            setIsLoading(false);


        } catch (err) {
            console.error(err);
        };

    }

    //--------- END OF CIUDAD LOGIC---------------------------------------------------------------------->




    return (
        <>

            <section className=" region-container container">


                <div className="row d-flex justify-content-between mt-3" key={region._id}>
                    <div className="col-1">
                        <h4 className="region-title fw-bold" >{region.nombre}</h4>
                    </div>
                    <div className="col-1 me-5 add-country-btn-container">
                        {/* <button className="btn btn-primary" onClick={() => refreshList()}>Agregar pais</button> */}
                    </div>
                </div>

                <div className="text-center">
                    <h4>Regiones</h4>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-6 ms-5 add-region-btn-container d-flex justify-content-end">
                        <form onSubmit={submitRegion}>
                            <input type="text" name="region" className="form-control" id="region-nombre" onChange={handleChangeRegion} />
                            <button type="submit" className="btn btn-primary ms-2" >Agregar region</button>
                        </form>

                    </div>
                </div>

                {(region.length > 0) ? region.map((region) => {

                    return (
                        <div className="row region-paises d-flex justify-content-between mt-3" key={region._id}>
                            <div className="col-4 d-flex region-pais-title-container">
                                <h5 className="region-pais">{region.nombre}</h5>
                                <div className="d-flex justify-between ">
                                    <button className="btn btn-warning mx-4" >Editar</button>
                                    <button className="btn btn-danger mx-4" onClick={() => handleDeleteRegion(region._id)} >Borrar</button>
                                </div>
                            </div>
                            {/* <div className="col-1 me-5 add-city-btn-container">
                                <button className="btn btn-primary" onClick={() => refreshList()} >Agregar ciudad</button>
                            </div> */}
                        </div>
                    )
                }) : null}


                <div className="text-center">
                    <h4>Paises</h4>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-6 ms-5 add-region-btn-container d-flex justify-content-end">
                        <form onSubmit={submitPais}>
                            <input type="text" name="pais" className="form-control" id="pais-nombre" onChange={handleChangePais} />
                            <button type="submit" className="btn btn-primary ms-2" >Agregar pais</button>
                        </form>

                    </div>
                </div>

                {(pais.length > 0) ? pais.map((pais) => {

                    return (
                        <div className="row region-paises d-flex justify-content-between mt-3" key={pais._id}>
                            <div className="col-4 d-flex region-pais-title-container">
                                <h5 className="region-pais">{pais.nombre}</h5>
                                <div className="d-flex justify-between ">
                                    <button className="btn btn-warning mx-4" >Editar</button>
                                    <button className="btn btn-danger mx-4" onClick={() => handleDeletePais(pais._id)} >Borrar</button>
                                </div>
                            </div>
                            {/* <div className="col-1 me-5 add-city-btn-container">
                                <button className="btn btn-primary" onClick={() => refreshList()} >Agregar ciudad</button>
                            </div> */}
                        </div>
                    )
                }) : null}


                <div className="text-center">
                    <h4>Ciudades</h4>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-6 ms-5 add-region-btn-container d-flex justify-content-end">
                        <form onSubmit={submitCiudad}>
                            <input type="text" name="ciudad" className="form-control" id="ciudad-nombre" onChange={handleChangeCiudad} />
                            <button type="submit" className="btn btn-primary ms-2" >Agregar ciudad</button>
                        </form>

                    </div>
                </div>

                {(ciudad.length > 0) ? ciudad.map((ciudad) => {

                    return (
                        <div className="row region-paises d-flex justify-content-between mt-3" key={ciudad._id}>
                            <div className="col-4 d-flex region-pais-title-container">
                                <h5 className="region-pais">{ciudad.ciudad}</h5>
                                <div className="d-flex justify-between ">
                                    <button className="btn btn-warning mx-4" >Editar</button>
                                    <button className="btn btn-danger mx-4" onClick={() => handleDeleteCiudad(ciudad._id)} >Borrar</button>
                                </div>
                            </div>
                            {/* <div className="col-1 me-5 add-city-btn-container">
                                <button className="btn btn-primary" onClick={() => refreshList()} >Agregar ciudad</button>
                            </div> */}
                        </div>
                    )
                }) : null}

            </section>

        </>

    );
}

export default Region;
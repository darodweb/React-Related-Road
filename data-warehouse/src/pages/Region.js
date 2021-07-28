import './Region.scss';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { GET_REGIONS_URL, GET_PAISES_URL, GET_CIUDADES_URL } from '../constants/constants';
import Loader from '../components/Loader';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

const Region = () => {
    const [region, setRegion] = useState([]);
    const [pais, setPaises] = useState([]);
    const [ciudad, setCiudad] = useState([]);
    const [currentToken, setCurrentToken] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [newData, setNewData] = useState(false);
    const [treeData, setTreeData] = useState(
        [
            {
                title: 'Region', expanded: true, children: [
                    {
                        title: "Norteamerica", expanded: true, children: [
                            {
                                title: "USA", expanded: true, children: [
                                    { title: "Miami" }, { title: "Fargo" }]
                            },]
                    },
                    {
                        title: "Suramerica", expanded: true, children: [
                            {
                                title: "Argentina", expanded: true, children: [
                                    { title: "La Plata" }, { title: "Cordoba" }]
                            },]
                    },
                ],
            }
        ]
    );

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



    const refreshList = () => {
        // window.location.reload();
        // return false;
    }

    function updateTree(treeData) {
        setTreeData({ treeData })
    }


    return (
        <>


            <section className=" region-container container">
                <div className="row d-flex justify-content-end">
                    <div className="col-1 me-5 add-region-btn-container">
                        <button className="btn btn-primary" onClick={() => refreshList()} >Agregar region</button>
                    </div>
                </div>
                <div style={{ height: "100vh" }}>
                    <SortableTree
                        treeData={treeData}
                        onChange={() => updateTree(treeData)}
                    />
                </div>

                {/* {(region.length > 0) ?
                    region.map((region) => {
                        return (
                            <>
                                <div className="row d-flex justify-content-between mt-3" key={region._id}>
                                    <div className="col-1">
                                        <h4 className="region-title fw-bold" >{region.nombre}</h4>
                                    </div>
                                    <div className="col-1 me-5 add-country-btn-container">
                                        <button className="btn btn-primary" onClick={() => refreshList()} >Agregar pais</button>
                                    </div>
                                </div>

                               
                                {pais.length > 0 && pais.map((pais, id) => {
                                    
                                    return (
                                        <>
                                            <div className="row region-paises d-flex justify-content-between mt-3" key={id._id}>
                                                <div className="col-4 d-flex region-pais-title-container">

                                                    <h5 className="region-pais">{pais.nombre}</h5>
                                                    <EditButton />
                                                    <DeleteButton />
                                                </div>
                                                <div className="col-1 me-5 add-city-btn-container">
                                                    <button className="btn btn-primary" onClick={() => refreshList()} >Agregar ciudad</button>
                                                </div>
                                            </div>
                                        </>)
                                })}


                                
                                {(ciudad.length > 0) ?
                                    ciudad.map(((ciudad, id) => {
                                        
                                        return (

                                            <>
                                                <div className="row region-ciudades d-flex flex-column mt-3" key={id._id}>
                                                    <div className="col d-flex region-ciudad-title-container justify-content-between">
                                                        <p className="region-pais">{ciudad.ciudad}</p>
                                                        <div>
                                                            <EditButton />
                                                            <DeleteButton />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>)

                                    })) : null
                                }


                            </>)
                    }) : null} */}


            </section>

        </>

    );
}

export default Region;
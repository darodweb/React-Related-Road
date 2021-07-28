import axios from 'axios';
import { useState, useEffect } from 'react';
import { GET_REGIONS_URL, GET_PAISES_URL, GET_CIUDADES_URL } from '../constants/constants';



const TreeData = () => {
    const [region, setRegion] = useState([]);
    const [pais, setPaises] = useState([]);
    const [ciudad, setCiudad] = useState([]);
    const [currentToken, setCurrentToken] = useState();
    const [isLoading, setIsLoading] = useState(true);

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
                setRegion({ ...region, regiones });
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
                setPaises({ ...pais, paises });
                console.log(paises);
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
                setCiudad({ ...ciudad, ciudades });
                console.log(ciudades);
                setIsLoading(false);
            })();


        } catch (err) {
            console.error(err);
        };

    }, [])


    //Get list of regions
    // Get list of 


    //JSON OBJECT TO BUILD THE TREE
    //

    const data = [
        {
            key: region,
            id: _id,
            node: [
                {
                    key: pais,
                    id: _id,
                    node: [
                        {
                            key: ciudad,
                            id: _id,
                        }
                    ]
                }
            ]
        }
    ]

    return (
        <>



        </>

    );
}

export default TreeData;
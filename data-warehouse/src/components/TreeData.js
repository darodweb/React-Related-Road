import axios from 'axios';
import { useState, useEffect } from 'react';
import { GET_REGIONS_URL, GET_PAISES_URL, GET_CIUDADES_URL } from '../constants/constants';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';


const TreeData = () => {
    const [region, setRegion] = useState([]);
    const [pais, setPaises] = useState([]);
    const [ciudad, setCiudad] = useState([]);
    const [currentToken, setCurrentToken] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [treeData, setTreeData] = useState({

    })


    useEffect(() => {

        setCurrentToken(window.localStorage.getItem('token'));

        // Get regiones
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


        // Get paises

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


        //Get ciudades

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








    //JSON OBJECT TO BUILD THE TREE
    //

    const data = [
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

    // const data = [
    //     {
    //         title: 'Region', expanded: true, children: [
    //             {
    //                 title: region, expanded: true, children: [
    //                     {
    //                         title: pais, expanded: true, children: [
    //                             { title: ciudad }, { title: ciudad }]
    //                     },]
    //             },
    //             {
    //                 title: region, expanded: true, children: [
    //                     {
    //                         title: pais, expanded: true, children: [
    //                             { title: ciudad }, { title: ciudad }]
    //                     },]
    //             },
    //         ],
    //     }
    // ]

    console.log(data)

    function updateTree(treeData) {
        setTreeData({ treeData })
    }


    return (
        <>

            <div div style={{ height: "100vh" }}>
                <SortableTree
                    treeData={data}
                    onChange={() => updateTree(data)}
                />
            </div>

        </>

    );
}

export default TreeData;
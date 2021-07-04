import './Usuarios.scss';
import { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v4';
import axios from 'axios';
import { POST_USUARIO_URL } from '../constants/constants';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import CrearUsuario from './CrearUsuario';
import { GET_USUARIO_URL } from '../constants/constants';

const Usuarios = ({ token }) => {
    const [ID, setID] = useState("");
    const { usuario, setUsuario } = useState({
        nombre: "",
        apellido: "",
        email: "",
        contrasena: ""
    })

    //Get current ID (email) from localstorage
    useEffect(() => {
        (function getID() {
            let _currentID = localStorage.getItem('ID');
            setID(_currentID);
        })();

        // Query and display user credential
        (async function getUserInfo() {

            try {
                const response = await axios.get(`${GET_USUARIO_URL}` + ID, {
                    auth: {
                        token: token
                    }
                })
                console.log(response);
            } catch (err) {
                console.error(err);
            }


        })()




    }, [])








    return (

        <>

            <CrearUsuario />

        </>

    );
}

export default Usuarios;
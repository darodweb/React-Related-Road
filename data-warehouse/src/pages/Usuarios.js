import './Usuarios.scss';
import { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v4';
import axios from 'axios';
import { POST_USUARIO_URL } from '../constants/constants';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import CrearUsuario from './CrearUsuario';
import { GET_USUARIOS_URL } from '../constants/constants';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [currentToken, setCurrentToken] = useState("");


    // const { nombre, apellido, email, perfil, contrasena } = usuario;

    useEffect(() => {

        //Get current token and email(ID) from local storage
        (function getToken() {
            let token = localStorage.getItem("token");
            console.log(token);
            setCurrentToken(token);
        })();

        // Query API and display user credential

        try {

            async function getUsers() {
                const response = await axios({
                    method: "GET", url: GET_USUARIOS_URL,
                    headers: { "Authorization": `${currentToken}` }
                })
                let users = response.data;
                setUsuarios(...usuarios, users);
                console.log(usuarios);
            }
            getUsers();

        } catch (err) {
            console.error(err);
        };

    }, [currentToken])



    return (

        <>

            <div className="container">

                {(usuarios.length > 0) ?
                    usuarios.map((usuario) => (
                        <div className="" key={usuario._id}>
                            <p>{usuario.nombre}, {usuario.apellido} </p>
                            <p>{usuario.email}</p>
                            <p>{usuario.perfil}</p>
                        </div>
                    )) : null}
            </div>

        </>

    );
}

export default Usuarios;
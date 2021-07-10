import './Usuarios.scss';
import { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v4';
import axios from 'axios';
import { POST_USUARIO_URL } from '../constants/constants';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import CrearUsuario from './CrearUsuario';
import { GET_USUARIOS_URL, DELETE_USUARIOS_URL, PATCH_USUARIO_URL } from '../constants/constants';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';
import AddButton from '../components/AddButton';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import EditUsuario from './EditUsuario';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [currentToken, setCurrentToken] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [editUsuario, setEditUsuario] = useState(null);

    let history = useHistory();

    useEffect(() => {

        //Get current token and email(ID) from local storage
        (function getToken() {
            let token = localStorage.getItem("token");
            console.log(token);
            setCurrentToken(token);
        })();

        // Query API and display usuarios
        try {

            async function getUsers() {
                const response = await axios({
                    method: "GET", url: GET_USUARIOS_URL,
                    headers: { "Authorization": `${currentToken}` }
                })
                let users = response.data;
                setUsuarios(...usuarios, users);
                console.log(usuarios);
                setLoading(false);
            }
            getUsers();

        } catch (err) {
            console.error(err);
        };

    }, [currentToken])

    // Function to delete usuario by ID
    async function handleDelete(id) {

        try {

            const newUsuarios = usuarios.filter(usuario => usuario._id !== id);
            setUsuarios(newUsuarios);
            await axios({
                method: "DELETE", url: `${DELETE_USUARIOS_URL}${id}`,
                headers: { "Authorization": `${currentToken}` }
            })

            setLoading(false);


        } catch (err) {
            console.error(err);
        };

    }

    // FUNCTION TO EDIT EXISTING USERS
    function handleEdit(id) {

        try {

            const userToEdit = usuarios.find(usuario => usuario._id === id);
            setEditUsuario(userToEdit);
            console.log(editUsuario);
            // await axios({
            //     method: "PATCH", url: `${DELETE_USUARIOS_URL}${id}`,
            //     headers: { "Authorization": `${currentToken}` }
            // })

            // if (editUsuario !== null) {
            //     history.push('/editar-usuario');
            // }



        } catch (err) {
            console.error(err);
        };

    }

    function retrieveUsers() {

        window.location.reload();
        return false;
    }




    return (

        <>
            {/* MODAL */}
            {editUsuario ?

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <EditUsuario
                                    editUsuario={editUsuario}
                                    token={currentToken}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                : null}

            <div className="container text-center">
                <div className="container text-center d-flex justify-content-between">
                    <h2>Usuarios</h2>
                    <button className="btn btn-primary text-justify-end"><Link to="/crear-usuario">Crear Nuevo Usuario</Link></button>
                </div>

                <div className="container">

                </div>
                {isLoading ? <Loader /> :
                    (usuarios.length > 0) ?
                        usuarios.map((usuario) => (
                            <div className="d-flex usuarios-wrapper" key={usuario._id}>
                                <p className="my-3 align-middle">NOMBRE:<span className="mx-3">{usuario.nombre}</span></p><hr />
                                <p className="my-3 align-middle">APELLIDO:<span className="mx-3"> {usuario.apellido}</span></p><hr />
                                <p className="my-3 align-middle">EMAIL:<span className="mx-3">{usuario.email}</span></p><hr />
                                <p className="my-3 align-middle">PERFIL:<span className="mx-3">{usuario.perfil}</span></p><hr />
                                <div className="my-3 align-middle" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEdit(usuario._id)}><EditButton /></div>
                                <div className="my-3 align-middle" onClick={() => handleDelete(usuario._id)}><DeleteButton /></div>

                            </div>
                        )) : null}
                <div className="container text-center">
                    <button className="bt btn-secondary" onClick={() => retrieveUsers()}>Mostrar usuarios</button>
                </div>

                {/* MODAL FOR EDITING USUARIO */}



            </div>

        </>

    );
}

export default Usuarios;
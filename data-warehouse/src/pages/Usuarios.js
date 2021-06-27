import './Usuarios.scss';
import { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v4';
import axios from 'axios';
import { POST_USUARIO_URL } from '../constants/constants';


const Usuarios = () => {
    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        email: "",
        perfil: "admin",
        contrasena: "",
        isLoggedIn: false
    });
    const [error, setError] = useState(false);




    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    };

    const { nombre, apellido, email, perfil, contrasena } = usuario

    // SUBMIT FORM
    const submitUsuario = (e) => {
        e.preventDefault();

        //Validate
        if (nombre.trim() === "" || apellido.trim() === "" || email.trim() === "" || contrasena.trim() === "") {
            setError(true);
            return;
        }
        // To remove alert
        setError(false);

        //Asign ID
        usuario.id = uuid();

        // Create usuario
        axios.post(POST_USUARIO_URL, { nombre: nombre, apellido: apellido, email: email, perfil: perfil, contrasena: contrasena })
            .then(res => {
                console.log(res.data);
            })


        console.log(usuario)

        //Reset form


        //Get newly created Usuario


    }




    //action="/api/v1/usuario" method="POST"
    return (

        <>
            {error ? alert('Todos los campos son obligatorios') : null}

            <form onSubmit={submitUsuario} className=" text-center  usuarios-container">
                <div className="container form-container border  text-center">
                    <h3 className="my-4">Crear usuario</h3>

                    <div className="form-floating mb-3 my-3">
                        <input type="text" value={nombre} name="nombre" className="form-control" id="usuarios-nombre" onChange={handleChange} />
                        <label for="nombre">Nombre</label>
                    </div>
                    <div className="form-floating mb-3 my-3">
                        <input type="text" value={apellido} name="apellido" className="form-control" id="usuarios-apellido" onChange={handleChange} />
                        <label for="usuarios-apellido">Apellido</label>
                    </div>
                    <div className="form-floating mb-3 my-3">
                        <input type="email" value={email} name="email" className="form-control" id="usuarios-email" onChange={handleChange} />
                        <label for="email">Email</label>
                    </div>
                    <div className="form-floating mb-3 my-3">
                        <input type="text" hidden name="perfil" value="admin" className="form-control" id="usuarios-perfil" onChange={handleChange} />
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" value={contrasena} name="contrasena" className="form-control" id="usuarios-contrasena" onChange={handleChange} />
                        <label for="usuarios-contrasena">Contraseña</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" name="repetir-contrasena" className="form-control" id="usuarios-repetir-contrasena" onChange={handleChange} />
                        <label for="usuarios-repetir-contrasena">Repetir Contraseña</label>
                    </div>

                    <div className="d-flex ">
                        <button type="submit" className="btn btn-primary mt-4 ms-2" >Crear</button>
                    </div>

                </div>

            </form>

        </>

    );
}

export default Usuarios;
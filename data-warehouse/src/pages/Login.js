import { useState } from 'react';
import './Login.scss';
import CrearUsuario from '../pages/CrearUsuario';
import { POST_LOGIN_URL } from '../constants/constants';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    let history = useHistory();

    //State
    const [user, setUser] = useState({
        email: "",
        contrasena: ""
    })
    const [error, setError] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [token, setToken] = useState("");



    //Handles input changes
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const { email, contrasena } = user;

    // SUBMIT FORM
    const submitUsuario = (e) => {

        e.preventDefault();

        //Validate
        if (email.trim() === "" || contrasena.trim() === "") {
            setError(true);
            return;
        }
        // To remove alert
        setError(false);


        // Create usuario
        try {
            axios.post(POST_LOGIN_URL, { email: email, contrasena: contrasena })
                .then(res => {
                    let token = String(res.data.token);
                    window.localStorage.setItem('token', token);
                    window.localStorage.setItem('ID', email);

                    setToken(token);
                    console.log(res.data);
                    console.log(res.data.token)
                })
            setUser({
                email: "",
                contrasena: ""
            })


        } catch (err) {
            setLoginError(true);
        }

    }



    return (

        <>
            <form onSubmit={submitUsuario} className=" text-center  login-container">
                <div className="container form-container border  text-center">
                    <h3 className="my-4">Bienvenido</h3>
                    {error ? <p className="warning">Todos los campos son obligatorios</p> : null}
                    <div className="form-floating mb-3 my-3">
                        <input type="email" onChange={handleChange} name="email" className="form-control" id="login-email" placeholder="nombre@email.com" />
                        <label for="login-email">Email address</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" onChange={handleChange} name="contrasena" className="form-control" id="login-contrasena" placeholder="Password" />
                        <label for="login-contrasena">Contraseña</label>
                        {loginError ? <p className="warning">Email o contraseña equivocada.</p> : null}
                    </div>

                    <div className="d-flex ">
                        <button className="btn btn-primary mt-4 ms-2" >Ingresar</button>
                        <button className="btn btn-secondary mt-4 ms-2"><Link to="/crear-usuario">Registrarse</Link></button>
                    </div>
                </div>
            </form>



            {token ? history.push('/') : null}

        </>

    );
}

export default Login;
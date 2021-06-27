import './Login.scss';
import Usuarios from '../pages/Usuarios';

const Login = () => {


    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', 'Authorization','token' },
    //     authorization: {}
    //     body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    // };

    // const response = await fetch('/api/v1/usuario', requestOptions);
    // const data = await response.json();
    // setToken({ token: data.token });

    //action="/api/v1/usuario" method="POST"



    return (

        <>
            <form action="/api/v1/usuario" method="POST" className=" text-center  login-container">
                <div className="container form-container border  text-center">
                    <h3 className="my-4">Bienvenido</h3>
                    <div className="form-floating mb-3 my-3">
                        <input type="email" name="email" className="form-control" id="login-email" placeholder="nombre@email.com" />
                        <label for="login-email">Email address</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" name="contrasena" className="form-control" id="login-contrasena" placeholder="Password" />
                        <label for="login-contrasena">Contraseña</label>
                    </div>

                    <div className="d-flex ">
                        <button className="btn btn-primary mt-4 ms-2" >Ingresar</button>
                        <a className="btn btn-secondary mt-4 ms-2" data-bs-toggle="modal" data-bs-target="#registerModal" >Registrarse</a>
                    </div>
                </div>
            </form>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <Usuarios />
                    </div>
                </div>
            </div>

        </>

    );
}

export default Login;
import './Login.scss';


const Login = () => {

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
                    </div>

                </div>

            </form>

        </>

    );
}

export default Login;
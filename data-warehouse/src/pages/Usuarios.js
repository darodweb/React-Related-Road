import './Usuarios.scss';

const Usuarios = () => {

    // Get a list of usuarios from  /api/v1/usuarios and display with Edit and Delete options.

    return (

        <>
            <form action="/usuarios" method="POST" className=" text-center  usuarios-container">
                <div className="container form-container border  text-center">
                    <h3 className="my-4">Crear usuario</h3>
                    <div className="form-floating mb-3 my-3">
                        <input type="nombre" name="nombre" className="form-control" id="usuarios-nombre" />
                        <label for="nombre">Nombre</label>
                    </div>
                    <div className="form-floating mb-3 my-3">
                        <input type="apellido" name="apellido" className="form-control" id="usuarios-apellido" />
                        <label for="usuarios-apellido">Apellido</label>
                    </div>
                    <div className="form-floating mb-3 my-3">
                        <input type="email" name="email" className="form-control" id="usuarios-email" />
                        <label for="email">Email</label>
                    </div>
                    <div className="form-floating mb-3 my-3">
                        <input type="perfil" hidden name="perfil" value="admin" className="form-control" id="usuarios-perfil" />
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" name="contrasena" className="form-control" id="usuarios-contrasena" />
                        <label for="usuarios-contrasena">Contraseña</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" name="repetir-contrasena" className="form-control" id="usuarios-repetir-contrasena" />
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
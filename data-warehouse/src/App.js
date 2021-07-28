import { useState, useEffect } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Usuarios from './pages/Usuarios';
import Company from './pages/Company';
import Contactos from './pages/Contactos';
import Region from './pages/Region';
import Login from './pages/Login';
import CrearUsuario from './pages/CrearUsuario';
import EditUsuario from './pages/EditUsuario';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  //Checks if user is logged in
  useEffect(() => {
    let _hasToken = localStorage.getItem("token");
    if (_hasToken !== null) {
      setIsLoggedIn(true);
      setToken(_hasToken);

    } else {
      return true
    }

  }, [token])





  return (
    <>

      <BrowserRouter>
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setToken={setToken}
        />
        <Switch>

          <Route exact path="/">
            <Home
              isLoggedIn={isLoggedIn}
            />
          </Route>

          <Route exact path="/companies">
            <Company />
          </Route>

          <Route exact path="/contactos">
            <Contactos />
          </Route>

          <Route exact path="/region">
            <Region />
          </Route>

          <Route exact path="/usuarios">
            <Usuarios
            />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/crear-usuario">
            <CrearUsuario />
          </Route>

          <Route exact path="/editar-usuario">
            <EditUsuario />
          </Route>




        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;

import { useState, useEffect } from 'react';

import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Usuarios from './pages/Usuarios';
import Company from './pages/Company';
import Contactos from './pages/Contactos';
import Region from './pages/Region';
import Login from './pages/Login';



function App() {
  // const [usuarios, setUsuarios] = useState([]);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   };
  // }, [input])




  return (
    <>

      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
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
            <Usuarios />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>




        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;

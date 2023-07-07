import React from "react";
 import { BrowserRouter as Router, NavLink } from "react-router-dom";

import Main from "./Main";

function Header() {
  return (
    <Router>
      <div className="App">
        <nav className="navBar">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/años" activeClassName='active'>Años</NavLink>
            </li>
            <li>
              <NavLink to="/periodoanio" activeClassName='active'>Periodo por años</NavLink>
            </li>
            <li>
              <NavLink to="/periodomes" activeClassName='active'>Periodo por meses</NavLink>
            </li>
            <li>
              <NavLink to="/mineriadatos" activeClassName='active'>Minería de Datos</NavLink>
            </li>
            <li>
              <NavLink to="/contacto" activeClassName='active'>Contacto</NavLink>
            </li>
          </ul>
        </nav>

        <Main />
      </div>
    </Router>
  );
}

export default Header;

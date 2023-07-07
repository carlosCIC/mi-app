import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import VistaAños from "../components/Años/VistaAños";
import VistaPeriodo from "../components/Periodo/VistaPeriodo";
import VistaMes from "../components/Mes/TabVistaMes";
import Home from "../components/Inicio";
import Contacto from "../components/Contacto";
import VistaMineria from "../components/MineriaDatos/MineriaDatos";

function Main() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/años/" component={VistaAños} />
      <Route path="/periodoanio/" component={VistaPeriodo} />
      <Route path="/periodomes/" component={VistaMes} />
      <Route path="/mineriadatos/" component={VistaMineria} />
      <Route path="/contacto/" component={Contacto} />
      {/* testing sending string prop and destructure in component */}
    </div>
  );
}

export default Main;

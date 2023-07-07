import React from "react";
import LogoIPN from '../images/logo-ipn.png';
import LogoCIC from '../images/logo-cic.jpg';

export default function PiePagina(){return(
<>
<hr/>
<div id="footer"className=" align-content-center justify-content-center text-center" style={{position:'absolute',right: '0px',left: '0px'}} >
<div>
  <div className="container">
    <div className="row text-center">
      <div className="col-lg-8">
        <div className="row">
          <div className="col-3">
            <img src={LogoIPN} style={{width:'40%'}}/> 
          </div>
          <div className="col-6 text-center">
            <h3><b>Instituto Politécnico Nacional</b></h3>
              <p>
                <strong>"La técnica al servicio de la patria." </strong>
              </p>
              <p>
                <strong>Conmutador:</strong>  55 57 29 60 00 / 55 57 29 63 00<br/>
              </p>
              <h5><b>Dirección</b></h5>
              <p>Av. Luis Enrique Erro S/N,Zacatenco, Alcaldía Gustavo A. Madero,C.P. 07738, Ciudad de México</p>
          </div>
          <div className="col-3">
            <img src={LogoCIC} style={{width:'80%'}}/> 
          </div>
        </div>

      </div>

      <div className="col-lg-4 text-center" style={{textDecoration:'none'}}>
        <ul className="list-unstyled">
          <li><i className="bx bx-chevron-right"></i> <a href="https://www.ipn.mx/" className="text-decoration-none  text-black" target="_blank">IPN</a></li>
          <hr/>
          <li><i className="bx bx-chevron-right"></i> <a href="https://www.cic.ipn.mx/index.php/es/" className="text-decoration-none text-black" target="_blank">CIC IPN</a></li>
          <hr/>
          <li><i className="bx bx-chevron-right"></i> <a href="https://datos.gob.mx/" className="text-decoration-none text-black" target="_blank">Datos Abiertos del Gobierno de México</a></li>
          <hr/>
          <li><i className="bx bx-chevron-right"></i> <a href="https://www.esimez.ipn.mx/" className="text-decoration-none text-black" target="_blank">ESIME</a></li>
          <hr/>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
</>);
}
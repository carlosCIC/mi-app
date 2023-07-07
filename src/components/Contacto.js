import React from "react";
import Gilberto from "../images/Gilberto.jpg";
import Adolfo from "../images/Adolfo.jpg";
import Luis from "../images/Luis.jpg";
import css from "../components/Contacto.module.css"
export default function Contacto(){
    return(
        <>
            <div className={css.contenedor}>
                <h1>Contacto</h1>
                <div className="alert alert-success" role="alert">
                    La herramienta Navegación en los Servicios de Salud a través de la jerarquía del CIE 10 fue elaborada por el Laboratorio de Ciencia de Datos y Tecnología de Software del Centro de Investigación en Computación (CIC) que pertenece al Instituto Politécnico Nacional.
                </div>
                <div className={`table-responsive-sm  ${css.contenedortabla}`}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Datos de Contacto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={Gilberto} width="80px" height="100px"/></td>
                                <td>Dr. Gilberto Lorenzo Martínez Luna 
                                    <br/>
                                    <br/>
                                    
                                    Jefe del Laboratorio de Ciencia de Datos y Tecnologías de Software CIC IPN
                                </td>
                                <td>
                                    llunameztli@gmail.com
                                    <br/>lluna@cic.ipn.mx
                                    <br/>Tel. 01 55 5729 6000s
                                    <br/>Ext. 56600
                                </td>
                            </tr>
                            <tr>
                                <td ><img src={Adolfo} width="80px" height="100px"/></td>
                                <td>Dr. Adolfo Guzmán Arenas 
                                    <br/>
                                    <br/>
                                    Laboratorio de Ciencia de Datos y Tecnologías de Software CIC IPN
                                </td>
                                <td>a.guzman@acm.org
                                    <br/>aguzman@ieee.org
                                    <br/>Tel. 01 55 5729 6000
                                    <br/>Ext. 56569.
                                </td>
                            </tr>
                            <tr>
                                <td ><img src={Luis} width="80px" height="100px"/></td>
                                <td>Ing. Luis Ángel Cruzado Peña
                                    <br/>
                                    <br/>
                                    Prestador de servicio social
                                    <br/>Escuela Superior de Ingeniería Mecánica y Eléctrica ESIME IPN</td>
                                <td>luiscruzado@esimez.mx
                                    <br/>coctroll123@gmail.com
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
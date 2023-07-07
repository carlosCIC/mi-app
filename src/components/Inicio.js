import React from "react";
import logoReact from '../images/logo-react.png';
import logoMysql from '../images/logo-mysql.png';
import logoPython from '../images/logo-python.png';
import logoTableau from '../images/logo-tableau.png';
import imagenPrincipal from '../images/imagenPrincipal.png';
// import {motion} from "framer-motion/dist/framer-motion";
import css from './Inicio.module.css';
import Pulmon from "./Pulmon";
export default function Home() {
  const pulmonVariants={
    animationOne:{
      scale:.6,
      scale:1.1,
      transition:{
        scale:{
          yoyo:Infinity,
          duration:3
        },
        scale:{
          yoyo:Infinity,
          duration:2
        }

      }
    }
  }
  return (
    <>
    <div>

  {/* <!-- ======= Información sobre la página  ======= -->*/}
      <div id="Utilidades" className={css.utilidades}>
        <div className={css.datosutilidades}>
          <div className="row">
            <img src={logoMysql} height="55px" width="55px" alt=""/>
          </div>
          <div className="row">
            <img src={logoTableau} height="55px" width="55px" alt=""/>
          </div>
          <div className="row">
            <img src={logoPython} height="55px" width="55px" alt=""/>
          </div>
          <div className="row">
            <img src={logoReact} height="55px" width="55px" alt=""/>
          </div>
        </div>
      </div>

      <div className="container">
            <div className={`row ${css.principal}`}>
            
              <motion
               className={css.imageninicio}>
                    <img src={imagenPrincipal}></img>
              </motion>
              <motion 
              variants={pulmonVariants}
              animate="animationOne"
              className={css.pulmon}>
                <Pulmon/>
              </motion>
              <div className="col-2"></div>
              <div className="col-8"><h2><b>Navegación en los Servicios de Salud a través de la jerarquía del CIE 10 </b></h2></div>
              <div className="col-2"> </div>
              <motion
              initial={{ opacity: 0, x:-500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{

              duration: 2,
              type:'spring'

              }}
              className="col-6">
              <h4><b> Objetivo </b></h4>
              <p>
               Navegar a través de los servicios de salud, en base a la jerarquía de la Clasificación Internacional de Enfermedades en su décima versión para encontrar tendencias o patrones.
              </p>
              </motion>
              <div className="col-3"></div>
              <div className="col-3"></div>


            </div>
      </div>
      
    {/* <!-- ======= Información extra ======= -->*/} 
      <div id="infox">
        <div className="container">
          <motion 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01]
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          className="row">
            <h2 align="center"><strong> Información importante </strong></h2>
            <hr/>
              <div align="center" className="col-lg-4">
                    <h4>Catálogo CIE-10   <a href="https://icd.who.int/browse10/2010/en" className="text-decoration-none text-black" target="_blank"><i className='bx bx-link-external'></i></a></h4>
                    <h6 align="justify">Clasificación Internacional 
                    de Enfermedades en su décima edición, permite conocer las categorías y codificación 
                    de los diagnósticos. </h6>
              </div>
              <div align="center" className="col-lg-4">
                    <h4>Egresos hospitalarios   <a href="http://www.dgis.salud.gob.mx/contenidos/basesdedatos/da_egresoshosp_gobmx.html" className="text-decoration-none text-black" target="_blank"><i className='bx bx-link-external'></i> </a></h4>
                    <h6 align="justify"> Datos abiertos de la Secretaría de Salud en México de los Centros de Salud. </h6>
              </div>
              <div align="center" className="col-lg-4 infox-info">
                    <h4>Clínicas   <a href="http://www.dgis.salud.gob.mx/contenidos/intercambio/clues_gobmx.html" className="text-decoration-none text-black" target="_blank"> <i className='bx bx-link-external'></i></a></h4>
                    <h6 align="justify"> Catálogo de establecimientos de salud (CATCLUES), acceda a él para conocer los nombres y ubicaciones de las clínicas.  </h6>
              </div>
            </motion>
          </div>
        </div>
      </div>

    </>
  );
}

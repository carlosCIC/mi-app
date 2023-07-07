import React, { useState, useEffect } from "react";
export default function MineriaDatos(){
    var tamaño=window.innerWidth-100
    function cambiarTamaño(){
        tamaño=window.innerWidth-100
    }
    useEffect(()=>{
        window.addEventListener('resize',cambiarTamaño);
        return()=>{
          window.removeEventListener('resize',cambiarTamaño);
        }
      })
    return(
        <>
        <div>
            <iframe height="900" width={tamaño} frameborder="no" src="https://ssra-cic.shinyapps.io/SSRA/"> </iframe>
        </div>
        </>
    );
}
import React, { useState, useEffect } from "react";
import dashboards from "./VizList";
import OptionList from "./OptionList";
import css from "./VistaPeriodo.module.css"

const { tableau } = window;


function DynamicLoad() {
  const [vizList] = useState(dashboards);
  const [vizCount, setVizCount] = useState(0);
  const [viz, setViz] = useState(null);
  const [option, setOption] = useState("");
  const [listaOpciones] = useState(OptionList);
  async function filterEnfermedad(Enfermedad){
    if (Enfermedad === "") {
      setOption("");
    }
    else if(Enfermedad === "Embarazo, parto y puerperio"){
      const index=vizList.findIndex(elemento=>elemento.valor===Enfermedad);
      console.log(index);
      setVizCount(index);
      setOption("");
      
    } 
    else {
      const index=vizList.findIndex(elemento=>elemento.valor==="Otro");
      console.log(index);
      setVizCount(index);
      setOption(Enfermedad);
      await FiltrarEnfermedadSinEmbarazo(Enfermedad);  
    }
  };

  const initViz=()=>{
    let vizDiv = document.getElementById("vizContainer");
    let vizURL = vizList[vizCount].url;
    const options = {
      "Capítulo": option,
      hideTabs: true,
      width: window.innerWidth-100,
      height:1024
    };

    if (viz) {
      viz.dispose();
      setViz(null);
    }
    setViz(new tableau.Viz(vizDiv, vizURL, options));
  };
function cambiarTamaño(){
  initViz();
  
}

async function FiltrarEnfermedadSinEmbarazo(enfermedad) {
  var sheet = viz.getWorkbook().getActiveSheet();
  if (enfermedad === "" ) {
    sheet.clearFilterAsync("Capítulo");
  } else {
      sheet.applyFilterAsync("Capítulo", enfermedad, tableau.FilterUpdateType.REPLACE);
  }
}
  useEffect(initViz, [vizCount]);
  useEffect(()=>{
    window.addEventListener('resize',cambiarTamaño);
    return()=>{
      window.removeEventListener('resize',cambiarTamaño);
    }
  }
  )
  return (
    <div className={css.contenedor}>
      <select
        style={selectStyle}
        name="filterList"
        value={option}
        className={css.select}
        onChange={e => {
         filterEnfermedad(e.target.value);
        }}
      >
        {listaOpciones.map(value => {
          return (
            <option key={value.value} value={value.value}>
              {value.display}
            </option>
          );
        })}
      </select>
     
        <div className={css.viz} id="vizContainer" />

    </div>
  );
}
const selectStyle = {
  marginLeft: "10px"
};
export default DynamicLoad;

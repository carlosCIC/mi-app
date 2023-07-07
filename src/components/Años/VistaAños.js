import React, { useState, useEffect } from "react";
import dashboards from "./VizList";
import OptionList from "./OptionList";
import css from "./VistaAños.module.css"

const { tableau } = window;


function DynamicLoad() {
  const [vizList] = useState(dashboards);
  const [vizCount, setVizCount] = useState(0);
  const [viz, setViz] = useState(null);
  const [option, setOption] = useState("");
  const [listaOpciones] = useState(OptionList);
  const [width,setWidth] = useState(window.innerWidth);
  const [height,setHeight] = useState(window.innerHeight);
  const filterYear = year => {
    if (year === "") {
      setOption("");
    } else {
      const index=vizList.findIndex(elemento=>elemento.año===year);
      console.log(index);
      setVizCount(index);
      setOption(year);
    }
  };

  const initViz = () => {
    let vizDiv = document.getElementById("vizContainer");
    let vizURL = vizList[vizCount].url;
    const options = {
      hideTabs: true,
      width: width-100,
      height: height-100,
    };
    if (viz) {
      viz.dispose();
      setViz(null);
    }
    setViz(new tableau.Viz(vizDiv, vizURL, options));
  };
const cambiarTamaño=()=>{
  setHeight(window.innerHeight);
  setWidth(window.innerWidth);
  initViz();
}
  useEffect(initViz, [vizCount]);
  useEffect(()=>{
    window.addEventListener('resize',cambiarTamaño);
    return()=>{
      window.removeEventListener('resize',cambiarTamaño);
    }
  }
  )


  function ActualizarTodo(index){
    let year=vizList[index].año;
    setOption(year);
    setVizCount(index);
  }
  return (
    <div className={css.contenedor}>
      <select
        style={selectStyle}
        name="filterList"
        value={option}
        onChange={e => {
          filterYear(e.target.value);
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
      <button onClick={() =>ActualizarTodo(checkminValue(vizCount))}>Año siguiente</button>
      <button onClick={() =>ActualizarTodo(checkmaxValue(vizCount, vizList.length))}>Año anterior</button>
      <div  className={css.setVizStyle}>
        <div className={css.viz} style={viz} id="vizContainer" />
      </div>
    </div>
  );
}
const checkminValue = value => {
  return value > 1 ? value - 1 : 0;
};

const checkmaxValue = (value, max) => {
  return value < max - 1 ? value + 1 : max - 1;
};

const selectStyle = {
  marginLeft: "10px"
};
export default DynamicLoad;

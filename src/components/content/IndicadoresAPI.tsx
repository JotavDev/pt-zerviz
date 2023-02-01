import React, { useState, useEffect } from "react";
import { Cell, Row } from '@zendeskgarden/react-tables'
import PrimaryButton from "../buttons/PrimaryButton";
import Tabla from "./Tabla"
// import Rows from "./Row"

interface Indicador {
  nombre: string;
  unidad_medida: string,
  valor: number
}

const IndicadoresAPI = () => {
  const [indicadores, setIndicadores] = useState<{ [key: string]: Indicador }>({});

  const callIndicadores = async () => {
    let response = await fetch("https://mindicador.cl/api");
    let indicadores = await response.json();
    setIndicadores(indicadores as { [key: string]: Indicador });
  };

  useEffect(() => {
    callIndicadores();
  }, []);

  return(
    <div>
        <Tabla/>
        {/* {Object.entries(indicadores).map((ind) => {if((ind[1] as Indicador).nombre){
            return (<Rows 
                nombre={(ind[1] as Indicador).nombre} 
                unidad_medida={(ind[1] as Indicador).unidad_medida} 
                valor={(ind[1] as Indicador).valor}/>)
        }})} */}
    </div>
  )
};

export const Rows = ({nombre, unidad_medida, valor} : Indicador) => {
    return(
        <>
            <Row>
                <Cell>{nombre}</Cell>
                <Cell>{unidad_medida}</Cell>
                <Cell>{valor}</Cell>
            </Row>
        </>
    )
}

export default IndicadoresAPI;
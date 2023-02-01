import React, { useContext } from 'react';
import { Body, Head, HeaderCell, HeaderRow, Table } from '@zendeskgarden/react-tables';
import Rows from './Row';
import { storeContext, ContextType } from "../../store/store.context";

interface Indicador {
  nombre: string;
  unidad_medida: string;
  valor: number;
}

const Tabla = () => {
  const { indicadores } = useContext<ContextType>(storeContext);
  return(
    <div style={{ overflowX: 'auto' }}>
    <Table style={{ minWidth: 500 }}>
        <Head>
            <HeaderRow>
              <HeaderCell>Par</HeaderCell>
              <HeaderCell>Valor HOY</HeaderCell>
            </HeaderRow>
        </Head>
        <Body>
          {Object.values(indicadores).map((ind: Indicador) => {
            if(ind.nombre && ind.unidad_medida && ind.valor){
              return(
                <Rows 
                  nombre={ind.nombre}
                  unidad_medida={ind.unidad_medida}
                  valor={ind.valor}
                />
              )
            }
          })}
        </Body>
    </Table>
  </div>
  )
}

export default Tabla;

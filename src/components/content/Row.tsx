import React, { useContext } from "react";
import { Cell, Row } from "@zendeskgarden/react-tables";
import { storeContext, ContextType } from "../../store/store.context";

interface Props {
  nombre: string;
  unidad_medida: string;
  valor: number;
}

const Rows = ({ nombre, unidad_medida, valor }: Props) => {
  const { indicadores } = useContext<ContextType>(storeContext);
  let valorDisplay = '';
  switch (unidad_medida) {
  case 'Porcentaje':
  valorDisplay = `${valor}%`;
  break;
  case 'Pesos':
  valorDisplay = `$${valor}`;
  break;
  case 'Euro':
  valorDisplay = `€${valor}`;
  break;
  default:
  valorDisplay = `${valor} USD`;
  }
  return (
    <Row>
    <Cell>{nombre} / {unidad_medida}</Cell>
    <Cell>{valorDisplay}</Cell>
    </Row>
  );
};

export default Rows;
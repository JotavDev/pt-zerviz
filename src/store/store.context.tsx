import React, { useState, useEffect, createContext, ReactNode } from "react";

export interface ContextType {
  indicadores: { [key: string]: Indicador };
  callIndicadores: () => Promise<void>;
}

interface Indicador {
  nombre: string;
  unidad_medida: string;
  valor: number;
}

export const storeContext = createContext<ContextType>(null!);

export const IndicatorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [indicadores, setIndicadores] = useState<{
    [key: string]: Indicador;
  }>({});

  const callIndicadores = async () => {
    try {
      let response = await fetch("https://mindicador.cl/api");
      let indicadores = await response.json();
      setIndicadores(indicadores as { [key: string]: Indicador });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    callIndicadores();
  }, []);

  return (
    <storeContext.Provider
      value={{
        indicadores,
        callIndicadores,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};
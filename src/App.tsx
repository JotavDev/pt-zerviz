import './App.css'
import Header from './components/header/Header'
import Encabezados from './components/content/Encabezados'
import Indicadores from './components/content/Indicadores'
import { IndicatorProvider } from './store/store.context'

function App() {

  return (
    <IndicatorProvider>
      <div className="App">
        <Header />
        <div className="card">
          <Encabezados title="Conoce los indicadores económicos del día" />
          <Indicadores title="Pistacho" />
        </div>
      </div>
    </IndicatorProvider>
  );
}

export default App

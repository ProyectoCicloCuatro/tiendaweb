
import Header from './components/Header';
import Navegation from './components/Navegation';
import Footers from './components/Footers';
import './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import Rutas from './components/rutas';



function App() {
  return (
    <BrowserRouter>
      <Navegation />
      <Header />
      <Rutas/>
      <Footers />
      </BrowserRouter>
  );
}

export default App;

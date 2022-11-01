
import './App.css';

import MenuPrincipal from './components/MenuPrincipal';
import Navegation from './components/Navegation';
import Header from './components/Header';
import Rutas from './components/Rutas'
import ShoppingCart from './components/ShoppingCart';
import Footers from './components/Footers';

import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  
  return (
    <div>
      
      <Router >
      <Navegation />
      <Header />
      <Rutas />
      <Footers />

    </Router>
   </div>
    
  );
}

export default App;

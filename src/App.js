import List from './components/List';
import Menu from './components/Menu';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Navegation from './components/Navegation';
import Footers from './components/Footers';
import './styles/styles.css';



function App() {
  return (
   <div>
      <Navegation />
      <Header />
      <ShoppingCart />
      <Footers />
   </div>
  );
}

export default App;

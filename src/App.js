import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbartop from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Itemlistcontainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import AddToCart from './components/AddToCart/AddToCart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbartop />
        <Switch>
          <Route exact path="/">
            <Itemlistcontainer />
          </Route>
          <Route exact path="/category/:catId">
            <Itemlistcontainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart/:quantity">
            <AddToCart />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

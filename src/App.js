import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row} from 'react-bootstrap';
import Navbartop from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Itemlistcontainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import AddToCart from './components/AddToCart/AddToCart';
import { CartProvider } from './contexts/CartContext';
import Checkout from './components/Checkout/Checkout';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {

  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Navbartop />
        <main>
          <Container>
            <Row>
              <Col>
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
                  <Route exact path="/car">
                    <AddToCart />
                  </Route>
                  <Route exact path="/checkout">
                    <Checkout />
                  </Route>
                  <Route>
                    <PageNotFound />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbartop from './components/NavBar/NavBar';
import Itemlistcontainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbartop />
      <Itemlistcontainer />
    </div>
  );
}

export default App;

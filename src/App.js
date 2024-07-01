import NavBar from "./components/NavaBar"
import './App.css';
import ItemListcontainer from "./components/itemListContainer/ItemListcontainer";
function App() {
  return (
    <div className="App">
      <NavBar/>
       <ItemListcontainer greeting={"Bienvenidos"} />
      
    </div>
  );
}

export default App;

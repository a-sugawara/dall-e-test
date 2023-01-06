import StackNavigator from "./stackNavigator/stackNavigator";
import NavBar from "./components/common/navBar/nav-bar";
import MenuDrawer from "./components/menu/menuDrawer";
import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <MenuDrawer />
      <StackNavigator />
    </div>
  );
}

export default App;

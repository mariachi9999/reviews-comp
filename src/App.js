import logo from './assets/landing.jpeg';
import './App.css';
import {
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/reviews' component={Reviews}/>
    </div>
  );
}

export default App;

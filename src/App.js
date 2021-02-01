
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import Product from './Product'
import Login from './Login'
import Navbar from './Navbar';

function App() {
  return (
    

    <Router>
    <div className="App">
    {/* <Header></Header> */}
    <Navbar></Navbar>
    <Switch>
    <Route path="/login">
    <Login></Login>
    </Route>
    <Route path="/checkout">
    <Header></Header>
    <Checkout></Checkout>
    </Route>


    <Route path="/">
    <Header></Header>
    <Home></Home>
    </Route>
    </Switch>
  </div>
  </Router>
  );
}

export default App;

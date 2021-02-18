// Modules
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Components
import Home from './components/Route-Components/Home/Home';
import Product from './components/Route-Components/Product/Product';
import Cart from "./components/Route-Components/Cart/Cart";
import Checkout from "./components/Route-Components/Checkout/Checkout";
import OrderReceived from "./components/Route-Components/OrderReceived/OrderReceived";
import Login from "./components/Route-Components/Login/Login";
// Style Sheets
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/product/:id" exact component={Product}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/order-received" exact component={OrderReceived}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;

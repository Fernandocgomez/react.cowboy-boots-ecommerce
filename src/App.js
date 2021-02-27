// Modules
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// Components
import Home from './components/Route-Components/Home/Home';
import Product from './components/Route-Components/Product/Product';
import Cart from "./components/Route-Components/Cart/Cart";
import Checkout from "./components/Route-Components/Checkout/Checkout";
import OrderReceived from "./components/Route-Components/OrderReceived/OrderReceived";
import Login from "./components/Route-Components/Login/Login";
import Shipping from "./components/Route-Components/Shipping/Shipping";
import AllProducts from "./components/Route-Components/AllProducts/AllProducts";
import SignUp from "./components/Route-Components/SignUp/SignUp";
import AdminLogin from "./components/Route-Components/AdminLogin/AdminLogin";
import Dashboard from "./components/Route-Components/Dashboard/Dashboard";
import Orders from "./components/Route-Components/Orders/Orders";
import Order from "./components/Route-Components/Order/Order";
import Payment from "./components/Route-Components/Payment/Payment";
// Style Sheets
import './App.css';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/all-products" exact component={AllProducts}/>
        <Route path="/product/:id" exact component={Product}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/checkout/shipping" exact component={Shipping} />
        <Route path="/checkout/payment" exact component={Payment} />
        <Route path="/checkout/order-received" exact component={OrderReceived}/>
        <Route path="/sign-up" exact component={SignUp}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/admin/login" exact component={AdminLogin}/>
        <Route path="/admin/dashboard" exact component={Dashboard}/>
        <Route path="/admin/orders" exact component={Orders}/>
        <Route path="/admin/order/:id" exact component={Order}/>
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/Home/Home/About/About';
import Service from './Pages/Home/Service/Service';
import Footer from './Pages/Dashboard/Footer/Footer';
import Header from './Pages/Dashboard/Header/Header';
import ProductOrder from './Pages/ProductOrder/ProductOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/productOrder" component={ProductOrder} />
          <Route exact path="/about" component={About} />

        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;

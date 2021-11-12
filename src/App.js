import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/Home/Home/About/About';
import Services from './Pages/Home/Services/Services';
import Navigation from './Pages/Navigation/Navigation';
import Products from './Pages/Products/Products';
import Service from './Pages/Home/Service/Service';
import Footer from './Pages/Dashboard/Footer/Footer';
import Header from './Pages/Dashboard/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;

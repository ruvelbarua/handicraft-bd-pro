import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Pages/Dashboard/Footer/Footer';
import Header from './Pages/Dashboard/Header/Header';
import Products from './Pages/Products/Products';
import Login from './Pages/Login/Login';
import Admin from './Pages/Home/Admin/Admin';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import About from './Pages/Home/About/About';
import Users from './Pages/Home/Users/Users';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import NoPage from './Pages/Home/NoPage/NoPage';
import Booking from './Pages/Products/Booking/Booking';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Services from './Pages/Home/Services/Services';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <PrivateRoute path="/booking/:productId">
              <Booking />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/about">
              <About />
            </Route>
            <PrivateRoute path="/users">
              <Users />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NoPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

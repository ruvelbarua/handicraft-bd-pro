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
import ManageProducts from './Pages/Products/ManageProducts/ManageProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

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
            <Route exact path="/products">
              <Products />
            </Route>
            <PrivateRoute exact path="/booking/:productId">
              <Booking />
            </PrivateRoute>
            <Route exact path="/manageProducts">
              <ManageProducts />
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/about">
              <About />
            </Route>
            <PrivateRoute exact path="/users">
              <Users />
            </PrivateRoute>
            <PrivateRoute exact path="/admin">
              <Admin />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="*">
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

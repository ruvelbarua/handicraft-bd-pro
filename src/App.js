import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Dashboard/Footer/Footer';
import Header from './Pages/Dashboard/Header/Header';
import Products from './Pages/Products/Products';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Admin from './Pages/Home/Admin/Admin';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AddProducts from './Pages/Products/AddProducts/AddProducts';
import UpdateProduct from './Pages/Products/UpdateProduct/UpdateProduct';
import ProductOrder from './Pages/Products/ProductOrder/ProductOrder';
import About from './Pages/Home/About/About';
import Users from './Pages/Home/Users/Users';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import NoPage from './Pages/Home/NoPage/NoPage';

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
            <Route exact path="/services">
              <Services />
            </Route>
            <PrivateRoute exact path="/update/:productId">
              <UpdateProduct />
            </PrivateRoute>
            <Route exact path="/productOrder">
              <ProductOrder />
            </Route>
            <Route exact path="/addproducts">
              <AddProducts />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
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
